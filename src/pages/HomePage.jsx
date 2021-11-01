import React, { Component } from "react";
import NavComponent from "../component/NavComponent";
import SearchComponent from "../component/SearchComponent";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavComponent />
        <SearchComponent />
      </div>
    );
  }
}

export default HomePage;
