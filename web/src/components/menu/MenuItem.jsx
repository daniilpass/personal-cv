import React from "react";
import TextTag from "../texttag";

export function MenuItem (props) {
    const {title, link} = props;

    return (            
            <li className="menu__item">
                <a className="menu__link" href={link}>
                    <TextTag name="li" tagClassName="menu__tag">
                        <div className="menu__title">{title}</div>
                    </TextTag>
                </a>
            </li>
    )
}