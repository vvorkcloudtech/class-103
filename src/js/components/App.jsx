import React from "react";
<<<<<<< HEAD
import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Services from "./services.jsx";
=======
import Nav from './navigation'

import Header from "./Header";
import Services from "./services";
>>>>>>> dc45e7f2436932736f4cfad9e05e5dba05431a28

class App extends React.Component {
  render() {
    return (
      <div>
        
        <Nav/>
        <div>hello</div>
        <Header />
        <Services />
<<<<<<< HEAD
        <Hero/>
=======
>>>>>>> dc45e7f2436932736f4cfad9e05e5dba05431a28
      </div>
    );
  }
}
export default App;
