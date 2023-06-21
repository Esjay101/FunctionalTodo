const TodoModel = require("../models/todoModel")

module.exports = async (req,res)=>{
    const todos = await TodoModel.find();
    res.json(todos);
}