import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/Home";
import AddItem from "../src/components/AddItem";
import IndexItem from "../src/components/IndexItem";
import Todo from "../src/components/Todo/Todo";
import Layout from "./components/layout/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add-item" component={AddItem} />
            <Route path="/index" component={IndexItem} />
            <Route path="/todo" component={Todo} />
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;
