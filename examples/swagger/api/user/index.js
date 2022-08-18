const { Router } = require('express');

const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('./user.controller')

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
