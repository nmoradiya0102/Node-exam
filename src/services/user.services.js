const { Users } = require("../model");

// Create user
const createUser = async (reqBody) => {
  return Users.create(reqBody);
};

// Get user list
const getUserList = async (filter, options) => {
  return Users.find({$or:[{is_active:false}]});
};

// Get user by email
const getUserByEmail = async (email) => {
  return Users.findOne({ email });
};

// Get user details by id
const getUserById = async (user_Id) => {
  return Users.findById(user_Id);
};

// user details update by id
const updateUser = async (user_Id, reqBody) => {
  return Users.findByIdAndUpdate(user_Id, { $set: reqBody });
};

// Delete user
const deleteUser = async (user_Id) => {
  return Users.findByIdAndDelete(user_Id);
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUser,
  getUserByEmail,
  deleteUser,
};