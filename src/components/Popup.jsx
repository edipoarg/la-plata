import React from 'react';
import '../styles/Popup.module.css';

const Popup = ({ coords, title, level, adress, phone, tipo, date, source }) => {
  return (
    <div className="popup">
      <h2>{level}</h2>
      <h3>{title}</h3>
      <h4>{adress}</h4>
      <h4>{phone}</h4>


      <p>{`Tipo: ${tipo}`}</p>
      <p>{`Fecha: ${date}`}</p>
      <p>{`Fuente: ${source}`}</p>
      {/* Add any additional information you want to display */}
    </div>
  );
};

export default Popup;
