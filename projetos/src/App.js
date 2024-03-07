import React from 'react';
import Header  from './Components/Header/Header';
import Home from './Components/Home/Home';
import { IconContext } from "react-icons"
import Bio from './Components/Bio/Bio';
import Skills from './Components/Skills/Skills';
import Experiences from './Components/Experiences/Experiences';

function App() {
  return (
    <div>
      <IconContext.Provider value={{ color: "#4F6B82", size: "32px", height: "32px" }}>
        <Header />
        <Home />
        <Bio />
        <Experiences />
        <Skills/>
      </IconContext.Provider>
    </div>
  );
}

// const fontConfig = {
//   default: {
//     regular: {
//       fontFamily: "sans-serif", "P22 Mackinac Pro";
   
//     }
//   }
// }

export default App;
