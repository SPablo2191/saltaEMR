import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { crudParent } from 'src/app/core/interfaces/crud.parent.interface';
import { Patient } from 'src/app/models/patient.interface';
import { MedicalRecordDataService } from 'src/app/services/medical-record-data.service';
import { CreateDialogMedRecordComponent } from './components/create-dialog-med-record/create-dialog-med-record.component';
import { EditDialogMedRecordComponent } from './components/edit-dialog-med-record/edit-dialog-med-record.component';
import { ViewDialogMedRecordComponent } from './components/view-dialog-med-record/view-dialog-med-record.component';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit,crudParent{
  title : string = 'Paciente';
  items$! : Observable<Patient[]>;
  updateComponent = EditDialogMedRecordComponent;
  viewComponent = ViewDialogMedRecordComponent;
  createComponent = CreateDialogMedRecordComponent;
  constructor(private medicalRecordData : MedicalRecordDataService){}
  ngOnInit(): void {
    this.items$ = this.medicalRecordData.get();
  }

}
