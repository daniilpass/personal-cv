import React from "react";
import TextTag from "../texttag";


import "./Intro.css"

export function Intro(props) {
    return (
        <div className="intro">
            <TextTag name="h1" tagClassName="intro__tag">
                <h1>Hello I'm Daniil, full-stack .NET developer</h1>
            </TextTag>
        </div>
    )
}