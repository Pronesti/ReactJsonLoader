import React, { Component } from 'react';
import firebase from 'firebase';

class Login extends Component {
  constructor (){
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);

  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    })
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(error.message));
  }

  handleLogOut(){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido.`))
    .catch(error => console.log(error.message));
  }

  renderLoginButton() {
    //logueado
    var respuesta = null;

    if (this.state.user) {
      
      respuesta = (
      <div>
      <img src={this.state.user.photoURL} alt={this.state.user.displayName} className="loginPic" />
      <p> Hola {this.state.user.displayName}! </p>
      <button className="btn bg-danger btn-lg text-white" onClick={this.handleLogOut}>Log Out</button>
      </div>
      );
    } else {
      //sinloguear
      respuesta = (<button className="btn bg-primary bot btn-lg text-white" onClick={this.handleAuth}>Log in</button>);
    }

    return(respuesta);
  }

  render() {
    return (
      <div className="Login">
            { this.renderLoginButton() }
      </div>
    );
  }
}

export default Login;
