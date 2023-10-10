import "devextreme/dist/css/dx.light.css";
import "devextreme/dist/css/dx.common.css";
import React from "react";
import "./App.css";
import Competition from "./pages/Competition";
import Navigation from "./components/Navigation/Navigation";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Competition />
        </div>
      </div>
    );
  }
}

export default App;
