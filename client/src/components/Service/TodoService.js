import axios from "axios";
import utils from "../../utils";
import { connect } from "react-redux";

class TodoService {
  sendData(data) {
    console.log("Step 2 send data", data);
    axios
      .post("http://localhost:4200/service/add/todo", {
        TodoList: data
      })
      .then(function(response) {
        console.log("Todo Service 4", response.statusText);
        // if (response.statusText === "OK") {
        //   console.log("got back", utils.fetchTodoList());
        //   utils.fetchTodoList().then(abc => {
        //     console.log("got back abc", abc);
        //   });
        // }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  deleteData(data) {
    console.log("Delete send to server data", data);
    axios
      .post("http://localhost:4200/service/delete/todo", {
        id: data
      })
      .then(function(response) {
        console.log("Delete response back 4", response);
        // utils.fetchTodoList();

        // if (response != undefined) {
        //   console.log("Not unde");

        // }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  editData(data) {
    console.log("Edit send to server data", data);
    // axios
    //   .post("http://localhost:4200/service/delete/todo", {
    //     id: data
    //   })
    //   .then(function(response) {
    //     console.log("Delete response back 4", response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }
}

export default TodoService;
