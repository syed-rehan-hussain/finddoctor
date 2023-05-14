const DaysoffModel = require("../models/Daysoff");
 
exports.getAllDaysoffs = async () => {
  return await DaysoffModel.find();
};

exports.getAllDaysOffOfDoctor = async (docId) => {
  return await DaysoffModel.find({doctorId: docId});
};
 
exports.createDaysoff = async (daysoff) => {
  return await DaysoffModel.create(daysoff);
};
exports.getDaysoffById = async (id) => {
  return await DaysoffModel.findById(id);
};
 
exports.updateDaysoff = async (id, daysoff) => {
  return await DaysoffModel.findByIdAndUpdate(id, daysoff);
};
 
exports.deleteDaysoff = async (id) => {
  return await DaysoffModel.findByIdAndDelete(id);
};