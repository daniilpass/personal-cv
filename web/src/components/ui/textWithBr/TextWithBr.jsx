import React from "react";
import TextTag from "../texttag";
import "./TextWithBr.css";

export function TextWithBr(props) {
    const { text } = props;
    return (
        <div className="text-wb">
            <div className="text-wb__text">{text}</div>
            <TextTag name="br" single className="text-wb__br" tagClassName="text-wb__br-tag"/> 
            <br />
        </div>
    )
}