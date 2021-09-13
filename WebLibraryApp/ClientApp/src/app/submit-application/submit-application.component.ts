import { Component, OnInit } from '@angular/core';
import { ApplicationResult } from '../models/application-result.model';
import { Application } from '../models/application.model';
import { GradesResult } from '../models/grades-result.model';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-submit-application',
  templateUrl: './submit-application.component.html',
  styleUrls: ['./submit-application.component.css'],
})
export class SubmitApplicationComponent implements OnInit {
  currentApplication: Application = new Application();
  grades: GradesResult = new GradesResult();
  load: string = 'no-show';
  disabled: string = '';
  constructor(private applicationService: ApplicationService) {}

  async ngOnInit(): Promise<void> {
    //GET TH GRADES ON LOAD
    this.grades.result_set = [];
    var t = await this.applicationService
      .GetGrades()
      .then((data) => {
        if (data.success) {
          this.grades = data;
        } else {
          alert(data.userMessage);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  async SubmitApplication() {
    let result = new ApplicationResult();
    this.disabled = 'disabled';
    this.load = '';
    await this.applicationService
      .addApplication(this.currentApplication)
      .then((data) => {
        result.success = data.success;
        result.userMessage = data.userMessage;
        result.id = data.result_set.application_ResultSet.id;
        if (result.success) {
          alert('Your reference code is: application' + result.id);
        } else {
          alert(result.userMessage);
        }
        this.currentApplication = new Application();
      })
      .catch((error) => {
        alert(
          error.error.userMessage +
            ' Please make sure you have provided all the values'
        );
      });
    this.disabled = '';
    this.load = 'no-show';
  }
}
