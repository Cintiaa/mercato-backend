import { IJwtPayload } from "../interfaces/jwt-payload.interface";

export class JwtPayloadDto implements IJwtPayload {
  sub!: number;
  email!: string;
}
