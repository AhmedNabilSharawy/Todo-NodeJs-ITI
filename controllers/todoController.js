const Todo = require('./../models/todoModel')

exports.addTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create(req.body);
        console.log(req.body);
        res.status(200).json({
            status: "Success",
            data: newTodo
        })
    } catch (err) {
        res.status(500).json({
            status: "Error",
            message: err.message
        })
    }
}

exports.getAllData = async (req, res) => {
    try {
        const allData = await Todo.find()
        res.status(200).json({
            status: "Success",
            data: {
                allData
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "Error",
            message: err.message
        })
    }
}

exports.getDataById = async (req, res) => {
    try {
        // const Data = await Todo.findById(req.params.id); //works on _id not id
        const Data = await Todo.find({id:req.params.id}); //works on id not _id
        res.status(200).json({
            status: "Success",
            data: {
                Data
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "Error",
            message: err.message
        })
    }
}

exports.updateDataById = async (req, res) => {
    try {
        const todoData = await Todo.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Data updated successfully",
            data: todoData
        })
    } catch (err) {
        res.status(500).json({
            status: "Error",
            message: err.message
        })
    }
}
exports.deleteDataById = async (req, res) => {
    try {
        const data = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "Success",
            message: "Data deleted successfully"
        })
    } catch (err) {
        res.status(500).json({
            status: "Error",
            message: err.message
        })
    }
}