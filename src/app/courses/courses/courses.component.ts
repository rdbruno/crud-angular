import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public displayedColumns = ['name', 'category'];
  public courses: Observable<Course[]>;

  constructor(
    private _coursesService: CoursesService
  ) {
    this.courses = this._coursesService.list();
  }

  ngOnInit(): void {    
  }

}
