import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRecordRoutingModule } from './medical-record-routing.module';
import { MedicalRecordComponent } from './medical-record.component';


@NgModule({
  declarations: [
    MedicalRecordComponent
  ],
  imports: [
    CommonModule,
    MedicalRecordRoutingModule
  ]
})
export class MedicalRecordModule { }
