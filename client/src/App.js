import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/Home";
import AddItem from "../src/components/AddItem";
import IndexItem from "../src/components/IndexItem";
import Todo from "../src/components/Todo/Todo";
import Layout from "./components/layout/Layout";
import EditItem from "./components/EditItem";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            {/* <Route  path="/" component={Home} /> */}
            <Route path="/add-item" component={AddItem} />
            <Route path="/index" component={IndexItem} />
            <Route path="/todo" component={Todo} />
            <Route path="/edit/:id" component={EditItem} />
            <Route exact path="/" component={Login} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
