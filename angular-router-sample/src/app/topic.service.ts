import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { User } from './models/user.model';
import { Topic } from './models/topic.model';


@Injectable({ providedIn: 'root' })
export class TopicService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Topic[]>(`${environment.apiUrl}/api/topics/`);
  }
}
