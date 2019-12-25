
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { User } from './models/user.model';
import { Topic } from './models/topic.model';
import { Picture } from './models/picture.model';

import { Comment } from './models/comment.model';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private http: HttpClient) { }

  getAllCommentsByTopicIDPictureID(topicId: number, pictureId: number ) {
    return this.http.get<Comment[]>(`${environment.apiUrl}/api/topics/` + topicId + `/pictures/` + pictureId + `/comments/`) ;
  }

  createComment(commenText: string, topicId: number, pictureId: number) {
    return this.http.post(`${environment.apiUrl}/api/topics/` + topicId + `/pictures/` + pictureId + `/comments/`,
      {
        'commentText': commenText
      }).pipe(map(response => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('reponse', JSON.stringify(response));
        return response;
      }));
  }
}
