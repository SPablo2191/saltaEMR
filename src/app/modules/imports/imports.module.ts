import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports : [
    ButtonModule,
    SidebarModule,
    TableModule,
    InputTextModule
  ]
})
export class ImportsModule { }
