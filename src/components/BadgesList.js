import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";

class BadgesListItem extends Component {
  render() {
    return (
      <div className="BadgesListItem">
        <div className="col-2">
          <Gravatar
            className="BadgesListItem__avatar"
            email={this.props.badge.email}
          />
        </div>
        <div className="col-10">
          <div className="font-weight-bold">
            {this.props.badge.firstName + " "}
            {this.props.badge.lastName}
          </div>
          @{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
          <br />
        </div>
      </div>
    );
  }
}

export default class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`badges/${badge.id}/edit`}
                >
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
