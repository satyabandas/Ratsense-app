import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { ZonemapPageRoutingModule } from './zonemap-routing.module';

import { ZonemapPage } from './zonemap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighchartsChartModule,
    ZonemapPageRoutingModule
  ],
  declarations: [ZonemapPage]
})
export class ZonemapPageModule {
  

  constructor(private router: Router){
    const self = this;
  }

  navigate(){
    this.router.navigate(['/zonemap'])
  }
}
