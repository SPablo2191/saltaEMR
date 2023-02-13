import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports : [
    ButtonModule,
    SidebarModule,
    TableModule,
    InputTextModule,
    TooltipModule,
    DynamicDialogModule,
    ConfirmDialogModule
  ],
  providers: [
    DialogService,
    ConfirmationService,
    MessageService
  ]
})
export class ImportsModule { }
