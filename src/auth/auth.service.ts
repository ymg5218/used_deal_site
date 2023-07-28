import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { UserLoginDTO } from 'src/user/dto/user.logindto';
import { User, UserSchema } from 'src/user/schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        @InjectModel(User.name) private userModel: Model<UserSchema>
        ){}
    
    async jwtLogin(data: UserLoginDTO) {
        const { ID, password } = data;
        const _user = await this.userModel.findOne({ID});
        if (!_user) {
            throw new UnauthorizedException('존재하지 않는 아이디입니다.');
        }
        const isPasswordValidated: boolean = await bcrypt.compare(
            password,
            _user.password,
        );
        if (!isPasswordValidated) {
            throw new UnauthorizedException("비밀번호가 일치하지 않습니다.");
        }
        const payload = { sub : ID };
        return {
            token : this.jwtService.sign(payload),
        };
    }
}
