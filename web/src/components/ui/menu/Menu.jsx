import React from "react";
import TextTag from "../texttag";
import "./Menu.css";

export function Menu (props) {

    return (
            <ul className="menu">
                <TextTag name="ul" tagClassName="menu__tag">
                    { props.children }
                </TextTag>
            </ul>
    )
}