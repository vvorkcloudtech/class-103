import React from "react";
import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Services from "./services.jsx";
import Nav from './navigation';


class App extends React.Component {
  render() {
    return (
      <div>
        
        <Nav/>
        <Hero/>
        <Services />
       
      </div>
    );
  }
}
export default App;
