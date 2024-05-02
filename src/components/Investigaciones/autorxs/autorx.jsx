// Autorx.jsx

import React from "react";
import { Link } from "react-router-dom";

const Autorx = ({ autorxData }) => {
  const { nombre, imagen, investigaciones } = autorxData;

  return (
    <div>
      <h1>{nombre}</h1>
      <img src={imagen} alt={`Foto de ${nombre}`} />

      <h2>Investigaciones:</h2>
      <ul>
        {investigaciones.map((investigacion, index) => (
          <li key={index}>
            <Link to={investigacion.enlace}>{investigacion.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autorx;
