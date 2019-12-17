
export class Comment {
  pk: number;
  model: string;
  fields: CommentFields;
}

export class CommentFields {
  commentID : number;
  commentText: string;
  likes: number;
  dislikes: number;
  authorID: number;
  authorUsername: string;
  pictureID: number;
}
