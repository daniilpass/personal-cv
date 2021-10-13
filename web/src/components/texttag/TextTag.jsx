import React from "react";

export function TextTag(props) {
    const { name, tagClassName, tagStyles } = props;

    return (
        <div className="textTag">
            <div className={tagClassName} style={tagStyles}>&lt;{name}&gt;</div>
            {props.children}
            <div className={tagClassName} style={tagStyles}>&lt;/{name}&gt;</div>
        </div>
    )
}