import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';


export type UserSchema = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  ID: string;

  @Prop({ required: true })
  password: string;

  @Prop({ 
    unique: true,
    required: true })
  nickname: string;

  @Prop({ required: true })
  age: number;

  @Prop({ default: 0 })
  recommends: number;
}


export const UserSchema = SchemaFactory.createForClass(User);