// controllers/applicationController.js
const Application = require('../models/Application');
const Job = require('../models/Job');
const fs = require('fs')

exports.createApplication = async (request, h) => {
  try {
    const {jobId,coverLetter}=request.payload
    const userId=request.user.id
    
    if(coverLetter){
      const readStream = fs.createReadStream(coverLetter);
      const writeStream = fs.createWriteStream(`./resumes/resume_userId_${userId}.png`);
      readStream.pipe(writeStream);
      readStream.on('error', (err) => {
        console.error('Error reading the file:', err);
    });
    
    writeStream.on('error', (err) => {
        console.error('Error writing the file:', err);
    });
    
    writeStream.on('finish', () => {
        console.log('File copied successfully');
    });
    
    }
    console.log(jobId)
    console.log(userId)
    const application = await Application.create({jobId,userId});
    const job = await Job.findByPk(jobId);
    if (!job) {
      return h.response({ error: 'Job not found' }).code(400);
    } 
    await job.update({ noOfApplications: job.noOfApplications+1 });
    return h.response(application).code(201);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.getAllApplications = async (request, h) => {
  try {
    const applications = await Application.findAll();
    return h.response(applications);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

