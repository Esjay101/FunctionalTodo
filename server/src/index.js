const express = require("express");
const dotenv = require("dotenv")
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router")
const mongoose = require("mongoose");
dotenv.config();
const app = express();

app.use(express.json())
app.use(morgan("tiny"));
app.use(cors());
app.use(router);
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("starting on port 8000")
})
app.listen(8000);