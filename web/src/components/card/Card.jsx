import React from "react";
import TextTag from "../texttag";

import "./Card.css";
export function Card(props) {
    const { id, title } = props;

    return (
        <div id={id} className="card">
            <TextTag name={title.toLocaleLowerCase()} tagClassName="card__tag">
                <div className="card__content">
                    {props.children}
                </div>
            </TextTag>
        </div>
    )
}