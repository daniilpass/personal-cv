import React from "react";
import Block from "../../ui/block";
import CardLink from "../../ui/cardLink";
import { routes } from "../../../settings";
import "./Projects.css";

export function Projects(props) {
    const { data } = props;

    return (
        <Block id={routes.projects} title="projects">
            {
                data.map( (p, idx) => (
                    <CardLink 
                        key={idx}
                        cardClassName="project-card"
                        title={p.title}
                        subtitle={p.subtitle}
                        text={p.text}
                        img={p.img}
                        link={p.link} />
                ))
            }
        </Block>
    )
}