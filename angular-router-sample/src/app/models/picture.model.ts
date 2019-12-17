import { Comment } from '../models/comment.model';

export class Picture {
  pk: number;
  model: string;
  fields: PictureFields;
}

export class PictureFields {
  authorID: number;
  authorUsername: string;
  dislikes: number;
  likes: number;
  numberOfComments: number;
  pictureUrl: string;
  topicID: number;
  isDeleted: boolean = false;
  showComments: boolean = false;
  error: string;
  comments: Comment[];
}
