import React from "react";
import { Menu, MenuItem } from "./components/menu";
import Block from "./components/block";

import "./App.css";
import Intro from "./components/intro";

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
                    <div className="content__intro">
                        <Intro />
                    </div>
                    

                    <Block id="projects" title="Projects">
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects
                    </Block>
                    <Block id="tech-stack" title="Tech stack">
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects <br/>
                        Projects
                    </Block>
                </div>
            </div>
                        
            
            
        </div>        
    )
}

export default App;