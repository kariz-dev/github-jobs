import React, { Component } from "react";
import ListComponent from "../component/ListComponent";
import NavComponent from "../component/NavComponent";
import SearchComponent from "../component/SearchComponent";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavComponent />
        <SearchComponent />
        <ListComponent />
      </div>
    );
  }
}

export default HomePage;
