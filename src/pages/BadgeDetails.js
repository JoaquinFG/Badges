import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import conflogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";


export default function BadgeDetails(props) {
    const badge = props.badge;

  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <img src={conflogo} alt="Logo conf" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col-4">
            <h2 className="text-center">Actions</h2>
            <div>
              <Link
                className="btn btn-primary btn-block"
                to={`/badges/${badge.id}/edit`}
              >
                Edit
              </Link>
              <button className="btn btn-danger btn-block">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
