const facebook = {
  clientID: '527587327586892',
  clientSecret: '8b1bcaea0f1c8bc62e83dd5e3975b67f',
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};

const google = {
  clientID: '684311588315-u2jqqrkcltqlbq6m12lp0kdalkah8rgs.apps.googleusercontent.com',
  clientSecret: 'lCU2Z5R5hvb2Ija1ET-1g4pV',
  callbackURL: 'http://localhost:3000/auth/google/callback',
};

module.exports = {
  google,
  facebook
}
