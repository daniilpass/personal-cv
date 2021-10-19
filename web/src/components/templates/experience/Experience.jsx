import React from "react";
import Block from "../../ui/block";
import Card from "../../ui/card";
import DateRange from "../../ui/dateRange";
import { routes } from "../../../settings";
import "./Experience.css";

export function Experience(props) {
    const { data, momentLocale } = props;

    return (
        <Block id={routes.experience} title="experience">
            {
                data.map( (e, idx) => (
                    <Card
                        key={idx}
                        className="experience-card"
                        title={e.title}
                        subtitle={e.subtitle}
                        text={<><DateRange from={e.dateFrom} to={e.dateTo} locale={momentLocale} /><br/>{e.location}</>}
                        img={e.img} />
                ))
            }
        </Block>
    )
}