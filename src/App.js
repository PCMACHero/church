import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import logo from './assets/images/church-logo.jpg'

import './App.css';
import Homepage from './homepage/homepage';
import Footer from './footer/footer';
import Ministerios from './ministerios/ministerios';
import ScrollToTop from './scrollToTop/scrolltotop';
import Conocemos from './conocemos/conocemos';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ScrollToTop>

      
      <React.Fragment>
      <nav className="navbar fixed-top" style={{padding: "0"}}>
          <Link to="/" className="navbar-brand" style={{padding: "0"}}><img src={logo} alt="church logo" width="64px" height="64px"/>  </Link>
          <Link to="/"> <div className="nav-item"><div className="nav-link">HOME</div></div> </Link>
          <Link to="/ministerios"><div className="nav-link">MINISTERIOS</div></Link>
          <Link to="/conocemos"><div className="nav-link">CONOCEMOS</div></Link>
        </nav>
        <div className="App">
          <div style={{height:"64px", width:"100%"}}></div>
          <Route path="/" exact component={Homepage}/>
          <Route path="/ministerios" exact component={Ministerios}/>
          <Route path="/conocemos" exact component={Conocemos}/>
        </div>
        <Footer/>
      </React.Fragment>
      </ScrollToTop>
      
      
      </BrowserRouter>
      
    );
  }
}

export default App;
