const Company = require('../models/company');

exports.createCompany = async (request, h) => {
  try {
    const { companyname,location, description } = request.payload;
    const userId=request.user.id
    const company = await Company.create({ companyname,location, description,userId });
    return h.response(company).code(201);
  } catch (err) {
    return h.response({ error: err.message }).code(400);
  }
};

exports.getAllCompany = async (request, h) => {
  try {
    const Companys = await Company.findAll();
    return h.response(Companys).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(400);
  }
};

exports.getCompany = async (request, h) => {
  try {
    const company = await Company.findByPk(request.params.id);
    if (!company) {
      return h.response({ error: 'Company not found' }).code(400);
    }
    return h.response(company).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.updateCompany = async (request, h) => {
  try {
    const { id } = request.params;
    const { companyname,location, description,userId } = request.payload;
    const company = await Company.findByPk(id);
    if (!company) {
      return h.response({ error: 'Job not found' }).code(400);
    }
    await company.update({ companyname,location, description,userId });
    return h.response(company).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};

exports.deleteCompany = async (request, h) => {
  try {
    const { id } = request.params;
    const companny = await Company.findByPk(id);
    if (!companny) {
      return h.response({ error: 'Companny not found' }).code(404);
    }
    await companny.destroy();
    return h.response({ message: 'Companny deleted successfully' }).code(200);
  } catch (err) {
    return h.response({ error: err.message }).code(500);
  }
};
