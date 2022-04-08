import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

import { PermissionService } from '../services/permission.service';

@Directive({
  selector: '[appCheckAccess]',
})
export class CheckAccessDirective implements OnInit, OnDestroy {
  // @Input() appCheckPermissions: Permission;
  // @Input() appCheckPermissionsFeature: Features;

  private onDestroy$ = new Subject<boolean>();

  constructor(/* private store: Store, */ private permissionService: PermissionService, private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    // this.store.pipe(select(userSelectors.selectUser), takeUntil(this.onDestroy$)).subscribe(user => {
    if (/* !!user &&  */ this.permissionService.checkPermission(/* user, this.appCheckPermissionsFeature, this.appCheckPermissions */)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
    // });
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }
}
