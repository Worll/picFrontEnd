import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { User } from './models/user.model';
import { Topic } from './models/topic.model';
import { Picture } from './models/picture.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PicturesService {
  constructor(private http: HttpClient) { }

  getAllPicturesById(topicId: number) {
    return this.http.get<Picture[]>(`${environment.apiUrl}/api/topics/` + topicId + `/pictures/`);
  }

  createPicture(topicId: number, pictureUrl: string) {
    return this.http.post(`${environment.apiUrl}/api/topics/` + topicId + `/pictures/`,
      {
        'pictureUrl': pictureUrl
      }).pipe(map(response => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('reponse', JSON.stringify(response));
        return response;
      }));
  }
}
