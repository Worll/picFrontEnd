import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { User } from './models/user.model';
import { Topic } from './models/topic.model';
import { Picture } from './models/picture.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PicturesService {
  constructor(private http: HttpClient) { }

  getAllPicturesById(topicId: number) {
    return this.http.get<Picture[]>(`${environment.apiUrl}/api/topics/` + topicId + `/pictures/`);
  }

  deletePictureById(topicId: number, pictureID: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/topics/` + topicId + `/pictures/` + pictureID + '/' , { responseType: 'text' });
  }

  createPicture(topicId: number, pictureUrl: string, description:string) {
    return this.http.post(`${environment.apiUrl}/api/topics/` + topicId + `/pictures/`,
      {
        'pictureUrl': pictureUrl,
        'description': description
      }).pipe(map(response => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('reponse', JSON.stringify(response));
        return response;
      }));
  }
}
