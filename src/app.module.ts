import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { DealModule } from './deal/deal.module';
import { ChatModule } from './chat/chat.module';
import { CommentModule } from './comment/comment.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL, {
    dbName: 'used_deal',
    }),
    UserModule,
    BoardModule,
    DealModule,
    ChatModule,
    CommentModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
