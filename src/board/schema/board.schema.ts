import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongodb';
import { Document, SchemaOptions } from 'mongoose';

export type BoardSchema = Board & Document;


@Schema()
export class Board extends Document {
  @Prop({ required : true })
  title : string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  datetime: Date;

  @Prop({ required: true })
  writer: ObjectId;

  @Prop({ required: true })
  comments: ObjectId[];

  @Prop({ default: 0 })
  recommends: number;

  @Prop({ required: true })
  price: number;
}

export const BoardSchema = SchemaFactory.createForClass(Board);