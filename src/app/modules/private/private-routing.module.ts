import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  { path: '', component: PrivateComponent },
  { path: 'medicalrecord', loadChildren: () => import('./modules/medical-record/medical-record.module').then(m => m.MedicalRecordModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
