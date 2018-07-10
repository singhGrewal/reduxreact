import axios from "axios";

class ItemService {
  sendData(data) {
    console.log("data", data);
    axios
      .post("/items/add/post", {
        item: data
      })
      .then(function(response) {
        console.log("itemService 1", response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  updateData(data, id) {
    axios
      .post("/items/update/" + id, {
        item: data
      })
      .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
  }

  deleteData(id) {
    axios
      .get("/items/delete/" + id)
      .then(console.log("Deleted").catch(err => console.log(err)));
  }
}

export default ItemService;
