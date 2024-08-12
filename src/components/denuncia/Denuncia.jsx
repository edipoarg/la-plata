// QUEHACER eliminar este lint-disable y hacer que se haga algo con los archivos.
// quedamos en que lo toma Frani (6/5/24)
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Denuncia.module.css";
import { Link } from "react-router-dom";

const Denuncia = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [lugar, setLugar] = useState("Cuentanos dónde fue");
  const [descripcion, setDescripcion] = useState("Describe el hecho");
  const [agresor, setAgresor] = useState("");
  const [identificacion, setIdentificacion] = useState(
    "Especifícanos cuál fue",
  );
  const [patente, setPatente] = useState("Puedes anotarlo aquí");
  const [archivos, setArchivos] = useState(null);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [visibilizar, setVisibilizar] = useState(false);
  const [denunciarLegalmente, setDenunciarLegalmente] = useState(false);
  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setArchivos(file);
  };

  const handleSubmit = () => {};

  return (
    <>
      <section className={styles.denunciaContainer}>
        <section className={styles.denunciaTitles}>
          <h2>Quiero Denunciar</h2>
          <h4>Un hecho de violencia policial</h4>
        </section>

        <section className="styles.denunciaForm">
          <h3>I. LUGAR Y FECHA</h3>
          <h4>¿Cuándo fue?</h4>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
          <h4>¿Dónde fue?</h4>
          <input
            type="text"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
          />

          <h3>II. DESCRIPCIÓN DEL HECHO</h3>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <h3>III. DATOS DEL AGRESOR</h3>
          <select value={agresor} onChange={(e) => setAgresor(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Policía de la Ciudad">Policía de la Ciudad</option>
            <option value="(DOU) Operaciones Urbanas de Contención">
              (DOU) Operaciones Urbanas de Contención
            </option>
            <option value="Agentes de Prevención CABA">
              Agentes de Prevención CABA
            </option>
            <option value="Espacio Público">Espacio Público</option>
            <option value="Policía Federal">Policía Federal</option>
            <option value="Prefectura">Prefectura</option>
            <option value="Gendarmería Nacional">Gendarmería Nacional</option>
            <option value="Policía Bonaerense">Policía Bonaerense</option>
            <option value="De Civil (sin uniforme)">
              De Civil (sin uniforme)
            </option>
            <option value="Otra">Otra</option>
          </select>

          {agresor === "Otra" && (
            <input
              type="text"
              value={identificacion}
              onChange={(e) => setIdentificacion(e.target.value)}
            />
          )}

          <h5>Si identificaste a los policías implicados</h5>
          <input
            type="text"
            value={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
            placeholder="Podés consignarlo aquí"
          />

          <h5>Si identificaste la patente de algún patrullero o moto</h5>
          <input
            type="text"
            value={patente}
            onChange={(e) => setPatente(e.target.value)}
            placeholder="Podés anotarlo aquí"
          />
          <h3>IV. INFORMACIÓN DE CONTACTO</h3>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3>Marque las opciones deseadas</h3>
          <label>
            <input
              type="checkbox"
              checked={visibilizar}
              onChange={() => setVisibilizar(!visibilizar)}
            />
            Quiero visibilizar la situación de violencia institucional
          </label>
          <label>
            <input
              type="checkbox"
              checked={denunciarLegalmente}
              onChange={() => setDenunciarLegalmente(!denunciarLegalmente)}
            />
            Quiero denunciar legalmente
          </label>

          <div>
            <label>Acepto los términos y condiciones</label>
            <Link to="./terminos">Leer</Link>
            <input
              type="checkbox"
              checked={aceptoTerminos}
              onChange={() => setAceptoTerminos(!aceptoTerminos)}
            />
          </div>

          {/* Agrega aquí el botón de Captcha de no soy un robot */}

          <button onClick={handleSubmit}>Enviar</button>
        </section>
      </section>
    </>
  );
};

export default Denuncia;
