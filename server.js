// server.js
const Hapi = require('@hapi/hapi');
const sequelize = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationRoutes'); // New route
const companyRoutes = require('./routes/companyRoutes');
require('dotenv').config()

const init = async () => {
  const server = Hapi.server({ port: 4000, host: 'localhost' });

  server.route([...authRoutes, ...userRoutes, ...jobRoutes, ...applicationRoutes, ...companyRoutes]);

  await server.start();
  console.log('Server running on %s', server.info.uri);

  try {
    await sequelize.sync();
    console.log('Database connected and synchronized');
  } catch (err) {
    console.error('Database connection failed:', err);
  }
};

init();
