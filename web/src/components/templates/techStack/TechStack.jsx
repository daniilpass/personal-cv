import React from "react";
import Block from "../../ui/block";
import List from "../../ui/list";
import { routes } from "../../../settings";
import "./TechStack.css";

export function TechStack(props) {
    const { data } = props;

    return (
        <Block id={routes.techStack} title="techstack">
            <List className="techstack__main-skills" items={data.mainSkills} />
            <List className="techstack__other-skills" items={data.otherSkills} />
        </Block>
        
)
}