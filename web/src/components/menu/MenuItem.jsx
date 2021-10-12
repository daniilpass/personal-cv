import React from "react";

export function MenuItem (props) {
    const {title} = props;

    return (            
            <li className="menu__item">
                <a className="menu__link">
                    &lt;li&gt;
                    <div className="menu__title">{title}</div>
                    &lt;/li&gt;
                </a>
            </li>
    )
}