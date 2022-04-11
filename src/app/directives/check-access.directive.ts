import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';

import {Features, Permission} from '../models/IPermission';
import {PermissionService} from '../services/permission.service';
import {UserService} from '../services/user.service';

@Directive({
  selector: '[appCheckAccess]',
})
export class CheckAccessDirective implements OnInit, OnDestroy {
  @Input() appCheckAccess: Permission;
  @Input() appCheckAccessFeature: Features;

  private onDestroy$ = new Subject<boolean>();
  private userSubscription: Subscription;

  constructor(private permissionService: PermissionService, private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private userService: UserService) {}

  async ngOnInit() {
    this.displayOrHideComponent();
    // This subscription is only used for example purposes and auto refreshing when mocked user is updated in Ionic.
    // Ionic view cache prevents directive to refresh the page and re-check every components.
    // Should not be used if app is refreshed when user is changed.
    this.userSubscription = this.userService
      .getUserChanges()
      .pipe(tap(() => this.displayOrHideComponent()))
      .subscribe();
  }

  private async displayOrHideComponent() {
    // hide component
    this.viewContainer.clear();
    const canAccess = await this.permissionService.checkPermission(this.appCheckAccessFeature, this.appCheckAccess);
    // display component if authorized
    if (canAccess) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
