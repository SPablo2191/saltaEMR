import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports/imports.module';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';
import { RouterModule } from '@angular/router';
import { UiHomeButtonComponent } from './ui-home-button/ui-home-button.component';
import { UiCrudTableComponent } from './ui-crud-table/ui-crud-table.component';
import { UiConfirmationDialogComponent } from './ui-confirmation-dialog/ui-confirmation-dialog.component';



@NgModule({
  declarations: [
    UiNavbarComponent,
    UiHomeButtonComponent,
    UiCrudTableComponent,
    UiConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    RouterModule
  ],
  exports : [
    UiNavbarComponent,
    UiHomeButtonComponent,
    UiCrudTableComponent
  ]
})
export class SharedModule { }
