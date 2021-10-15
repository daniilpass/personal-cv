import React from "react";
import Block from "../../ui/block";
import { routes } from "../../../settings";
import List from "../../ui/list";

import "./TechStack.css";
export function TechStack() {
    
    const mainSkills = [
        "C#",
        "React",
        "ASP.NET Web API"
    ]

    const otherSkills = [
        ".NET",
        "ASP.NET",
        "Entity Framework",
        "Microsoft SQL Server",
        "Transact-SQL (T-SQL)",
        "Internet Information Services (IIS)",
        "Windows Services",
        "REST APIs",
        "SOAP",
        "Webpack",
        "JavaScript",
        "HTML",
        "CSS",
    ]

    return (
        <Block id={routes.techStack} title="techstack">
            <List className="techstack__main-skills" items={mainSkills} />
            <List className="techstack__other-skills" items={otherSkills} />
        </Block>
        
)
}