import React, { Component } from "react";
import { Link } from 'react-router-dom';
import conflogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";
import PageLoading from "../components/PageLoading";
import PageError from "./../components/PageError";
import Badge from '../components/Badge'
import api from "../api";

export default class BadgeDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
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
                  {this.state.data.firstName} {this.state.data.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Badge
                firstName={this.state.data.firstName}
                lastName={this.state.data.lastName}
                email={this.state.data.email}
                twitter={this.state.data.twitter}
                jobTitle={this.state.data.jobTitle}
              />
            </div>
            <div className="col-4">
              <h2 className="text-center">Actions</h2>
              <div>
                <Link
                  className="btn btn-primary btn-block"
                  to={`/badges/${this.state.data.id}/edit`}
                >
                  Edit
                </Link>
                <button className="btn btn-danger btn-block">
                    Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
