import React, { Component } from "react";
import Picture from './components/Picture'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Picture pic={"https://news.nationalgeographic.com/content/dam/news/2016/09/08/humpback-whales/01humpbackwhales.ngsversion.1473420603711.adapt.1900.1.jpg"}/>
      </div>
    )
  }
}

export default App;
