import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../templates/footer";
import Experience from "../../templates/experience";
import Intro from "../../templates/intro";
import Projects from "../../templates/projects";
import TechStack from "../../templates/techStack";
import Education from "../../templates/education";
import { resume_i18n } from "../../../settings";
import { moment_i18n } from "../../../settings/i18n";
import "./Landing.css";


export function Landing(props) {
    const language = useSelector(state => state.language);
    const resume = resume_i18n[language.key];
    const moment = moment_i18n[language.key];

    return (
        <div className="page-landing">
            <div className="page-landing__intro-layout">
                <Intro aboutData={resume.aboutMe} contactsData={resume.contacts}/>
            </div>
            <Projects data={resume.projects} />
            <TechStack data={resume.techstack} />
            <Experience data={resume.experience} momentLocale={moment} />
            <Education data={resume.education} momentLocale={moment} />
            <Footer glowKeys={resume.footer.glowKeys}/>
        </div>
    )
}