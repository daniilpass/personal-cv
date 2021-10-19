import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, MenuItem } from "../../ui/menu";
import LanguageBar from "../../ui/languageBar";
import { routes } from "../../../settings";
import { navigation_i18n } from "../../../settings";
import { languages } from "../../../settings";
import "./Navigation.css";

export function Navigation(props) {   
    const dispatch = useDispatch();
    const language = useSelector(state => state.language);
    const nav_i18n = navigation_i18n[language.key];

    const handleLanguageChange = (value) => {
        if (value.key !== language.key)
        {
            dispatch.language.setLanguage(value);
        }
    }

    return (
        <div className="app-nav">
            <Menu>
                <MenuItem title={nav_i18n.hello} link={`#${routes.home}`}/>
                <MenuItem title={nav_i18n.projects} link={`#${routes.projects}`}/>
                <MenuItem title={nav_i18n.techstack} link={`#${routes.techStack}`}/>
                <MenuItem title={nav_i18n.experience} link={`#${routes.experience}`}/>
                <MenuItem title={nav_i18n.education} link={`#${routes.education}`}/>
            </Menu>
            
            <LanguageBar languages={languages} selectedValue={language} onLaguageChange={handleLanguageChange} />    
        </div>
    )
}