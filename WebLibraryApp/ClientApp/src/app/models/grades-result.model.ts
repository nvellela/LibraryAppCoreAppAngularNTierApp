import { Iresult } from '../interfaces/iresult';
import { Grade } from './grade.model';

export class GradesResult implements Iresult {
  success: boolean;
  userMessage: string;
  result_set: Grade[] = [];
}
