import { BaseModel } from '../core/classes/baseModel.interface';
import { SocialWork } from './socialWork.interface';

export interface Patient extends BaseModel {
  dni: string;
  name: string;
  lastname: string;
  idSocialWork: SocialWork;
  registerDate: Date;
}
