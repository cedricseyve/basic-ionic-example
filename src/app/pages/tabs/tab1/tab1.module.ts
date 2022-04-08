import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared.module';

import { ExploreContainerComponentModule } from '../../../components/explore-container/explore-container.module';
import { Tab1CardComponent } from './tab1-card/tab1-card.component';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponentModule, Tab1PageRoutingModule, SharedModule],
  declarations: [Tab1Page, Tab1CardComponent],
})
export class Tab1PageModule {}
