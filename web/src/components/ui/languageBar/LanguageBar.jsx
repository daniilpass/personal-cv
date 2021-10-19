import React from "react";

import "./LanguageBar.css";

export function LanguageBar(props) {
    const { languages, selectedValue } = props;
    
    const onLaguageChange = (value) => {
        props.onLaguageChange && props.onLaguageChange(value)
    }

    return (
        <div className="language-bar">
            {
                languages.map( (l, idx) => (
                    <React.Fragment key={l.key}>
                        <div 
                            className={`language-bar__item ${selectedValue.key === l.key ? "language-bar__item--active" : ""}`.trim()} 
                            title={l.title}
                            onClick={() => onLaguageChange(l)} 
                            >
                            { l.key.toUpperCase() }                                              
                        </div>
                        { idx != languages.length - 1 
                            ? <div className="language-bar__sep">|</div>
                            : <></> }  
                    </React.Fragment>                                        
                ))
            }
        </div>
    )
}