import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonemapPage } from './zonemap.page';

const routes: Routes = [
  {
    path: '',
    component: ZonemapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonemapPageRoutingModule {}
