import React from "react";
import "./Menu.css";

export function Menu (props) {

    return (
            <ul className="menu">
                <li>&lt;ul&gt;</li>
                {props.children}
                <li>&lt;/ul&gt;</li>
            </ul>
    )
}