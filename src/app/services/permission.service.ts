import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor() {}

  public checkPermission(): boolean {
    return true;
  }
}
