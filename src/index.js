import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Badge from "./components/Badge";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Joaquin"
    lastName="Ferreira"
    avatar="https://s.gravatar.com/avatar/ab6d453f438e2e4fb6ded179639adc47?s=80"
    jobTitle="Multiplatform app developer"
    twitter="Joakin_FG"
  />,
  container
);
