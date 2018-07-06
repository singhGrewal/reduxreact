// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import App from "./App";
// import AddItem from "./components/AddItem";
// import IndexItem from "./components/IndexItem";

// ReactDOM.render(
//   <Router>
//     <div>
//       <Route exact path="/" component={App} />
//       <Route path="/add-item" component={AddItem} />
//       <Route path="/index" component={IndexItem} />
//     </div>
//   </Router>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducer/index";

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("store : ", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
