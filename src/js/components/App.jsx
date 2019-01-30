import React from "react";


import Hero from './Hero.jsx';
import Services from "./services.jsx";
import Team from "./Team.jsx";
import Gallery from "./Gallery.jsx";
import Aboutus from './Aboutus.jsx';
import Footer from './Footer.jsx';


class App extends React.Component {
  render() {
    return (
      <div>
        <Hero/>
        <Services />
        <Gallery/>
        <Team/>
        <Aboutus/>
        <Footer/>
        
      </div>
    );
  }
}
export default App;
