// controllers/jobController.js
const Application = require('../models/Application');
const Job = require('../models/Job');

exports.createJob = async (request, h) => {
  try {
    const { title, description,companyId } = request.payload;
    const job = await Job.create({ title, description,companyId });
    return h.response(job).code(201);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.getAllJobs = async (request, h) => {
  try {
    const jobs = await Job.findAll();
    return h.response(jobs).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.getJob = async (request, h) => {
  try {
    const job = await Job.findByPk(request.params.id);
    if (!job) {
      return h.response({ error: 'Job not found' }).code(400);
    }
    return h.response(job).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.updateJob = async (request, h) => {
  try {
    const { id } = request.params;
    const { title, description } = request.payload;
    const job = await Job.findByPk(id);
    if (!job) {
      return h.response({ error: 'Job not found' }).code(400);
    }
    await job.update({ title, description });
    return h.response(job).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.deleteJob = async (request, h) => {
  try {
    const { id } = request.params;
    const job = await Job.findByPk(id);
    if (!job) {
      return h.response({ error: 'Job not found' }).code(404);
    }
    await job.destroy();
    return h.response({ message: 'Job deleted successfully' }).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};


exports.approveJob = async (request, h) => {
  try {
    const { id } = request.params;
    const application = await Application.findByPk(id);
    if (!application) {
      return h.response({ error: 'Job not found' }).code(400);
    }
    await application.update({ status:"Approved"});
    return h.response(application).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};
