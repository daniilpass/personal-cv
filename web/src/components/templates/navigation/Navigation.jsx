import React from "react";
import { Menu, MenuItem } from "../../ui/menu";
import { routes } from "../../../settings";
import { navigationi18n } from "../../../settings";
import "./Navigation.css";

export function Navigation(props) {
    const { lang } = props;
    const nav_i18n = navigationi18n[lang];

    return (
        <div className="app-nav">
            <Menu>
                <MenuItem title={nav_i18n.hello} link={`#${routes.home}`}/>
                <MenuItem title={nav_i18n.projects} link={`#${routes.projects}`}/>
                <MenuItem title={nav_i18n.techstack} link={`#${routes.techStack}`}/>
                <MenuItem title={nav_i18n.experience} link={`#${routes.experience}`}/>
                <MenuItem title={nav_i18n.education} link={`#${routes.education}`}/>
            </Menu>
        </div>
    )
}