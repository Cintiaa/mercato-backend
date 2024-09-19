import { Profile } from "../../profiles/entities/profile.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class SellerProfile extends Profile {
  @Column()
  storeName!: string;

  getProfileType(): string {
    return 'Seller';
  }
}
