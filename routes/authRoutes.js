// routes/authRoutes.js
const authController = require('../controllers/authcontroller');

module.exports = [
    {
        method: 'POST',
        path: '/register',
        handler: authController.register
    },
    {
        method: 'POST',
        path: '/login',
        handler: authController.login
    },
];
