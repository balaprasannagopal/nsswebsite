import React from "react";
import classes from "./Header.module.css"
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  const videoSource = "../videos/NSSEVENT.mp4";
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }
  return (
    <header id="home">
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#event">
              EVENTS
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#CORETEAM">
              CORE TEAM
            </a>
          </li>
          <li>
          <li>
            <a className="smoothscroll" href="#QR_CODE">
              QR CODE
            </a>
          </li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>{name ? `${name}` : null}</TypeWriter>
          </h1>
          <h3>
            HAPPY EVENTS. 
            <div style={{fontFamily:'Times New Roman'}}>
            <h3> GOPAL  <b style={{color:"yellow"}}>NSS</b> and <b style={{color:"yellow"}}>CEA</b></h3>
            </div>
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
