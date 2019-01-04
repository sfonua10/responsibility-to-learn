import React, { Component } from "react";
import Blog from "./components/blog";
import Desire from "./components/desire";
import Invitation from "./components/hisInvitation";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Blog />
        <Desire />
        <Invitation />
      </main>
    );
  }
}

export default App;
