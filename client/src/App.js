import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/Home";
import AddItem from "../src/components/AddItem";
import IndexItem from "../src/components/IndexItem";
import Todo from "../src/components/Todo/Todo";
import Layout from "./components/layout/Layout";
import EditItem from "./components/EditItem";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

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
    );
  }
}

export default App;
