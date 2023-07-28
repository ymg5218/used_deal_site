import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserSchema } from './schema/user.schema'
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { UserDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserSchema>){}

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(_id: string){
        return await this.userModel.findOne({_id});
    }
    
    async createUser(user: UserDTO): Promise<User>{
        //const _user = new this.userModel(user);
        const { ID, password, nickname, age, recommends } = user;
        const isUserExist = await this.userModel.exists({ID}); // 이미 존재하는 유저 정보인지 확인
        const isNicknameExist = await this.userModel.exists({nickname});
        if (isUserExist) {
            throw new UnauthorizedException('이미 존재하는 게정입니다.');
        }

        if (isNicknameExist) {
            throw new UnauthorizedException('이미 존재하는 닉네임 입니다.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const _user = await this.userModel.create({
            ID,
            password : hashedPassword,
            nickname,
            age,
            recommends
        });
        return _user.save();
    }

    async updateUser(user : any){
        const { _id, nickname }  = user;
        const isNicknameExist = await this.userModel.exists({nickname});
        
        if(isNicknameExist) {
            throw new UnauthorizedException("이미 존재하는 닉네임입니다.");
        }

        const _user = await this.userModel.findOne({_id});
        
        _user.nickname = nickname;
        _user.save();
        return nickname + "으로 닉네임 변경";
    }

    async deleteUser(_id: string){
        return await this.userModel.findByIdAndDelete({_id}).exec();
    }
}
