// routes/jobRoutes.js
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = [
  {
    method: 'POST',
    path: '/jobs',
    handler: jobController.createJob,
    options: { pre: [authMiddleware.verifyToken] },
  },
  {
    method: 'GET',
    path: '/jobs',
    handler: jobController.getAllJobs,
  },
  {
    method: 'GET',
    path: '/jobs/{id}',
    handler: jobController.getJob,
  },
  {
    method: 'PUT',
    path: '/jobs/{id}',
    handler: jobController.updateJob,
    options: { pre: [authMiddleware.verifyToken] },
  },
  {
    method: 'DELETE',
    path: '/jobs/{id}',
    handler: jobController.deleteJob,
    options: { pre: [authMiddleware.verifyToken] },
  },
  {
    method: 'PUT',
    path: '/approve/{id}',
    handler: jobController.approveJob,
    options: { pre: [authMiddleware.verifyToken] },
  },
];
