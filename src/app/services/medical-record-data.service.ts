import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Patient } from '../models/patient.interface';
import { SocialWork } from '../models/socialWork.interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalRecordDataService {
  items: Patient[] = [
    {
      id: 1,
      lastname: 'sandoval',
      name: 'pablo',
      registerDate: new Date(),
      dni: '43168585',
      idSocialWork: { id: 1, name: 'IPS' } as SocialWork,
    } as Patient,
    {
      id: 2,
      lastname: 'sandoval',
      name: 'pablo',
      registerDate: new Date(),
      dni: '43168585',
      idSocialWork: { id: 1, name: 'IPS' } as SocialWork,
    } as Patient,
    {
      id: 3,
      lastname: 'sandoval',
      name: 'pablo',
      registerDate: new Date(),
      dni: '43168585',
      idSocialWork: { id: 1, name: 'IPS' } as SocialWork,
    } as Patient,
    {
      id: 4,
      lastname: 'sandoval',
      name: 'pablo',
      registerDate: new Date(),
      dni: '43168585',
      idSocialWork: { id: 1, name: 'IPS' } as SocialWork,
    } as Patient,
    {
      id: 5,
      lastname: 'sandoval',
      name: 'pablo',
      registerDate: new Date(),
      dni: '43168585',
      idSocialWork: { id: 1, name: 'IPS' } as SocialWork,
    } as Patient,
  ];
  constructor() {}
  get(){
    return of(this.items);
  }
}
