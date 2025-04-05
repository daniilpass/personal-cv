import React from "react";
import Card from "../card";
import Link from "../link";

import "./CardLink.css";
export function CardLink(props) {
    const { link, target, title, subtitle, text, img, cardClassName } = props;
    return (
        <Link className="card-link" link={link} target={target}>
            <Card 
                title={title}
                subtitle={subtitle}
                text={text}
                link={link}
                img={img}
                className={cardClassName} />
        </Link>
        
    )
}