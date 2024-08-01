// routes/userRoutes.js
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = [
  {
    method: 'GET',
    path: '/user/{id}',
    handler: userController.getUser,
    options: { pre: [authMiddleware.verifyToken] },
  },
  {
    method: 'PUT',
    path: '/user/{id}',
    handler: userController.updateUser,
    options: { pre: [authMiddleware.verifyToken] },
  },
];
