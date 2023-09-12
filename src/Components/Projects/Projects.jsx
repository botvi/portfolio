import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";

import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { DiCss3,DiLaravel,DiCodeigniter ,DiMysql,DiMongodb } from "react-icons/di";
import { BsBootstrap, BsWordpress } from "react-icons/bs";


export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/cQW7ZgV/Screenshot-348.png"
                    alt="Al Qur'an Online"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Al Qur'an Online</h2>
                <p>
                Al Quran online was created using the Laravel framework and external API 
                </p>
                <div>
                  <DiLaravel />
                  <BsBootstrap />
                
                </div>
                <div>
                <div>
                  <a
                    href="https://quran.yoviardiansyah.my.id/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/C5ghLrY/02.png"
                    alt="School Information System"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Car Rental Website</h2>
                <p>
                Build a website to rent cars online                
                </p>
                <div>
                  <DiCodeigniter />
                  <BsBootstrap />
                  <DiMysql />
        
                </div>
                <div>
                <div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
