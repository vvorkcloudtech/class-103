import React from "react";

import Header from "./Header";
import Services from "./services";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>hello</div>
        <Header/>
        <Services/>
        <Footer/>
      </div>
    );
  }
}
export default App;
