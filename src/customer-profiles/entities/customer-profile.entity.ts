import { Profile } from "../../profiles/entities/profile.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class CustomerProfile extends Profile {

  @Column()
  deliveryAddress!: string

  getProfileType(): string {
    return 'Customer';
  }
}
