import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { crudTable } from 'src/app/core/classes/crud.table.class';

@Component({
  selector: 'ui-crud-table',
  templateUrl: './ui-crud-table.component.html',
  styleUrls: ['./ui-crud-table.component.scss'],
})
export class UiCrudTableComponent extends crudTable {
  @Input() cols: any[] = [];
  @Input() items: any[] = [];
  @Input() override updateComponent: any;
  @Input() override viewComponent: any;
  @Input() override createComponent: any;
  @Input() override title: string = '';
  constructor(
    dialogService: DialogService,
    confirmationService: ConfirmationService
  ) {
    super(dialogService, confirmationService);
  }
}
