import jwt, { SignOptions } from "jsonwebtoken";
import { StringValue } from "ms";
import appConfig from "../config/env";

export default class JWT {
  private static readPublicKey(): string {
    return appConfig.jwt.secret;
  }

  private static readPrivateKey(): string {
    return appConfig.jwt.secret;
  }

  public static encode(payload: any, expiresIn?: number | StringValue): string {
    const cert = this.readPrivateKey();
    const options: SignOptions = {
      expiresIn: expiresIn || (appConfig.jwt.expiresIn as StringValue),
    };
    const token = jwt.sign(payload, cert, options);
    return token;
  }

  public static decode(token: string): jwt.JwtPayload {
    const cert = this.readPublicKey();
    const decoded = jwt.verify(token, cert);
    return decoded as jwt.JwtPayload;
  }
}
