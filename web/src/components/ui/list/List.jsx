import React from "react";
import { ListItem } from "./ListItem";

import "./List.css";
export function List(props) {
    const { className, items = [], rowKey, rowValue} = props;

    return (
        <ul className={`list ${className || ''}`.trim()}>
            {
                items.map( (item, index) => <ListItem key={item[rowKey] || index}>{item[rowValue] || item}</ListItem>)
            }
        </ul>
    )
}