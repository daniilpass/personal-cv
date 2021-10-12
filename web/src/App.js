import React from "react";
import { Menu, MenuItem } from "./components/menu";
import Card from "./components/card";

import "./App.css";

function App() {
    return (
        <div className="app">
            <Menu>
                <MenuItem title = "About" />
                <MenuItem title = "Tech stack" />
                <MenuItem title = "Projects" />
                <MenuItem title = "Experience" />
                <MenuItem title = "Education" />
            </Menu>

            <Card title="About">
                About About About About
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
    )
}

export default App;