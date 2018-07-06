import axios from "axios";

class ItemService {
  sendData(data) {
    console.log("data", data);
    axios
      .post("http://localhost:4200/items/add/post", {
        item: data
      })
      .then(function(response) {
        console.log("itemService 1", response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

export default ItemService;
