import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
// import HeaderMain from './Components/HeaderMain/HeaderMain';
// import Header from './Components/Header/Header';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact Path= "/">
          <Home></Home>
        </Route>
        {/* <Route exact Path= "/">
          <HeaderMain></HeaderMain>
              </Route>
              <Route exact Path= "/">
          <Header></Header>
              </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
