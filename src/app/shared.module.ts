import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {LgCardComponent} from './components/lg-card/lg-card.component';
import {CheckAccessDirective} from './directives/check-access.directive';

const sharedComponents = [LgCardComponent, CheckAccessDirective];
const sharedModules = [];

@NgModule({
  declarations: sharedComponents,
  imports: [CommonModule, IonicModule],
  exports: [...sharedComponents, ...sharedModules],
})
export class SharedModule {}
