import React from "react";
import Hero from './Hero.jsx';

import Header from "./Header";
import Services from "./services";
import Team from "./Team";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>hello</div>
        
        <Header />
        <Hero/>
        <Services />
        <Team/>
        
      </div>
    );
  }
}
export default App;
