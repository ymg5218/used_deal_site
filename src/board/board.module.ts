import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schema/user.schema';
import { UserModule } from 'src/user/user.module';
import { BoardSchema } from './schema/board.schema';
import { BoardDTO } from './dto/board.dto';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name : 'Board', schema : BoardSchema}
    ]),
    UserModule,
  ],
  providers: [BoardService, BoardDTO],
  controllers: [BoardController]
})
export class BoardModule {}
