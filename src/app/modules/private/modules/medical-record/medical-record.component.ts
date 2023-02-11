import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient.interface';
import { MedicalRecordDataService } from 'src/app/services/medical-record-data.service';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit{
  items$! : Observable<Patient[]>;
  constructor(private medicalRecordData : MedicalRecordDataService){}
  ngOnInit(): void {
    this.items$ = this.medicalRecordData.get();
  }

}
