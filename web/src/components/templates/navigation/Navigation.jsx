import React from "react";
import { Menu, MenuItem } from "../../ui/menu";
import { routes } from "../../../settings";

import "./Navigation.css";
export function Navigation(props) {

    return (
        <div className="app-nav">
            <Menu>
                <MenuItem title="Hello" link={`#${routes.home}`}/>
                <MenuItem title="Projects" link={`#${routes.projects}`}/>
                <MenuItem title="Tech stack" link={`#${routes.techStack}`}/>
                <MenuItem title="Experience" link={`#${routes.experience}`}/>
                <MenuItem title="Education" link={`#${routes.education}`}/>
            </Menu>
        </div>
    )
}