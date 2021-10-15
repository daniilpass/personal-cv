import React from "react";
import Contact from "../../ui/contact";
import TextTag from "../../ui/texttag";

import BitbucketLogo from "../../../assets/img/bitbucket.png"
import TelegramLogo from "../../../assets/img/telegram.png"
import LinkedinLogo from "../../../assets/img/linkedin.png"

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

            <div className="intro__contacts">
                <Contact title="Bitbucket" link="https://bitbucket.org/daniilpass" img={BitbucketLogo} />
                <Contact title="Telegram" link="https://t.me/daniilpass" img={TelegramLogo} />
                <Contact title="LinkedIn" link="https://linkedin.com/in/daniilpass" img={LinkedinLogo} />
            </div>
        </div>
    )
}