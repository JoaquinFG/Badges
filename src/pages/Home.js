import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import astronauts from "../images/astronauts.svg";
import platziConf from "../images/platziconf-logo.svg";

export default class Home extends Component {
  render() {
    console.log("2 y 4. render");
    return (
      <React.Fragment>
        <div className="Home">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={platziConf} alt="platziconf" />
                <h1 className="mt-4">PRINT YOUR BADGES</h1>
                <p>The easiest way to manage your conference</p>
                <Link to="/badges" className="btn btn-primary">
                  Start now
                </Link>
              </div>
              <div className="col-6">
                <img src={astronauts} alt="astronauts" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
