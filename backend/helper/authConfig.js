module.exports = {
    secret: process.env.SECRET_KEY,
    jwtExpiration: 900,           // 1 hour
};

//  Create the token for the user at the login/signup
//  The token is valid for 1 Hour
//  The token is created with the user id and the secret key
