import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import config from './config/keys';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ArticlesModule, MongooseModule.forRoot(config.MONGODB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
