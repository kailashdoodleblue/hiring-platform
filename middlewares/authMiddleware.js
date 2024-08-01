// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.verifyToken = (request, h) => {
  const token = request.headers.authorization;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    request.user = decoded;
    return h.continue;
  } catch (err) {
    return h.response({ error: 'Unauthorized' }).code(401).takeover();
  }
};
