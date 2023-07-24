import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentSchema = Comment & Document;

@Schema()
export class Comment {
  @Prop({ required: true, unique: true, autoIncrement: true })
  Comment_id: number;

  @Prop({ required: true })
  writer: number;

  @Prop({ default: Date.now })
  datetime: Date;

  @Prop()
  parent_comment?: number;

  @Prop()
  child_comment?: number;

  @Prop({ required: true })
  content: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);