import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Article } from './interfaces/articles.interface';
import { ArticlesService } from './articles.service';
import { ArticleDto } from './dto/article.dto';
import { ObjectId } from 'mongoose';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getAllArticles(): Promise<Article[]> {
    return this.articlesService.getAllArticles();
  }

  @Get(':id')
  getArticle(@Param('id') id: ObjectId): Promise<Article> {
    return this.articlesService.getArticle(id);
  }

  @Post()
  createArticle(@Body() articleDto: ArticleDto) {
    return this.articlesService.createArticle(articleDto);
  }

  @Put(':id')
  updateArticle(
    @Param('id') id: ObjectId,
    @Body() articleDto: ArticleDto,
  ): Promise<Article> {
    return this.articlesService.updateArticle(id, articleDto);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: ObjectId): Promise<Article> {
    return this.articlesService.deleteArticle(id);
  }
}
