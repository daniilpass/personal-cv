import React from "react";
import Contact from "../../ui/contact";
import TextTag from "../../ui/texttag";
import TextWithBr from "../../ui/textWithBr";

import "./Intro.css"

export function Intro(props) {
    const { aboutData, contactsData } = props;

    return (
        <div className="intro">            
            <div className="intro__hello">
                {aboutData.greeting} 
                <TextTag name="b" tagClassName="intro__b-tag">
                    <b className="intro__fullName">{aboutData.iam}</b>                       
                </TextTag> 
                {aboutData.position} 
            </div>

            <div className="intro__about">
                {aboutData.about_rows.map( (r, idx) => (<TextWithBr key={idx} text={r} />))}
            </div>

            <div className="intro__contacts">
                {contactsData.map( (c, idx) => (<Contact key={idx} title={c.title} link={c.link} img={c.img} />) )}
            </div>
        </div>
    )
}