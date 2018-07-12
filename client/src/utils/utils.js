import axios from "axios";

export default class utils {
  static fetchTodoList() {
    console.log("Fetch Data utils");
    axios
      .get("/service")
      .then(response => {
        // this.setState({ items: response.data });
        const toDoList = JSON.stringify(response.data);
        // console.log("utils Set 2 Fetch Data", response.data);
        return toDoList;
      })
      // .then(data => {
      //   console.log("utils Set 2 Fetch Data 2", data);
      // })
      .catch(function(error) {
        console.log(error);
      });
  }
}
