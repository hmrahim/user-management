const User = require("../model/User");

exports.getAllUser = async (req, res) => {
  const data = await User.find();
  res.json(data);
};

exports.getSingleUser = async (req, res) => {
  const { id } = req.params;
  const data = await User.findById(id);
  res.json(data);
};

exports.createUser = async (req, res) => {
  const { name, username, email, phone } = req.body;
  const user = new User({
    name,
    username,
    email,
    phone,
  });

  const result = await user.save();
  res.send(result);
};
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, username, email, phone } = req.body;
  const query = { _id: id };
  const docs = {
    $set: {
      name,
      username,
      email,
      phone,
    },
  };
  const result = await User.findOneAndUpdate(query, docs, { new: true });
  res.json(result);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const result = await User.findOneAndDelete({ _id: id });
  res.json(result);
};
