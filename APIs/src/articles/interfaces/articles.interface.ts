import { ObjectId } from 'mongoose';

export interface Article {
  _id?: ObjectId;
  title: string;
  description: string;
  content: string;
  likes?: number;
  comments?: number;
  readonly author?: object;
}
