import React from "react";
import TextTag from "../texttag";

import "./Block.css";
export function Block(props) {
    const { id, title } = props;

    const navigateToSelf = () => {
        if (!id) {
            return;
        }
        
        window.location.hash = `#`;
        window.location.hash = `#${id}`;
    }

    return (
        <div id={id} className="block">
            <TextTag name={title} tagClassName="block__tag" onClick={navigateToSelf}>
                <div className="block__content">
                    {props.children}
                </div>
            </TextTag>
        </div>
    )
}