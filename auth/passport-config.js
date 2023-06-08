import passportJwt from 'passport-jwt';
import User from '../models/User.js';

const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const PasspostStrategy = new StrategyJwt(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_PASSWORD,
  },
  async (jwtPayload, next) => {
    const user = await User.findByPk(jwtPayload.id);

    if (user) {
      next(false, user, null);
    } else {
      next(true, null, null);
    }
  }
);

export default PasspostStrategy;
