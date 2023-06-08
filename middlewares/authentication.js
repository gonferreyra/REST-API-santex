import passport from 'passport';

const isAuthenticated = (req, res, next) => {
  passport.authenticate(
    'jwt',
    {
      session: '24hs',
    },
    (err, user, info) => {
      console.log('Validating authentication');

      if (err || !user) {
        const error = new Error('User not authorized');

        return next(error);
      }

      next();
    }
  )(req, res, next);
};

export default isAuthenticated;
