import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactDocument = HydratedDocument<Contact>;

@Schema()
export class Contact {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
