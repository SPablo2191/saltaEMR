import { BaseModel } from '../core/classes/baseModel.interface';
import { Patient } from './patient.interface';

export interface Observations extends BaseModel {
  description: string;
  idPatient: Patient;
  registerDate: Date;
}
