import React, { useEffect, useState } from "react";
import AsciiKeyboard from "../../../assets/ascii/keyboard.txt";

import "./Footer.css";

export function Footer(props) {   
    const { glowKeys } = props;

    let htmlText = AsciiKeyboard
                .replaceAll(" ","&nbsp;")
                .replace(/(?:\r\n|\r|\n)/g, '<br />');
    glowKeys.forEach(k => {
        let kUpper = k.toUpperCase()
        htmlText = htmlText.replaceAll(`&nbsp;${kUpper}&nbsp;`, `&nbsp;<b style='color: var(--text-tag)'>${kUpper}</b>&nbsp;`);
    });    
            
    console.log(htmlText);
    return (
        <div className="footer">
            <div className="footer__ascii-keyboard" 
                dangerouslySetInnerHTML={{__html: htmlText}}>
            </div>
        </div>
    )
}