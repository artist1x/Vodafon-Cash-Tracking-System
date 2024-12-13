const express = require('express');
const { auth, authorize } = require('../middleware/auth');
const { createUserValidator, updateUserValidator } = require('../validators/user.validator');
const { validateRequest } = require('../utils/validation');
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const router = express.Router();

router.use(auth);
router.use(authorize('Admin'));

router.post('/', createUserValidator, validateRequest, createUser);
router.get('/', getUsers);
router.put('/:id', updateUserValidator, validateRequest, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;