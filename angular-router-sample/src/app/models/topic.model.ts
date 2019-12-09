export class Topic {
  pk: number;
  model: string;
  fields: TopicFields;
  token?: string;
}

export class TopicFields {
  name: string;
  numberOfPhotos: number;
  authorID: number;
  tags: string;
}
