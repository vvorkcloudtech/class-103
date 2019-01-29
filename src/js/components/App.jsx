import React from "react";
import About from "./Aboutus";
import Gallery from "./Gallery"
import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Services from "./services.jsx";
import Nav from './navigation';
import Footer from './Footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
       
        <Nav/>
        <Hero/>
        <Gallery />
        <Services />
        <br/>
        <Footer />

      </div>
    );
  }
}
export default App;
