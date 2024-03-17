import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Human {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: number;
}
