import React, { Component } from "react";
import logo from "./logo.jpg";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal"
import { Container } from 'reactstrap'

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
            <img src={logo} alt="" />
            <h1>Hello</h1>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
