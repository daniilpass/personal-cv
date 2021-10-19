import React from "react";
import Block from "../../ui/block";
import Card from "../../ui/card";
import DateRange from "../../ui/dateRange";
import { routes } from "../../../settings";
import "./Education.css";

export function Education(props) {
    const { data, momentLocale } = props;

    return (
        <Block id={routes.education} title="education">
            {
                data.map( (e, idx) => (
                    <Card
                        key={idx}
                        className="education-card"
                        title={e.title}
                        subtitle={e.subtitle}
                        text={<><DateRange from={e.dateFrom} to={e.dateTo} locale={momentLocale} showDateDiff={false} /><br/>{e.location}</>}
                        />
                ))
            }
        </Block>
    )
}