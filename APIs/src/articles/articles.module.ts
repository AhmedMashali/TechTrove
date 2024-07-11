import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import ItemSchema from './schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Article', schema: ItemSchema }]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
