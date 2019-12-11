export class Picture {
  pk: number;
  model: string;
  fields: PictureFields;
}

export class PictureFields {
  authorID: number;
  dislikes: number;
  likes: number;
  numberOfComments: number;
  pictureUrl: string;
  topicID: number;
}