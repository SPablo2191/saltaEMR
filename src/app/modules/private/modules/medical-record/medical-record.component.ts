import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient.interface';
import { MedicalRecordDataService } from 'src/app/services/medical-record-data.service';
import { EditDialogMedRecordComponent } from './components/edit-dialog-med-record/edit-dialog-med-record.component';
import { ViewDialogMedRecordComponent } from './components/view-dialog-med-record/view-dialog-med-record.component';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit{
  title : string = 'Paciente';
  items$! : Observable<Patient[]>;
  updateComponent = EditDialogMedRecordComponent;
  viewComponent = ViewDialogMedRecordComponent;
  constructor(private medicalRecordData : MedicalRecordDataService){}
  ngOnInit(): void {
    this.items$ = this.medicalRecordData.get();
  }

}
