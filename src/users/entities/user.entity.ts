import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Profile } from "../../profiles/entities/profile.entity";

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

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ type: "datetime", nullable: true })
  lastAccess?: Date | null;

  @Column({type: 'datetime', nullable: true})
  updatedatPassword?: Date | null

  @OneToMany(() => Profile, (profiles) => profiles.user)
  profiles!: Profile[];
}
