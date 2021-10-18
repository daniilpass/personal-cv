import React from "react";

import Navigation from "./components/templates/navigation";
import Landing from "./components/pages/Landing";

import "./App.css";
import { languages } from "./settings";

function App() {
    //TODO: create switch
    const lang = languages[1].key;

    return (
        <div className="app">
            <div className="app__nav-layout">
                <Navigation lang={lang} />
            </div>
            <div className="app__content-layout">
                <Landing lang={lang} />
            </div>            
        </div>        
    )
}

export default App;