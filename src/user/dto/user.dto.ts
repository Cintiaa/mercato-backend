import { IUser } from "../interfaces/user.interface";

export class UserDto implements IUser {
  id!: number;
  email!: string;
}
