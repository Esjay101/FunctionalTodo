const TodoModel = require("../models/todoModel")

module.exports = async (req, res) =>{
    const {text}=req.body
    const{userlink}=req.body
    const todo = new TodoModel({
        text,
        userlink,
        completed: false,
    })
    const newTodo = await todo.save();
    res.json(newTodo);
    console.log(newTodo)
}