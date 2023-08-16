import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(
    private _httpClient: HttpClient
  ) { }

  public list() {
    return this._httpClient.get<Course[]>(this.API);
  }
}
