import React from "react";
import Block from "../../ui/block";
import Card from "../../ui/card";
import DateRange from "../../ui/dateRange";
import { routes } from "../../../settings";

import "./Education.css";
export function Education() {
    const rangeTemplate = "#F - #T"

    return (
        <Block id={routes.education} title="education">
            <Card 
                className="education-card"
                title='NUST "MISIS"'
                subtitle="Master's degree, Information Technology"
                text={<><DateRange from="2015-09-01" to="2017-07-01" template={rangeTemplate} /><br/>Moscow, Russia</>}
                />
            <Card 
                className="education-card"
                title='NUST "MISIS"'
                subtitle="Bachelor's degree, Information Technology"
                text={<><DateRange from="2011-09-01" to="2015-07-01" template={rangeTemplate} /><br/>Moscow, Russia</>}
                />
        </Block>
    )
}