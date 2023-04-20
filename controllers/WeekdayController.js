const weekdayService = require("../services/WeekdayService");
 
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
    res.json({ data: weekday, status: "success" });
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