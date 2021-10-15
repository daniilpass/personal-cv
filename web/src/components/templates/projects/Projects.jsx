import React from "react";
import Block from "../../ui/block";
import Card from "../../ui/card";
import BeatLogo from "../../../assets/img/beat.png";
import KashaLogo from "../../../assets/img/kasha.png";
import { routes } from "../../../settings";

import "./Projects.css";
import { CardLink } from "../../ui/cardLink/CardLink";
export function Projects() {
    return (
        <Block id={routes.projects} title="projects">
            <CardLink 
                cardClassName="project-card"
                title="Beat Notation"
                subtitle="Subtitle"
                text="text text text"
                img={BeatLogo}
                link="https://beatnotation.me/" />

            <CardLink
                cardClassName="project-card"
                title="Ka`Sha Team"
                subtitle="Subtitle"
                text="text text text"
                img={KashaLogo}
                link="https://kasha.team/" />
        </Block>
    )
}