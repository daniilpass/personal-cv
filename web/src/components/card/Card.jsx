import React from "react";
import TextTag from "../texttag";

import "./Card.css";
export function Card(props) {
    const { title } = props;

    return (
        <div className="card">
            <TextTag name={title.toLocaleLowerCase()} openTagClassName="card__tag" closeTabClassName="card__tag">
                <div className="card__content">
                    {props.children}
                </div>
            </TextTag>
        </div>
    )
}