const asyncHandler = require('../utils/asyncHandler');
const UserService = require('../services/user.service');


const createUser = asyncHandler(async (req, res) => {
  const user = await UserService.createUser(req.body);
  res.status(201).json(user);
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await UserService.getUsers();
  res.json(users);
});



const updateUser = asyncHandler(async (req, res) => {
  const user = await UserService.updateUser(req.params.id, req.body);
  res.json(user);
});


const deleteUser = asyncHandler(async (req, res) => {
  const result = await UserService.deleteUser(req.params.id);
  res.json(result);
});

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser
};
