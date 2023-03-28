const express = require('express');
const todoController = require('./../controllers/todoController');
const authController = require("./../controllers/authController");
const router = express.Router();

router.route('/')
    .post(authController.protect,todoController.addTodo)
    .get(authController.protect,todoController.getAllData)

router.route('/:id')
    .get(authController.protect,todoController.getDataById)
    .patch(authController.protect,todoController.updateDataById)
    .delete(authController.protect,todoController.deleteDataById);

module.exports = router;
