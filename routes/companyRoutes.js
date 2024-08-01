// routes/jobRoutes.js
const compannyController = require('../controllers/companyConstroller');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = [
  {
    method: 'POST',
    path: '/company',
    handler: compannyController.createCompany,
    options: { pre: [authMiddleware.verifyToken] },
  },
  {
    method: 'GET',
    path: '/company',
    handler: compannyController.getAllCompany,
  },
  {
    method: 'GET',
    path: '/company/{id}',
    handler: compannyController.getCompany,
  },
  {
    method: 'PUT',
    path: '/company/{id}',
    handler: compannyController.updateCompany,
    options: { pre: [authMiddleware.verifyToken] },
  },
  {
    method: 'DELETE',
    path: '/company/{id}',
    handler: compannyController.deleteCompany,
    options: { pre: [authMiddleware.verifyToken] },
  },
];
