import { PayloadToken } from "../interfaces/auth.interface";
import { AuthService } from "../services/auth.service";
import {
  ExtractJwt,
  Strategy as JwtStr,
  StrategyOptionsWithSecret,
} from "passport-jwt";
import { PassportUse } from "../utils/passport.use";

export class JwtStrategy extends AuthService {
  constructor() {
    super();
  }

  async validate(payload: PayloadToken, done: any) {
    return done(null, payload);
  }

  get use() {
    const secret = this.getEnvironment("JWT_SECRET");

    if (!secret) {
      throw new Error("JWT_SECRET is not defined");
    }

    return PassportUse<
      JwtStr,
      StrategyOptionsWithSecret,
      (payload: PayloadToken, done: any) => Promise<PayloadToken>
    >(
      "jwt",
      JwtStr,
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret as string | Buffer, // Aseguramos que secret siempre sea string o Buffer
      },
      this.validate
    );
  }
}
