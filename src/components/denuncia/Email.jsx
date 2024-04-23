import PropTypes from 'prop-types';
import { Html } from '@react-email/html';

const Email = ({ fecha, hora, lugar, descripcion, agresor, identificacion, patente, nombre, telefono, email }) => {
  return (
    <Html lang="es">
      <head>
        <title>Detalles de la Denuncia</title>
      </head>
      <body>
        <h1>Detalles de la Denuncia</h1>
        <p><strong>Fecha:</strong> {fecha || 'No especificada'}</p>
        <p><strong>Hora:</strong> {hora || 'No especificada'}</p>
        <p><strong>Lugar:</strong> {lugar || 'No especificado'}</p>
        <p><strong>Descripción:</strong> {descripcion || 'No especificada'}</p>
        <p><strong>Agresor:</strong> {agresor || 'No especificado'}</p>
        <p><strong>Identificación:</strong> {identificacion || 'No especificada'}</p>
        <p><strong>Patente:</strong> {patente || 'No especificada'}</p>
        <p><strong>Nombre:</strong> {nombre || 'No especificado'}</p>
        <p><strong>Teléfono:</strong> {telefono || 'No especificado'}</p>
        <p><strong>Email:</strong> {email || 'No especificado'}</p>
      </body>
    </Html>
  );
};

Email.propTypes = {
  fecha: PropTypes.string,
  hora: PropTypes.string,
  lugar: PropTypes.string,
  descripcion: PropTypes.string,
  agresor: PropTypes.string,
  identificacion: PropTypes.string,
  patente: PropTypes.string,
  nombre: PropTypes.string,
  telefono: PropTypes.string,
  email: PropTypes.string.isRequired, // Correo electrónico es requerido
};

export default Email;
