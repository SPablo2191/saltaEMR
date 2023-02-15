import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Patient } from 'src/app/models/patient.interface';

@Component({
  selector: 'app-view-dialog-med-record',
  templateUrl: './view-dialog-med-record.component.html',
  styleUrls: ['./view-dialog-med-record.component.scss']
})
export class ViewDialogMedRecordComponent {
  patientData : Patient = this.config.data;
  constructor(
    public config: DynamicDialogConfig
  ){}
}
