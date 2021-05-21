// jwt support ref https://auth0.com/docs/quickstart/backend/nodejs/01-authorization
// https://raw.githubusercontent.com/auth0-blog/auth0-express-js-sample/main/src/authz/check-jwt.js

const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const { domain, audience } = require("../config/env");

//for debugging: is there a auth header?
const logJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log('jwt token:');
        console.log(token);
    } else {
        res.sendStatus(401);
        console.log('No auth!!');
    }
    next()
};

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }),

  audience: audience,
  issuer: `https://${domain}/`,
  algorithms: ["RS256"],
});

module.exports = {
  checkJwt,
  logJWT,
};