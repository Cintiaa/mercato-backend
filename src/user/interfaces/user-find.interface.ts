export interface IUserFind {
  id: number,
  email: string,
  isActive: boolean,
  lastAccess: Date | null,
  updatedatPassword: Date | null
}