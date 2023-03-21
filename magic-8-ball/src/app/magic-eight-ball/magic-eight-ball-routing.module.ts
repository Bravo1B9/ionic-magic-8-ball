import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagicEightBallPage } from './magic-eight-ball.page';

const routes: Routes = [
  {
    path: '',
    component: MagicEightBallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicEightBallPageRoutingModule {}
