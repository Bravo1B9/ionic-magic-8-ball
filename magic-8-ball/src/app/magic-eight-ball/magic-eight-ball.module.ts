import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagicEightBallPageRoutingModule } from './magic-eight-ball-routing.module';

import { MagicEightBallPage } from './magic-eight-ball.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagicEightBallPageRoutingModule
  ],
  declarations: [MagicEightBallPage]
})
export class MagicEightBallPageModule {}
