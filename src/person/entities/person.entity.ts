import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firsName!: string;

  @Column()
  lastName!: string;

  @Column()
  gender!: string;

  @Column()
  photo!: string;

  @OneToOne(() => User)
  @JoinColumn()
  user!: User;
}
