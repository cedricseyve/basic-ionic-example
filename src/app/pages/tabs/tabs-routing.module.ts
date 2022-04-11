import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'src/app/guards/auth.guard';
import {Features, Permission} from 'src/app/models/IPermission';

import {TabsPage} from './tabs.page';

// An example of a page with children pages.
// We could also avoid using this page and directly declare our tabs in app-routing.
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // A tab accessible to all user with basic permissions.
      {
        path: 'tab1',
        loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule),
        canActivate: [AuthGuard],
        data: {feature: Features.Tab1, permission: Permission.View},
      },
      // A tab only accessible to admin users.
      {
        path: 'tab2',
        loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule),
        canActivate: [AuthGuard],
        data: {feature: Features.Tab2, permission: Permission.Admin},
      },
      // A tab without access restriction. Accessible to all users even when not logged in.
      {
        path: 'tab3',
        loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule),
      },
      // Default redirect.
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
