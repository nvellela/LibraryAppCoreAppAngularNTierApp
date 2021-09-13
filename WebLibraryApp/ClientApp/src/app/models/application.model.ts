import { Applicant } from './applicant.model';

export class Application {
  applicant_id: number;
  grade_id: number;
  school_year: number;
  applicant: Applicant = new Applicant();
}
