import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { User } from './models/user.model';
import { Topic } from './models/topic.model';
import { Picture } from './models/picture.model';

@Injectable({ providedIn: 'root' })
export class PicturesService {
  constructor(private http: HttpClient) { }

  getAllPicturesById(topicId: number) {
    return this.http.get<Picture[]>(`${environment.apiUrl}/api/topics/` + topicId + `/pictures/`);
  }
}
