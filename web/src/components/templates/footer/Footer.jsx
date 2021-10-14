import React, { useEffect, useState } from "react";
import AsciiKeyboard from "../../../assets/ascii/keyboard.txt";

import "./Footer.css";

export function Footer() {   
    const htmlText = AsciiKeyboard
                    .replaceAll(" ","&nbsp;")
                    .replace(/(?:\r\n|\r|\n)/g, '<br />')
                    .replace("B","<b style='color: var(--text-tag)'>B</b>")
                    .replace("Y","<b style='color: var(--text-tag)'>Y</b>")
                    .replace("E","<b style='color: var(--text-tag)'>E</b>"); 
   
    return (
        <div className="footer">
            <div className="footer__ascii-keyboard" 
                dangerouslySetInnerHTML={{__html: htmlText}}>

            </div>
        </div>
    )
}