import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRecordRoutingModule } from './medical-record-routing.module';
import { MedicalRecordComponent } from './medical-record.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { EditDialogMedRecordComponent } from './components/edit-dialog-med-record/edit-dialog-med-record.component';
import { ViewDialogMedRecordComponent } from './components/view-dialog-med-record/view-dialog-med-record.component';
import { CreateDialogMedRecordComponent } from './components/create-dialog-med-record/create-dialog-med-record.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MedicalRecordComponent,
    EditDialogMedRecordComponent,
    ViewDialogMedRecordComponent,
    CreateDialogMedRecordComponent
  ],
  imports: [
    CommonModule,
    MedicalRecordRoutingModule,
    SharedModule,
    PipesModule,
    ReactiveFormsModule
  ]
})
export class MedicalRecordModule { }
