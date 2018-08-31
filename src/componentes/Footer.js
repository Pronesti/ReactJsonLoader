import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
<footer className="page-footer font-small bg-light">
  <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://github.com/Pronesti">Diego Pronesti</a>
  </div>
</footer>
    );
  }
}

export default Footer;
