import React from "react";

import "./Card.css";
export function Card(props) {
    const { title } = props;

    return (
        <div className="card">
            <div className="card__tag">&lt;{title.toLocaleLowerCase()}&gt;</div>
            <div className="card__content">
                {props.children}
            </div>
            <div className="card__tag">&lt;/{title.toLocaleLowerCase()}&gt;</div>
        </div>
    )
}