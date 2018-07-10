var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
const path = require("path");
var app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Required application specific custom router module
const itemRouter = require("./src/routes/itemRouter");
const addTodoRouter = require("./src/routes/addTodoRouter");
const auth = require("./src/routes/auth");

app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use Routes
app.use("/items", itemRouter);
app.use("/service", addTodoRouter);
app.use("/api", auth);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Start the server
const port = process.env.PORT || 4200;
app.listen(port, () => console.log(`Server running on port ${port}`));
