import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Features, IFeaturePermission, Permission} from '../models/IPermission';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  private mockedAdminRights: IFeaturePermission[] = [
    {
      feature: Features.Tab1,
      permission: Permission.Admin,
    },
    {
      feature: Features.Tab2,
      permission: Permission.Admin,
    },
    {
      feature: Features.Card1,
      permission: Permission.Admin,
    },
    {
      feature: Features.Card2,
      permission: Permission.Admin,
    },
    {
      feature: Features.Card3,
      permission: Permission.Admin,
    },
  ];

  private mockedUserRights: IFeaturePermission[] = [
    {
      feature: Features.Tab1,
      permission: Permission.View,
    },
    {
      feature: Features.Tab2,
      permission: Permission.None,
    },
    {
      feature: Features.Card1,
      permission: Permission.View,
    },
    {
      feature: Features.Card2,
      permission: Permission.View,
    },
    {
      feature: Features.Card3,
      permission: Permission.View,
    },
  ];
  constructor(private userService: UserService) {}

  public getUserAuthorisations(): Observable<IFeaturePermission[]> {
    return this.userService.getUser().pipe(
      switchMap(user => {
        if (user.codeProfil === 'RD') {
          return from([this.mockedAdminRights]);
        } else {
          return from([this.mockedUserRights]);
        }
      })
    );
  }

  public async checkPermission(feature: Features, permission: Permission): Promise<boolean> {
    const userPermissions = await this.getUserAuthorisations().toPromise();
    const featurePermission = userPermissions.find(f => f.feature === feature);

    if (!!featurePermission) {
      switch (permission) {
        case Permission.View:
          return featurePermission.permission !== Permission.None;
        case Permission.Admin:
          return featurePermission.permission === Permission.Admin;
      }
    }
    return false;
  }
}
