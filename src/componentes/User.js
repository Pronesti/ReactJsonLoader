import React, { PureComponent } from 'react';
import Tags from './Tags'
import Friends from './Amigos'


class Usuario extends PureComponent {

  render() {
    const { name, address, company, email, friends, tags, eyeColor, gender, age, picture, balance, phone } = this.props.data
    return (
      <div>
        <div className="card user">
          <img className="imguser" src= {picture} width="100px" height="100px" /> 
          
          <div className="userM">
          <div class className="userEye"><i class="far fa-eye fa-pull-righ fa-2x" style= {{color: eyeColor }}></i></div>
          <div className="userName"><h2>{name}</h2></div> 
          </div>

<table class="table table-striped table-bordered table-sm">
  <tbody>
    <tr>
      <th scope="row">Edad:</th>
      <td>{age}</td>
    </tr>
    <tr>
      <th scope="row">Genero:</th>
      <td>{gender}</td>
    </tr>
    <tr>
      <th scope="row">Direccion:</th>
      <td>{address}</td>
    </tr>
    <tr>
      <th scope="row">Email:</th>
      <td><a href={email}>{email} </a> </td>
    </tr>
    <tr>
      <th scope="row">Telefono:</th>
      <td>{phone}</td>
    </tr>
    <tr>
      <th scope="row">Trabaja:</th>
      <td>{company}</td>
    </tr>
    <tr>
      <th scope="row">Sueldo:</th>
      <td>{balance}</td>
    </tr>
    <tr>
      <th scope="row">Amigos:</th>
      <td><Friends friends = {friends}/></td>
    </tr>
    <tr>
      <th scope="row">Etiquetas:</th>
      <td><Tags tags= {tags} /></td>
    </tr>
  </tbody>
</table>

   
        </div>
      </div>
    )
  }
}

export default Usuario;