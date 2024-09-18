export interface IUserFind {
  id: number,
  name: string,
  surname: string,
  email: string,
  isActive: boolean,
  lastAccess?: Date | null,
  updatedatPassword?: Date | null
}