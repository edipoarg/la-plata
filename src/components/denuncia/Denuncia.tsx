import React, { useState } from "react";
import styles from "./Denuncia.module.css";
import Airtable from "airtable";
import constants from "../../../services/constants";
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../../../services/firebase";

// Initialize Airtable base
const base = new Airtable({ apiKey: constants.apiKey }).base(constants.baseId);

type RequiredFields = {
  fecha: string;
  hora: string;
  lugar: string;
  descripcion: string;
  nombre: string;
  telefono: string;
  email: string;
};

const getEmptyRequiredFieldsError = (
  requiredFields: RequiredFields,
): string | null => {
  const { fecha, hora, lugar, descripcion, nombre, telefono, email } =
    requiredFields;
  if (
    !fecha ||
    !hora ||
    !lugar ||
    !descripcion ||
    !nombre ||
    !telefono ||
    !email
  ) {
    return `Por favor completa los campos obligatorios: ${Object.entries(
      requiredFields,
    )
      .filter(([_key, value]) => value === "")
      .map(([key]) => key)
      .join(", ")}`;
  }
  return null;
};
import { Link } from "react-router-dom";

const Denuncia = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [lugar, setLugar] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [agresor, setAgresor] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [patente, setPatente] = useState("");
  const [archivos, setArchivos] = useState<null | FileList>(null);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [visibilizar, setVisibilizar] = useState(false);
  const [denunciarLegalmente, setDenunciarLegalmente] = useState(false);
  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const handleSubmit = async () => {
    setIsSending(true);
    await submit();
    setIsSending(false);
  };

  const submit = async () => {
    const emptyFieldError = getEmptyRequiredFieldsError({
      descripcion,
      email,
      fecha,
      hora,
      lugar,
      nombre,
      telefono,
    });

    if (emptyFieldError) {
      alert(emptyFieldError);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }

    if (!aceptoTerminos) {
      alert("Por favor acepta los términos y condiciones.");
      return;
    }

    try {
      const fileUrls: string[] = [];
      if (archivos) {
        for (let i = 0; i < archivos.length; i++) {
          const archivo = archivos[i];
          if (archivo) {
            const archivoRef = ref(storage, `archivos/${archivo.name}`);
            const snapshot = await uploadBytes(archivoRef, archivo);
            const fileUrl = await getDownloadURL(snapshot.ref);
            fileUrls.push(fileUrl);
          }
        }
      }
      /* Objeto con la data para guardar en airtable */
      const recordData = {
        Fecha: fecha,
        Hora: hora,
        Lugar: lugar,
        Descripcion: descripcion,
        Agresor: agresor,
        Identificación: identificacion,
        Patente: patente,
        // commas are legal parts of URLs, so separating URLs with commas and spaces makes sense
        Archivos: fileUrls.join(" , "),
        Nombre: nombre,
        Teléfono: telefono,
        Email: email,
        Visibilizar: visibilizar,
        Denunciar_legalmente: denunciarLegalmente,
      };

      const response = await base("tblgzTeUEqwQAuiwu").create(recordData);
      console.log("Registro creado con éxito:", response);
      alert("Denuncia enviada con éxito");
      setFecha("");
      setHora("");
      setLugar("");
      setDescripcion("");
      setAgresor("");
      setIdentificacion("");
      setPatente("");
      setArchivos(null);
      setNombre("");
      setTelefono("");
      setEmail("");
      setVisibilizar(false);
      setDenunciarLegalmente(false);
      setAceptoTerminos(false);
    } catch (error) {
      console.error("Error al crear el registro:", error);
      alert(
        "Hubo un error al enviar la denuncia. Por favor intenta nuevamente más tarde.",
      );
    }
  };

  return (
    <>
      <div className={`${styles.spinnerContainer} ${styles.active}`}></div>
      <section className={styles.denunciaContainer}>
        <section className={styles.denunciaTitles}>
          <h2>Quiero Denunciar</h2>
          <h4>Un hecho de violencia policial</h4>
        </section>

        <section className={styles.denunciaForm}>
          <h3>I. LUGAR Y FECHA</h3>
          <h4>¿Cuándo fue?</h4>
          <input
            type="date"
            value={fecha}
            placeholder="Contanos cuándo fue"
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
            placeholder="Especificá el lugar"
            onChange={(e) => setLugar(e.target.value)}
          />

          <h3>II. DESCRIPCIÓN DEL HECHO</h3>
          <textarea
            value={descripcion}
            placeholder="Describí el hecho"
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
            placeholder="Podés anotarla aquí"
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

          <h3>V. ARCHIVO ADJUNTO</h3>
          <input
            type="file"
            multiple={true}
            onChange={(e) => {
              setArchivos(e.target.files);
            }}
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

          <button type="button" onClick={handleSubmit} disabled={isSending}>
            Enviar
          </button>
        </section>
      </section>
    </>
  );
};

export default Denuncia;
