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

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://yeommingyu0106:aowlrrkawk99@cluster0.tmqnpye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    dbName: 'used_deal'
    }),
    UserModule,
    BoardModule,
    DealModule,
    ChatModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    mongoose.set('debug',true)
  }
}
