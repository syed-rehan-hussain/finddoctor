const daysoffService = require("../services/DaysoffService");
 
exports.getAllDaysoffs = async (req, res) => {
  try {
    const daysoffs = await daysoffService.getAllDaysoffs();
    res.json({ data: daysoffs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createDaysoff = async (req, res) => {
  try {
    const daysoff = await daysoffService.createDaysoff(req.body);
    res.json({ data: daysoff, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getDaysoffById = async (req, res) => {
  try {
    const daysoff = await daysoffService.getDaysoffById(req.params.id);
    res.json({ data: daysoff, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateDaysoff = async (req, res) => {
  try {
    const daysoff = await daysoffService.updateDaysoff(req.params.id, req.body);
    res.json({ data: daysoff, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteDaysoff = async (req, res) => {
  try {
    const daysoff = await daysoffService.deleteDaysoff(req.params.id);
    res.json({ data: daysoff, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};