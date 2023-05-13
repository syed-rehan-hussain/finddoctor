const WeekdayModel = require("../models/Weekday");
 
exports.getAllWeekdays = async () => {
  return await WeekdayModel.find();
};
 
exports.createWeekday = async (weekday) => {
  return await WeekdayModel.create(weekday);
};
exports.getWeekdayById = async (id) => {
  const query = { "doctorId" : id };
  // const cursor = WeekdayModel.find(query);
  
  // // console.dir(cursor);
  // for await (const doc of cursor) {
  //   console.dir(doc);
  // }
  return await WeekdayModel.find(query);
  // const id = parseInt(id)
  // pool.query('SELECT * FROM weekday WHERE doctorId = $1', [id], (error, results) => {
  //   if (error) {
  //     throw error
  //   }
  //   return response.status(200).json(results.rows)
  // })
};
 
exports.updateWeekday = async (id, weekday) => {
  return await WeekdayModel.findByIdAndUpdate(id, weekday);
};
 
exports.deleteWeekday = async (id) => {
  return await WeekdayModel.findByIdAndDelete(id);
};