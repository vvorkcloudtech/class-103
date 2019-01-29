import React from "react";
import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Services from "./services.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>hello</div>
        <Header />
        <Services />
        <Hero/>
      </div>
    );
  }
}
export default App;
