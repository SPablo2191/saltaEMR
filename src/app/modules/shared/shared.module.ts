import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports/imports.module';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';
import { RouterModule } from '@angular/router';
import { UiHomeButtonComponent } from './ui-home-button/ui-home-button.component';
import { UiCrudTableComponent } from './ui-crud-table/ui-crud-table.component';
import { UiConfirmationDialogComponent } from './ui-confirmation-dialog/ui-confirmation-dialog.component';
import { UiInputTextComponent } from './ui-input-text/ui-input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiCalendarComponent } from './ui-calendar/ui-calendar.component';
import { UiDropdownComponent } from './ui-dropdown/ui-dropdown.component';



@NgModule({
  declarations: [
    UiNavbarComponent,
    UiHomeButtonComponent,
    UiCrudTableComponent,
    UiConfirmationDialogComponent,
    UiInputTextComponent,
    UiCalendarComponent,
    UiDropdownComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports : [
    UiNavbarComponent,
    UiHomeButtonComponent,
    UiCrudTableComponent,
    UiInputTextComponent,
    UiCalendarComponent,
    UiDropdownComponent
  ]
})
export class SharedModule { }
