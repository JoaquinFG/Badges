import React from "react";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from '../api'

import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    /* const nextForm = this.state.form
    nextForm[e.target.name] = e.target.value; */

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form)
      this.setState({ loading: false});
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'First_name'}
                //"Joaquin"
                lastName={this.state.form.lastName || 'Last_name'}
                //"Ferreira"
                twitter={this.state.form.twitter || 'twitter'}
                //"Joakin_FG"
                jobTitle={this.state.form.jobTitle || 'Job_Title'}
                //"Multiplatform app developer"
                email={this.state.form.email || 'Email'}
                //joaquinferreirag@gmail.com
                //avatarUrl="https://s.gravatar.com/avatar/ab6d453f438e2e4fb6ded179639adc47?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
