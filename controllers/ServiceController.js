const Serviceservice = require("../services/ServiceService");
 
exports.getAllServices = async (req, res) => {
  try {
    const Services = await Serviceservice.getAllServices();
    res.json({ data: Services, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createService = async (req, res) => {
  try {
    const service = await Serviceservice.createService(req.body);
    res.json({ data: service, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getServiceById = async (req, res) => {
  try {
    const service = await Serviceservice.getServiceById(req.params.id);
    res.json({ data: service, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateService = async (req, res) => {
  try {
    const service = await Serviceservice.updateService(req.params.id, req.body);
    res.json({ data: service, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteService = async (req, res) => {
  try {
    const service = await Serviceservice.deleteService(req.params.id);
    res.json({ data: service, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};