import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports/imports.module';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';



@NgModule({
  declarations: [
    UiNavbarComponent
  ],
  imports: [
    CommonModule,
    ImportsModule
  ],
  exports : [
    UiNavbarComponent
  ]
})
export class SharedModule { }
