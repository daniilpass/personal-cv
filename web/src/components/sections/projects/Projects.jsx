import React from "react";
import Block from "../../block";
import Card from "../../card";
import VtbLogo from "../../../assets/img/vtb.png";

export function Projects() {

    return (
        <Block id="projects" title="Projects">
            <Card 
                title="Super title"
                subtitle="Subtitle"
                text="text text text"
                img={VtbLogo} />
        </Block>
    )
}