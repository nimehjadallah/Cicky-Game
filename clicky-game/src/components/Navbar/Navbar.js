//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-default navbar-fixed-top justify-content-end">
              <h5>Test Your Memory | Score: {this.props.score} </h5>
      </nav>
    );
  }
}

export default Navbar;