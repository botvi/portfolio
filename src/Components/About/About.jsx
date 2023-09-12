import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Yovi Ardiansyah</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        Passionate and creative website developer who has proficiency in several
        programming languagesEquipped with various tools & technologies and interested in new things.
        Working from home since last 1 year and delivered 10+ projects till now.
        </p>
        <div className="about__contact center">
          <a
            href="https://www.instagram.com/yoviard_"
            aria-label="instagram"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://github.com/botvi"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:younoob07mei@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+6285156985623"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
         
        </div>

        {/* <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1O7O6dgBNriadNFoYRj8kHr6-dyPyoG4n/view?usp=sharing"
            );
          }}
        >
          Resume
        </button> */}
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
