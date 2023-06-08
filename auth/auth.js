import passport from 'passport';
import PasspostStrategy from './passport-config.js';

const initAuth = () => {
  passport.use(PasspostStrategy);
};

export default initAuth;
