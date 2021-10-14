import React from "react";

import Navigation from "./components/templates/navigation";
import Landing from "./components/pages/Landing";

import "./App.css";

function App() {
    return (
        <div className="app">
            <div className="app__nav-layout">
                <Navigation />
            </div>
            <div className="app__content-layout">
                <Landing />
            </div>            
        </div>        
    )
}

export default App;