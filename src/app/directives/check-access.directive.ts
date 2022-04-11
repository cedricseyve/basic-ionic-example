import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';

import {Features, Permission} from '../models/IPermission';
import {PermissionService} from '../services/permission.service';

@Directive({
  selector: '[appCheckAccess]',
})
export class CheckAccessDirective implements OnInit, OnDestroy {
  @Input() appCheckPermissions: Permission;
  @Input() appCheckPermissionsFeature: Features;

  private onDestroy$ = new Subject<boolean>();

  constructor(private permissionService: PermissionService, private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    if (this.permissionService.checkPermission(this.appCheckPermissionsFeature, this.appCheckPermissions)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }
}
