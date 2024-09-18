import { IJwtPayload } from "../interfaces/jwt-payload.interface";

export class JwtPayloadDto implements IJwtPayload {
  email!: string;
  sub!: number;
}
