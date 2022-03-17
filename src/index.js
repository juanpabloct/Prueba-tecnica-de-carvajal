const express = require("express");
const app = express();
const port = 9000;
const morgan = require("morgan");

const taskRoutes = require("./routes/task.routes.js");
app.use(express.json());

app.use(morgan("dev"));
//Routes
app.use(taskRoutes);

//Arranque
app.listen(port);
console.log(`The server is in port ${port}`);
