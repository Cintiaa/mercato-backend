import { IUserFind } from "../interfaces/user-find.interface";

export class FindUserDto implements IUserFind {
  id!: number;
  email!: string;
  isActive!: boolean;
  lastAccess!: Date | null;
  updatedatPassword!: Date | null;
}
