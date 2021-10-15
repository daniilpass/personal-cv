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
                subtitle="React"
                text={<>Online drum editor with realtime notation <br/> https://beatnotation.me/</>}
                img={BeatLogo}
                link="https://beatnotation.me/" />

            <CardLink
                cardClassName="project-card"
                title="Ka`Sha Team"
                subtitle="HTML5"
                text={<>Friends squad website <br/> https://kasha.team/</>}
                img={KashaLogo}
                link="https://kasha.team/" />
        </Block>
    )
}