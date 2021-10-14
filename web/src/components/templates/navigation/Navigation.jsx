import React from "react";
import { Menu, MenuItem } from "../../ui/menu";

import "./Navigation.css";
export function Navigation(props) {

    return (
        <div className="app_nav">
            <Menu>
                <MenuItem title="Home" link="#"/>
                <MenuItem title="Projects" link="#projects"/>
                <MenuItem title="Tech stack" link="#tech-stack"/>
                <MenuItem title="Experience" />
                <MenuItem title="Education" />
            </Menu>
        </div>
    )
}