import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

export type BoardSchema = Board & Document;


@Schema()
export class Board extends Document {
  @Prop({ required: true, unique: true, autoIncrement: true })
  @IsNotEmpty()
  Board_id: number;

  @Prop({ required: true })
  @IsNotEmpty()
  comments: number[];

  @Prop({ required: true })
  @IsNotEmpty()
  content: string;

  @Prop({ default: Date.now })
  @IsNotEmpty()
  datetime: Date;

  @Prop({ required: true })
  @IsNotEmpty()
  writer: string;

  @Prop({ default: 0 })
  @IsNotEmpty()
  recommends: number;

  @Prop({ required: true })
  @IsNotEmpty()
  price: number;
}

export const BoardSchema = SchemaFactory.createForClass(Board);