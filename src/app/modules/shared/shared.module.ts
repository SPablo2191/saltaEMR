import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports/imports.module';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UiNavbarComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    RouterModule
  ],
  exports : [
    UiNavbarComponent
  ]
})
export class SharedModule { }
