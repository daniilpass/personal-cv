import React from "react";
import Block from "../../ui/block";
import Card from "../../ui/card";
import VtbLogo from "../../../assets/img/vtb.png";

export function TechStack() {

    return (
        <Block id="tech-stack" title="Tech stack">
            <Card 
                title="Super title"
                subtitle="Subtitle"
                text="text text text"
                img={VtbLogo} />
        </Block>
)
}