// controllers/userController.js
const User = require('../models/user');

exports.getUser = async (request, h) => {
  try {
    const user = await User.findByPk(request.params.id);
    if (!user) {
      return h.response({ error: 'User not found' }).code(404);
    }
    return h.response(user).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.updateUser = async (request, h) => {
  try {
    const { id } = request.params;
    const { username, email } = request.payload;
    const user = await User.findByPk(id);
    if (!user) {
      return h.response({ error: 'User not found' }).code(404);
    }
    await user.update({ username, email });
    return h.response(user).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

