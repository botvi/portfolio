import React from "react";
import "./Techstacks.css";
import { FaReact,FaPhp, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3,DiLaravel,DiCodeigniter ,DiMysql,DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaPhp />
            <h5>Php</h5>
          </div>

          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
        
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <DiLaravel />
            <h5>Laravel</h5>
          </div>
          <div>
            <DiCodeigniter />
            <h5>Codeigniter</h5>
          </div>
          <div>
            <DiMysql />
            <h5>MySql</h5>
          </div>
        </div>
      </div>
    </>
  );
};
