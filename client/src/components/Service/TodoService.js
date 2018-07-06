import axios from "axios";

class TodoService {
  sendData(data) {
    console.log("Step 2 send data", data);
    axios
      .post("http://localhost:4200/service/add/todo", {
        TodoList: data
      })
      .then(function(response) {
        console.log("Todo Service 4", response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

export default TodoService;
