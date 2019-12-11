import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { User } from './models/user.model';
import { Topic } from './models/topic.model';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class TopicService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Topic[]>(`${environment.apiUrl}/api/topics/`);
  }

  createTopic(topicName: string, tags: string) {
    return this.http.post(`${environment.apiUrl}/api/topics/`,
      {
        'topicName': topicName,
        'tags': tags
      }).pipe(map(response => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('reponse', JSON.stringify(response));
        return response;
      }));




  }
}
