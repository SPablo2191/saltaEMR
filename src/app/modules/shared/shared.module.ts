import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports/imports.module';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';
import { RouterModule } from '@angular/router';
import { UiHomeButtonComponent } from './ui-home-button/ui-home-button.component';



@NgModule({
  declarations: [
    UiNavbarComponent,
    UiHomeButtonComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    RouterModule
  ],
  exports : [
    UiNavbarComponent,
    UiHomeButtonComponent
  ]
})
export class SharedModule { }
