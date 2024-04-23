import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { Email } from './Email'; // Tu plantilla de correo electrónico

const app = express(); // Configuración de Express
app.use(bodyParser.json()); // Middleware para analizar JSON

// Configura el endpoint POST para recibir solicitudes desde el frontend
app.post('/send-email', async (req, res) => {
  const { fecha, hora, lugar, descripcion, agresor, identificacion, patente, nombre, telefono, email } = req.body;

  // Asegúrate de que el campo de correo electrónico esté presente
  if (!email) {
    return res.status(400).send('Falta campo de correo electrónico');
  }

  // Renderiza la plantilla a HTML
  const emailHtml = render(
    <Email
      fecha={fecha}
      hora={hora}
      lugar={lugar}
      descripcion={descripcion}
      agresor={agresor}
      identificacion={identificacion}
      patente={patente}
      nombre={nombre}
      telefono={telefono}
      email={email}
    />
  );

  // Configuración del transporte de Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Cambia según tu configuración SMTP
    port: 465,
    secure: true,
    auth: {
      user: 'usuario',
      pass: 'contraseña',
    },
  });

  // Opciones del correo electrónico
  const mailOptions = {
    from: email, // Remitente es el correo del usuario
    to: 'mdpdataset@gmail.com', // Correo fijo donde se envía
    subject: 'Nueva Denuncia Recibida',
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions); // Enviar el correo
    res.send('Correo enviado con éxito'); // Respuesta de éxito
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).send('Error al enviar el correo'); // Respuesta de error
  }
});

const port = 3000; // Puerto donde se ejecuta el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
