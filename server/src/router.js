const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn")
const router= express.Router();


//routes for CRUD endpoints that are used by the router below 
const readTodosRoute = require("./routes/readTodosRoute")
const createTodosRoute = require("./routes/createTodosRoute")
const updateTodoRoute = require("./routes/updateTodosRoute")
const deleteTodoRoute = require("./routes/deleteTodosRoute")


router.post("/login", require("./routes/loginRoute"));

router.get("/todos", isLoggedIn, readTodosRoute);
router.post("/todos", isLoggedIn, createTodosRoute);
router.put("/todos/:id", isLoggedIn, updateTodoRoute);
router.delete("/todos/:id", isLoggedIn, deleteTodoRoute)


module.exports = router
