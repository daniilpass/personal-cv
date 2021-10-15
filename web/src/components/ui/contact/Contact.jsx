import React from "react";
import Link from "../link";

import "./Contact.css";
export function Contact(props) {
    const { 
        link, 
        img, 
        title 
    } = props;

    return (<div className="contact">        
        <Link link={link}>
            { img && <img className="contact__image" src={img} /> }
            <div className="contact__title">{title || link}</div>            
        </Link>
    </div>)
}