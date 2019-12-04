import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import NavBar from "./nav/navbar";

export default class Kadence extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}
