const asyncHandler = require('../utils/asyncHandler');
const AuthService = require('../services/auth.service');

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const result = await AuthService.login(username, password);
  console.log(result)
  res.json(result);
});

module.exports = { login };