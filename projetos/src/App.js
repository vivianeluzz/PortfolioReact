import React from 'react';
import Header  from './Components/Header/Header';
import Home from './Components/Home/Home';
import { IconContext } from "react-icons"
import Bio from './Components/Bio/Bio';
import Skills from './Components/Skills/Skills';


 
function App() {
  return (
    <div>
      <IconContext.Provider value={{ color: "#4F6B82", size: "32px", height: "32px" }}>
        <Header />
        <Home />
        <Bio />
        <Skills/>
      </IconContext.Provider>
    </div>
  );
}

export default App;
