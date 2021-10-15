import React from "react";

export function TextTag(props) {
    const { 
        name, 
        single, 
        style, 
        className, 
        tagClassName, 
        tagStyles,
        onClick 
    } = props;

    let content;

    if (single) {
        content = <div className={tagClassName} style={tagStyles}>&lt;{name}/&gt;</div>;
    } else {
        content = <>
            <div className={tagClassName} style={tagStyles} onClick={onClick}>&lt;{name}&gt;</div>
            {props.children}
            <div className={tagClassName} style={tagStyles} onClick={onClick}>&lt;/{name}&gt;</div>
        </>;
    }

    return (
        <div className={`textTag ${className || ''}`.trim()} style={style}>
            {content}            
        </div>
    )
}