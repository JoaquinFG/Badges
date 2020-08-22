import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./styles/BadgesList.css";

export default class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0){
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <div className="BadgesListItem">
                  <div className="col-2">
                    <img
                      className="BadgesListItem__avatar"
                      src={badge.avatarUrl}
                      alt="Avatar"
                    />
                  </div>
                  <div className="col-10">
                    <div className="font-weight-bold">
                      {badge.firstName + " "}
                      {badge.lastName}
                    </div>
                    @{badge.twitter}
                    <br />
                    {badge.jobTitle}
                    <br />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
