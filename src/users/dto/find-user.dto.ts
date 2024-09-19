import { IUserFind } from "../interfaces/user-find.interface";

export class FindUserDto implements IUserFind {
  id!: number;
  name!: string;
  surname!: string;
  email!: string;
  isActive!: boolean;
  lastAccess?: Date | null;
  updatedatPassword?: Date | null;
  createdAt!: Date;
  updatedAt!: Date;
}
