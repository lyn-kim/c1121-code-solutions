const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {

  try {
    const accessToken = req.get('X-Access-Token');
    if (accessToken === undefined) {
      res.status(401).json('authentication required');
    }
    req.user = jwt.verify(accessToken, process.env.TOKEN_SECRET);
    next();
  } catch (err) {
    next(err);
  }
}

// TIM'S VERSION
// function authorizationMiddleware(req, res, next) {
//   const accessToken = req.get('X-Access-Token');
//   if (!accessToken) {
//     throw new ClientError(401, 'authentication required');
//   }
//   const payload = jwt.verify(accessToken, process.env.TOKEN_SECRET);
//   req.user = payload;
//   next();
// }

/**
 * Try to get the 'X-Access-Token' from the request headers.
 * If no token is provided,
 *   throw a 401 error with the message 'authentication required'
 * Use jwt.verify() to verify the authenticity of the token and extract its payload
 * Assign the extracted payload to the user property of the req object.
 * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
 */

/**
  * References:
  * https://expressjs.com/en/4x/api.html#req.get
  * https://nodejs.org/api/http.html#http_message_headers
  * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
  */

module.exports = authorizationMiddleware;
