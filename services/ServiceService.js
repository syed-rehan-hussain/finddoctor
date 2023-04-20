const ServiceModel = require("../models/Service");
 
exports.getAllServices = async () => {
  return await ServiceModel.find();
};
 
exports.createService = async (Service) => {
  return await ServiceModel.create(Service);
};
exports.getServiceById = async (id) => {
  return await ServiceModel.findById(id);
};
 
exports.updateService = async (id, Service) => {
  return await ServiceModel.findByIdAndUpdate(id, Service);
};
 
exports.deleteService = async (id) => {
  return await ServiceModel.findByIdAndDelete(id);
};