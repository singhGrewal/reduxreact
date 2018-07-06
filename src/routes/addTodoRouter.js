var express = require("express");
var app = express();
var addTodoRouter = express.Router();
const TodoModel = require("../models/Todo");

addTodoRouter.route("/add/todo").post(function(req, res) {
  console.log("addTodoRouter Step 3 send data to MongoDB", req.body);
  TodoModel.findOne({ todo: req.body.TodoList }).then(item => {
    if (item) {
      // Todo add err function
      errors.todo = "Todo already there";
      console.log("Todo already present");
      return res.status(400).json(errors);
    } else {
      const newTodo = new TodoModel({
        todo: req.body.TodoList
      });
      newTodo
        .save()
        .then(item => {
          res.json("Todo added successfully on MongoDB");
        })
        .catch(err => {
          res.status(400).send("unable to save TODO to MongoDB");
        });
    }
  });
});

// Defined get data(index or listing) route
addTodoRouter.route("/").get(function(req, res) {
  console.log("Set 3 Fetch Data from MongoDb ");
  TodoModel.find(function(err, items) {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
  });

  // TodoModel.findOne({}, {}, { sort: { created_at: -1 } }, function(err, post) {
  //   console.log("post", post);
  // });
});

module.exports = addTodoRouter;
