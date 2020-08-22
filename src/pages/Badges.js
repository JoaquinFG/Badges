import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";

export default class Badges extends Component {
  
  state = {
    data: [],
  }

  render() {
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="confLogo" />
            </div>
          </div>
        </div>
        <div className="Badge__container">
          <div className="Badges__list">
            <div className="Badges__container">
              <div className="Badges__buttons">
                <Link to="/badges/new" className="btn btn-primary">
                  New Badge
                </Link>
              </div>
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
