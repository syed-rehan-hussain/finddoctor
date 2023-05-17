const weekdayService = require("../services/WeekdayService");
const WeekdayModel = require("../models/Weekday");

exports.getAllWeekdays = async (req, res) => {
  try {
    const weekdays = await weekdayService.getAllWeekdays();
    res.json({ data: weekdays, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createWeekday = async (req, res) => {
  try {
    const weekday = await weekdayService.createWeekday(req.body);
    let week_day = '';
    if(weekday[0]){
      week_day = weekdayService.updateWeekday(weekday[0]['id'], req.body);
    }
    else{
      week_day =  WeekdayModel.create(req.body);
    }
    res.json({ data: week_day, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getWeekdayById = async (req, res) => {
  try {
    const weekday = await weekdayService.getWeekdayById(req.params.id);
    res.json({ data: weekday, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateWeekday = async (req, res) => {
  try {
    const weekday = await weekdayService.updateWeekday(req.params.id, req.body);
    res.json({ data: weekday, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteWeekday = async (req, res) => {
  try {
    const weekday = await weekdayService.deleteWeekday(req.params.id);
    res.json({ data: weekday, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};