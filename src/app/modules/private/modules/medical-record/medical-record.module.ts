import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRecordRoutingModule } from './medical-record-routing.module';
import { MedicalRecordComponent } from './medical-record.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    MedicalRecordComponent
  ],
  imports: [
    CommonModule,
    MedicalRecordRoutingModule,
    SharedModule,
    PipesModule
  ]
})
export class MedicalRecordModule { }
