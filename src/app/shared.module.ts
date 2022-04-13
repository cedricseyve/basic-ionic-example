import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {NgCalendarModule} from 'ionic2-calendar';

import {LgCardComponent} from './components/lg-card/lg-card.component';
import {CheckAccessDirective} from './directives/check-access.directive';

// Shared components and modules must be imported AND exported
const sharedComponents = [LgCardComponent, CheckAccessDirective];
const sharedModules = [NgCalendarModule];

@NgModule({
  declarations: sharedComponents,
  imports: [CommonModule, IonicModule, ...sharedModules],
  exports: [...sharedComponents, ...sharedModules],
})
export class SharedModule {}
