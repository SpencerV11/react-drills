import React, { Component } from "react";
import Picture from './components/Picture'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Picture pic={"https://images.unsplash.com/photo-1551294444-20efb855d547?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}/>
      </div>
    )
  }
}

export default App;
