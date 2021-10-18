import React from "react";
import Footer from "../../templates/footer";
import Experience from "../../templates/experience";
import Intro from "../../templates/intro";
import Projects from "../../templates/projects";
import TechStack from "../../templates/techStack";
import Education from "../../templates/education";
import { resumei18n } from "../../../settings";
import "./Landing.css";

export function Landing(props) {
    const { lang } = props;
    const resume = resumei18n[lang];

    return (
        <div className="page-landing">
            <div className="page-landing__intro-layout">
                <Intro aboutData={resume.aboutMe} contactsData={resume.contacts}/>
            </div>
            <Projects data={resume.projects} />
            <TechStack data={resume.techstack} />
            <Experience data={resume.experience} />
            <Education data={resume.education}  />
            <Footer glowKeys={resume.footer.glowKeys}/>
        </div>
    )
}