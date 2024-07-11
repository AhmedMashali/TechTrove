import { ObjectId } from 'mongoose';

export class ArticleDto {
  readonly _id?: ObjectId;
  readonly title: string;
  readonly description: string;
  readonly content: string;
  readonly likes?: number;
  readonly comments?: number;
  readonly author?: object;
}
