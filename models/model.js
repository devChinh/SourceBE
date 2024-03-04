const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    taskId: {
        type: Number
    },
    taskName: {
        type: String
    }
})

let Todo = mongoose.model('TodoSchema', TodoSchema)

module.exports = { Todo }