import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./action/authAction";

import { Provider } from "react-redux";
import store from "./store";
// import Home from "../src/components/Home";
// import AddItem from "../src/components/AddItem";
// import IndexItem from "../src/components/IndexItem";
// import Todo from "../src/components/Todo/Todo";
// import Layout from "./components/layout/Layout";
// import EditItem from "./components/EditItem";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      // <Router>
      //   <Layout>
      //     <Switch>
      //       {/* <Route  path="/" component={Home} /> */}
      //       <Route path="/add-item" component={AddItem} />
      //       <Route path="/index" component={IndexItem} />
      //       <Route path="/todo" component={Todo} />
      //       <Route path="/edit/:id" component={EditItem} />
      //       <Route exact path="/" component={Login} />
      //     </Switch>
      //   </Layout>
      // </Router>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
