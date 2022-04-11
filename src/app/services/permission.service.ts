import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Features, IFeaturePermission, Permission} from '../models/IPermission';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor(private userService: UserService) {}

  public getUserAuthorisations(): Observable<IFeaturePermission[]> {
    return this.userService.getUser().pipe(
      switchMap(user => {
        return this.userService.getUserPermissions(user.codeProfil);
      })
    );
  }

  public async checkPermission(feature: Features, permission: Permission): Promise<boolean> {
    // We fetch the list of user's permissions
    const userPermissions = await this.getUserAuthorisations().toPromise();
    // We get the user's permission for the feature we're checking
    const featurePermission = userPermissions.find(f => f.feature === feature);

    if (!!featurePermission) {
      switch (permission) {
        case Permission.View:
          // access granted as long as user's permission is not "None"
          return featurePermission.permission !== Permission.None;
        case Permission.Admin:
          // access granted only if user's permission is "Admin"
          return featurePermission.permission === Permission.Admin;
      }
    }
    // If feature is not in user's permission list => default to access not granted.
    return false;
  }
}
