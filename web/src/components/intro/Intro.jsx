import React from "react";
import TextTag from "../texttag";


import "./Intro.css"

export function Intro(props) {
    const br = <>
            <TextTag name="br" single className="intro__br" tagClassName="intro__br-tag"/> 
            <br />
        </>;
        
    return (
        <div className="intro">            
            <div className="intro__hello">
                Hello 
                <TextTag name="b" tagClassName="intro__b-tag">
                    <b className="intro__fullName">I'm Daniil</b>                       
                </TextTag> 
                full-stack .NET developer
            </div>

            <div className="intro__about">
                I have strong skills in object-oriented programming, knowledge of design patterns and data structures. {br}
                Moreover, I have experience in parallel and asynchronous programming. {br}
                Familiar with the web architecture and development. {br}
            </div>
        </div>
    )
}