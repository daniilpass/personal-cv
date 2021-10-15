import React from "react";

export function ListItem(props) {
    return (
        <li className="list__item">
            { props.children }
        </li>
    )
}