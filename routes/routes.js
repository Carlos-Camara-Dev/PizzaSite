const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const handleLogin = require('../controllers/authController');
const productsController = require('../controllers/productsController.js')

router.post('/auth', handleLogin);

router.get('/products', productsController.getProducts)
router.post('/products', productsController.registerProduct)
router.delete('/products', productsController.deleteProduct)

router.get('/', userController.getUsers);
router.post('/', userController.registerUser);
router.put('/', userController.updateUser);
router.delete('/', userController.deleteUser);
router.get('/:id', userController.getUser);

module.exports=router