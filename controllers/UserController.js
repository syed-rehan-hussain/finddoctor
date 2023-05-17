const Userservice = require("../services/UserService");
 
exports.getAllUsers = async (req, res) => {
  try {
    const Users = await Userservice.getAllUsers();
    res.json({ data: Users, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createUser = async (req, res) => {
  try {
    const service = await Userservice.createUser(req.body);
    res.json({ data: service, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getUserById = async (req, res) => {
  try {
    const service = await Userservice.getUserById(req.params.id);
    res.json({ data: service, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateUser = async (req, res) => {
  try {
    const service = await Userservice.updateUser(req.params.id, req.body);
    res.json({ data: service, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteUser = async (req, res) => {
  try {
    const service = await Userservice.deleteUser(req.params.id);
    res.json({ data: service, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};