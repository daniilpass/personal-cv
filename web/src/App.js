import React from "react";
import { Menu, MenuItem } from "./components/menu";
import Intro from "./components/sections/intro";

import "./App.css";
import Projects from "./components/sections/projects";
import TechStack from "./components/sections/techStack";
function App() {
    return (
        <div className="app">
            <div className="app__menu-layout">
                <div className="app_menu">
                    <Menu>
                        <MenuItem title="Home" link="#"/>
                        <MenuItem title="Projects" link="#projects"/>
                        <MenuItem title="Tech stack" link="#tech-stack"/>
                        <MenuItem title="Experience" />
                        <MenuItem title="Education" />
                    </Menu>
                </div>
            </div>
            <div className="app__content-layout">
                <div className="app_content">
                    <div className="content__intro-layout">
                        <Intro />
                    </div>
                    <Projects />
                    <TechStack />
                </div>
            </div>            
        </div>        
    )
}

export default App;