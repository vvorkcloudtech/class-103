import React from "react";
import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Services from "./services.jsx";
import Nav from './navigation';

import Header from "./Header";
import Services from "./services";

class App extends React.Component {
  render() {
    return (
      <div>
        
        <Nav/>
        <div>hello</div>
        <Header />
        <Services />
        <Hero/>
      </div>
    );
  }
}
export default App;
