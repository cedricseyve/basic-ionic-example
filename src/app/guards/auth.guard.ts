import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

import {PermissionService} from '../services/permission.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private permissionService: PermissionService) {}
  // "Can Activate" is used to block access to a page.
  // We could also use "Can Load" to also prevent the loading of a lazy module.
  // (could not be used alone here : once can load allowed a loading, the page won't be restricted => doesn't allow user change)
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.permissionService.checkPermission(route.data['feature'], route.data['permission']);
  }
}
