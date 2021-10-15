import React from "react";
import Block from "../../ui/block";
import Card from "../../ui/card";
import VtbLogo from "../../../assets/img/vtb.png";
import { routes } from "../../../settings";

export function TechStack() {

    return (
        <Block id={routes.techStack} title="tech stack">
            <Card 
                title="Super title"
                subtitle="Subtitle"
                text="text text text"
                img={VtbLogo} />
        </Block>
)
}