var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Todo = new Schema(
  {
    todo: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "TodoLists"
  }
);

module.exports = mongoose.model("Todo", Todo);
