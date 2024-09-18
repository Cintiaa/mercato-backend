import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column() 
  name!: string;

  @Column()
  surname!: string;
  
  @Column({unique: true})
  email!: string;

  @Column()
  password!: string;

  @Column({ default: true })
  isActive!: boolean;

  @Column({ type: "datetime", nullable: true })
  lastAccess?: Date | null;

  @Column({type: 'datetime', nullable: true})
  updatedatPassword?: Date | null
}
