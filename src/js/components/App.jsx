import React from "react";

import Header from "./Header";
import Services from "./services";
import Gallery from "./Gallery.jsx"
class App extends React.Component {
  render() {
    return (
      <div>
        
        <Header />
        <Services />
        <Gallery />
      </div>
    );
  }
}
export default App;
