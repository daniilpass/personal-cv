import React from "react";
import Experience from "../templates/experience";
import Intro from "../templates/intro";
import Projects from "../templates/projects";
import TechStack from "../templates/techStack";

import "./Landing.css";
export function Landing(props) {
    return (
        <div className="page-landing">
            <div className="page-landing__intro-layout">
                <Intro />
            </div>
            <Projects />
            <TechStack />
            <Experience />
        </div>
    )
}