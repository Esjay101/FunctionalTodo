const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    text: String,
    userlink: String,
    completed:Boolean,
    
})

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel