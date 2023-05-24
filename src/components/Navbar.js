import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav>
          <img src="./logo.svg" alt="" />

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li className="active">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            />
          </div>

          <button className="navReq">Request Invite</button>
        </nav>
      </>
    );
  }
}

export default Navbar;
