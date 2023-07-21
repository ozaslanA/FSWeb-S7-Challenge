import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/pizza">
          <Form />
        </Route>
      </Router>
    </div>
  );
}
export default App;
