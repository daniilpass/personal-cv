import React from "react";
import TextTag from "../texttag";

import "./Block.css";
export function Block(props) {
    const { id, title } = props;

    return (
        <div id={id} className="block">
            <TextTag name={title} tagClassName="block__tag">
                <div className="block__content">
                    {props.children}
                </div>
            </TextTag>
        </div>
    )
}