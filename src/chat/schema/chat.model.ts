import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';

export type ChatSchema = Chat & Document;

@Schema()
export class Chat {
  @Prop({ required: true, unique: true, autoIncrement: true })
  Chat_id: number;

  @Prop({ required: true })
  writer_id: number;

  @Prop({ required: true })
  deal_id: number;

  @Prop({ required: true })
  chat_comment: string;

  @Prop({ default: Date.now })
  datetime: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);