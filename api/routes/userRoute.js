const { Router } = require('express');
const UserController = require('../controllers/userController');

const router = Router();

router.get('/users', UserController.findAllUsers);
router.get('/users/:id', UserController.findOneUsers);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
