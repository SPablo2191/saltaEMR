import { BaseModel } from "./baseModel.interface";
import { Patient } from "./patient.interface";

export interface Observations  extends BaseModel
{
  description : string;
  idPatient : Patient;
  registerDate : Date;
}
