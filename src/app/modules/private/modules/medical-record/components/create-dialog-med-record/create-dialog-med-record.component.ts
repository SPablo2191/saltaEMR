import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Patient } from 'src/app/models/patient.interface';

@Component({
  selector: 'app-create-dialog-med-record',
  templateUrl: './create-dialog-med-record.component.html',
  styleUrls: ['./create-dialog-med-record.component.scss']
})
export class CreateDialogMedRecordComponent extends abstractForm implements OnInit{
  constructor(
    ref: DynamicDialogRef,
    messageService: MessageService,
    fb: FormBuilder
  ) {
    super(ref,messageService,fb);
  }
  ngOnInit(): void {
    this.createForm({
      id : [],
      dni: [],
      name: [],
      lastname: [],
      idSocialWork: [],
      registerDate: [],
    });
  }
}
