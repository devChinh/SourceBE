const { Todo } = require('../models/model')

const todoController = {
    // [GET] ALL TODO
    getData: async (req, res) => {
        try {
            const getData = await Todo.find();
            res.status(200).json(getData)
        } catch (error) {
            console.log('============= error', error)
            res.status(500).json(error)
        }
    },

    // [GET] A TODO 
    getTodo: async (req, res) => {
        try {
            const todo = await Todo.findById(req.params.id)
            res.status(200).json(todo)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // [POST] ADD TODO 
    addTodo: async (req, res) => {
        try {
            const newTodo = new Todo(req.body)
            const saveTodo = await newTodo.save()
            res.status(200).json(saveTodo)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // [PUT] UPDATE TODO 
    updateTodo: async (req, res) => {

        try {
            Todo.findById(req.body.task._id, (err, foundTask) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Lỗi server' });
                }

                if (!foundTask) {
                    return res.status(404).json({ error: 'Không tìm thấy task' });
                }

                // Cập nhật các trường của task dựa trên dữ liệu được gửi từ client
                foundTask.taskName = req.body.text;

                // Lưu task đã cập nhật vào cơ sở dữ liệu
                foundTask.save((err, updatedTask) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ error: 'Lỗi server' });
                    }

                    // Trả về task đã cập nhật
                    res.json(updatedTask);
                });
            });
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //[DELETE] DELETE TODO
    deleteTodo: async (req, res) => {
        try {
            Todo.findOneAndDelete({ taskId: req.params.id }, (err, deletedDocument) => {
                if (err) {
                    console.error(err);
                } else {
                    return res.status(404).json(deletedDocument);
                }
            });
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = todoController