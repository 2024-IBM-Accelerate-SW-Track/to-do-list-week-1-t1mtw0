import React, { Component } from "react";
import "./About.css";
import pp from "../assets/pp.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={pp}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Timothy Tso</div>
              <div className="brief_description">
                I'm a Computer Science student at USC. I'm interested in CS, EE,
                Physics, and Math. I play video games, read, and explore a bunch
                of different fields.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
