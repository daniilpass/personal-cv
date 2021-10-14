import React from "react";

import "./Card.css";

export function Card(props) {
    const { title, subtitle, text, img, className } = props;

    return (
        <div className={`card ${className || ""}`.trim()}>
            <div className="card__image">
                {img && <img src={img} />}
            </div>
            <div className="card__summary">
                <div className="card__title">{title}</div>
                <div className="card__subtitle">{subtitle}</div>
                <div className="card__text">{text}</div>
            </div>            
        </div>
    )
}