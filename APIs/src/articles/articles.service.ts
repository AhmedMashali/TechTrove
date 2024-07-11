import { Injectable } from '@nestjs/common';
import { Article } from './interfaces/articles.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel('Article') private readonly ArticleModel: Model<Article>,
  ) {}

  async getAllArticles(): Promise<Article[]> {
    return await this.ArticleModel.find().sort({ createdAt: 'desc' });
  }

  async createArticle(article: Article): Promise<Article> {
    const newArticle = new this.ArticleModel(article);
    return await newArticle.save();
  }

  async getArticle(id: ObjectId): Promise<Article> {
    return await this.ArticleModel.findById(id);
  }

  async updateArticle(id: ObjectId, article: Article): Promise<Article> {
    return await this.ArticleModel.findByIdAndUpdate(id, article, {
      new: true,
    });
  }

  async deleteArticle(id: ObjectId): Promise<Article> {
    return await this.ArticleModel.findOneAndDelete(id);
  }
}
