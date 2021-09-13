import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from '../models/application.model';
import { GradesResult } from '../models/grades-result.model';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  //We specify any as the result set as we will map the values to our custom result
  //object
  async addApplication(application: Application): Promise<any> {
    return await this.http
      .post<any>(
        'https://localhost:44303/api/Application/AddApplicationApplicant',
        application,
        {}
      )
      .toPromise();
  }

  async GetGrades(): Promise<GradesResult> {
    return await this.http
      .get<GradesResult>('https://localhost:44303/api/Grade/GetAllGrades')
      .toPromise();
  }

}
