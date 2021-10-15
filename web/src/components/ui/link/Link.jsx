import React from "react";

export function Link(props) {
    const {         
        className,
        link, 
        target = "_blank",
    } = props;

    return (
        <a className={className} href={link} target={target}>
            {props.children}
        </a>
    )
}