import React from 'react'
import { ID } from '../interfaces/IReqRestApiusers';
const Tabla = (country: ID) => {
    console.log(country);
    return (
      
      
      <table>
      <thead>    
        <tr>
          <th >id</th>
          <th >Nombre</th>
          <th >Año</th>
          <th >Color</th>
          <th >Img</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th >{country.id}</th>
          <td>{country.Nombre}</td>
          <td>{country.Año}</td>
          <td>{country.Color}</td>
          <td>{country.Img}</td>
        </tr>
      </tbody>
    </table>
    );
    
}

export default Tabla