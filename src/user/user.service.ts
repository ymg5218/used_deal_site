import { Injectable } from '@nestjs/common';
import { User, UserSchema } from './schema/user.schema'
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';


@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserSchema>){}

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(_id: string){
        return await this.userModel.find({_id}).exec();
    }
    
    async createUser(user: User): Promise<User>{
        const _user = new this.userModel(user);
        return _user.save();
    }

    async updateUser(_id : string){
        const user = await this.userModel.find({_id});
    }

    async deleteUser(_id: string){
        return await this.userModel.findByIdAndDelete({_id}).exec();
    }
}
