import React from "react";

import "./Card.css";

export function Card(props) {
    const { title, subtitle, text, link, img, className } = props;
   
    return (
        <div className={`card ${className || ""}`.trim()}>
            {img && <div className="card__image">
                <img src={img} />
            </div> }
            <div className="card__summary">
                <div className="card__title">{title}</div>
                <div className="card__subtitle">{subtitle}</div>
                <div className="card__text">{text}<br/>{link}</div>
            </div>       
        </div>
    )
}