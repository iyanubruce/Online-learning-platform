import jwt from "jsonwebtoken";
import appConfig from "../config/env";

export default class JWT {
  private static readPublicKey(): string {
    return appConfig.jwt.secret;
  }

  private static readPrivateKey(): string {
    return appConfig.jwt.secret;
  }

  public static encode(payload: any, expiresIn?: string | number): string {
    const cert = this.readPrivateKey();
    const token = jwt.sign(payload, cert, {
      expiresIn: expiresIn || appConfig.jwt.expiresIn,
    });
    return token;
  }

  public static decode(token: string): jwt.JwtPayload {
    const cert = this.readPublicKey();
    const decoded = jwt.verify(token, cert);
    return decoded as jwt.JwtPayload;
  }
}
