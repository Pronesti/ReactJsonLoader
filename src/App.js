import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink, Link} from "react-router-dom";

import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

import Home from './modulos/Home';
import About from './modulos/About';
import Error404 from './modulos/Error404';
import Login from './modulos/Login';
import Usuarios from './modulos/Usuarios';





class App extends Component {

  render() {
    return (
      <div className="App">
      

  <Router>

      <div className="cuerpo">    
<Navbar />

  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/login" component={Login} />
  <Route path="/users" component={Usuarios} />
  <Route component={Error404} />
  </Switch>
  <Footer />
  </div>
  </Router>

 </div>
    );
  }
}



export default App;
