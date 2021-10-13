import React from "react";
import { Menu, MenuItem } from "./components/menu";
import Card from "./components/card";

import "./App.css";
import Intro from "./components/intro";

function App() {
    return (
        <div className="app">

            <div className="app__menu-layout">
                <div className="app_menu">
                    <Menu>
                        <MenuItem title="Tech stack" />
                        <MenuItem title="Projects" />
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
                    

                    <Card title="Projects">
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
                    </Card>
                    <Card title="Projects">
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
                    </Card>
                </div>
            </div>
                        
            
            
        </div>        
    )
}

export default App;