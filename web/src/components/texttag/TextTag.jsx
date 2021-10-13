import React from "react";

export function TextTag(props) {
    const { name, openTagClassName, closeTabClassName, tagStyles } = props;

    return (
        <div className="textTag">
            <div className={openTagClassName} style={tagStyles}>&lt;{name}&gt;</div>
            {props.children}
            <div className={closeTabClassName} style={tagStyles}>&lt;/{name}&gt;</div>
        </div>
    )
}