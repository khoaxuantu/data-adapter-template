import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Animal {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  color: string;
}
