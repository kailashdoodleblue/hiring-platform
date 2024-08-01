// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
// const config = require('../config/config');

exports.register = async (request, h) => {
  try {
    const { username, email, password, role } = request.payload;
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({ username, email, password: hashedPassword, role });
    return h.response(user).code(201);
  }
  catch(err)
  {
    return h.response(err.message).code(500);
  }
};

exports.login = async (request, h) => {
  const { email, password } = request.payload;
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return h.response({ error: 'Invalid credentials' }).code(401);
  }
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
  return h.response({ token });
};
