// routes/applicationRoutes.js
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = [
  {
    method: 'POST',
    path: '/applications',
    handler: applicationController.createApplication,
    options: { pre: [authMiddleware.verifyToken] },
  },
  {
    method: 'GET',
    path: '/applications',
    handler: applicationController.getAllApplications,
    options: { pre: [authMiddleware.verifyToken] },
  }
];
