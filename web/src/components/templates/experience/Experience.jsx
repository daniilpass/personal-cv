import React from "react";
import Block from "../../ui/block";
import Card from "../../ui/card";
import DateRange from "../../ui/dateRange";
import VtbLogo from "../../../assets/img/vtb.png";
import GpbLogo from "../../../assets/img/gpb.png";
import { routes } from "../../../settings";

import "./Experience.css";
export function Experience() {
    const rangeTemplate = "#F - #T, #Y yrs #M mos"

    return (
        <Block id={routes.experience} title="experience">
            <Card 
                className="experience-card"
                title="Senior Software Engineer"
                subtitle="Gazprombank"
                text={<><DateRange from="2019-05-01" template={rangeTemplate} /><br/>Moscow, Russia</>}
                img={GpbLogo} />
            <Card 
                className="experience-card"
                title="Lead Specialist / Developer"
                subtitle="VTB Bank"
                text={<><DateRange from="2015-10-01" to="2019-05-01" template={rangeTemplate}/><br/>Moscow, Russia</>}
                img={VtbLogo} />
        </Block>
    )
}