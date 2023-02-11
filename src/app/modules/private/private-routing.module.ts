import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: '',
        pathMatch:'full',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'medicalrecord',
        loadChildren: () =>
          import('./modules/medical-record/medical-record.module').then(
            (m) => m.MedicalRecordModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
