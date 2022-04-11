import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

import {PermissionService} from '../services/permission.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private permissionService: PermissionService) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.permissionService.checkPermission(route.data.feature, route.data.permission);
  }
}
