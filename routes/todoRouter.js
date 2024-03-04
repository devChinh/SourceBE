const express = require('express');
const router = express.Router()

const todoController = require('../controllers/todoController')

// GET ALL TODO
router.get('/' , todoController.getData)

// GET A TODO
router.get('/:id' , todoController.getTodo)

// Add A TODO
router.post('/' , todoController.addTodo)

router.post('/:id' , todoController.postTodo)

// update a TODO
router.put('/:id' , todoController.updateTodo)

// delete a TODO
router.delete('/:id' , todoController.deleteTodo)

module.exports = router