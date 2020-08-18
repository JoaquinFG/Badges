import React from 'react'
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    render(){
        return (
          <div>
            <Navbar />
            <div className="BadgeNew__hero">
              <img className="img-fluid" src={header} alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <Badge
                    firstName="Joaquin"
                    lastName="Ferreira"
                    twitter="Joakin_FG"
                    jobTitle="Multiplatform app developer"
                    avatar="https://s.gravatar.com/avatar/ab6d453f438e2e4fb6ded179639adc47?s=80"
                  />
                </div>
                <div className="col-6">
                  <BadgeForm/>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default BadgeNew;