import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DealSchema = Deal & Document;

@Schema()
export class Deal {
  @Prop({ required: true, unique: true, autoIncrement: true })
  Deal_id: number;

  @Prop({ required: true })
  board_id: number;

  @Prop({ required: true })
  seller_id: number;

  @Prop({ required: true })
  buyer_id: number;
}

export const DealSchema = SchemaFactory.createForClass(Deal);