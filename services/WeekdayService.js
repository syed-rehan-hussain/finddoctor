const WeekdayModel = require("../models/Weekday");
 
exports.getAllWeekdays = async () => {
  return await WeekdayModel.find();
};
 
exports.createWeekday = async (weekday) => {
  return await WeekdayModel.create(weekday);
};
exports.getWeekdayById = async (id) => {
  return await WeekdayModel.findById(id);
};
 
exports.updateWeekday = async (id, weekday) => {
  return await WeekdayModel.findByIdAndUpdate(id, weekday);
};
 
exports.deleteWeekday = async (id) => {
  return await WeekdayModel.findByIdAndDelete(id);
};