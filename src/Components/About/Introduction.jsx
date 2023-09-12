import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/1.jpg";
import {
  SiCss,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiJavascript
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Yovi Ardiansyah </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Pangean, Kuantan Singingi, Pekanbaru (Indonesia)
                </span>
                
                . Then I followed the website development tutorial from{" "}
                <span className="different">Youtube</span> and several well-known websites.
              </h4>
              <h4>The first thing I learned :</h4>
              <h4 className="different">
                <span className="icons">
                  <SiHtml5 />
                </span>
                HTML{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <DiCss3 />
                </span>
                CSS{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <SiJavascript />
                </span>
                JAVASCRIPT{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                etc.{" "}
              </h4>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
