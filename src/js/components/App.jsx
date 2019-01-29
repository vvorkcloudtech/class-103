import React from "react";
import Nav from './navigation'

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
      </div>
    );
  }
}
export default App;
