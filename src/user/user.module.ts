import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema'
import { AuthModule } from 'src/auth/auth.module';
import { UserLoginDTO } from './dto/user.logindto';
import { UserDTO } from './dto/user.dto';

@Module({
  imports : [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema}
    ]),
    forwardRef(() => AuthModule),
  ],
  providers: [UserService,UserDTO, UserLoginDTO],
  controllers: [UserController],
  exports: [UserService,UserDTO,UserLoginDTO]
})
export class UserModule {}
