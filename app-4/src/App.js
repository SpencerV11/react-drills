import React, { Component } from "react";
import "./App.css";
import UserPassword from './components/UserPassword'

class App extends Component {
  render() {
    return (
      <div className="App">
          <UserPassword />
      </div>
    );
  }
}

export default App;
