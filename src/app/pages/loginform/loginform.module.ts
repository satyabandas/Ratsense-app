import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginformPageRoutingModule } from './loginform-routing.module';

import { LoginformPage } from './loginform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginformPageRoutingModule
  ],
  declarations: [LoginformPage]
})
export class LoginformPageModule {
  constructor(private router: Router){}

  navigate(){
    this.router.navigate(['/site'])
  }
}