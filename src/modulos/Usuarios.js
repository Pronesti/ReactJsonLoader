import React, { Component } from 'react';
import users from './../Data';
import  Usuario  from './../componentes/User'
console.log(users);



class Usuarios extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      users,
    };
  }
  
  
  render() {
  const { users } = this.state;
    
    return (
      <main className="usuarios">
      {users.map( (user) => <Usuario data={user} /> ) }
      </main>
    );

  }
}

export default Usuarios;