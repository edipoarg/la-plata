import React, { useState } from "react";
import styles from "./Denuncia.module.css";
import Airtable from "airtable";
import Icons from "../iconos/Icons";
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
        <section className={styles.header}>
          <Icons icon="denuncias" className={styles.icon} iconSize="4rem" />

          <section className={styles.denunciaTitles}>
            <h2 className={styles.title}>Quiero Denunciar</h2>
            <h4 className={styles.subtitle}>Un hecho de violencia policial</h4>
          </section>
        </section>

        <section className={styles.denunciaForm}>
          <h3 className={styles.part}>I. LUGAR Y FECHA</h3>
          <h4 className={styles.question}>¿Cuándo fue?</h4>
          <input
            className={styles.short}
            type="date"
            value={fecha}
            placeholder="Contanos cuándo fue"
            onChange={(e) => setFecha(e.target.value)}
          />
          <input
            className={styles.short}

            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
          <h4 className={styles.question}>¿Dónde fue?</h4>
          <input
            className={styles.long}

            type="text"
            value={lugar}
            placeholder="Especificá el lugar"
            onChange={(e) => setLugar(e.target.value)}
          />

          <h3 className={styles.part}>II. DESCRIPCIÓN DEL HECHO</h3>
          <textarea className={styles.textBox}
            value={descripcion}
            placeholder="Describí el hecho"
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <h3 className={styles.part}>III. DATOS DEL AGRESOR</h3>
          <select className={styles.drop} value={agresor} onChange={(e) => setAgresor(e.target.value)}>
            <option value="">Selecciona una opción</option>
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

          <h5 className={styles.question}>Si identificaste a los policías implicados</h5>
          <input
            className={styles.long}

            type="text"
            value={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
            placeholder="Podés consignarlo aquí"
          />

          <h5 className={styles.question}>Si identificaste la patente de algún patrullero o moto</h5>
          <input
            className={styles.long}

            type="text"
            value={patente}
            onChange={(e) => setPatente(e.target.value)}
            placeholder="Podés anotarla aquí"
          />

          <h3 className={styles.part}>IV. INFORMACIÓN DE CONTACTO</h3>
          <input
            className={styles.long}

            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input className={styles.long}

            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <input
            className={styles.long}

            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className={styles.part}>V. ARCHIVO ADJUNTO</h3>
          <input
            className={styles.adjunto}
            type="file"
            multiple={true}
            onChange={(e) => {
              setArchivos(e.target.files);
            }}
          />

          <h3 className={styles.part}>Marque las opciones deseadas</h3>
          <div className={styles.opciones}>
            <label className={styles.label}>
              <input className={styles.checkbox}
                type="checkbox"
                checked={visibilizar}
                onChange={() => setVisibilizar(!visibilizar)}
              />
              <h3 className={styles.option}>Quiero visibilizar la situación de violencia institucional</h3>
            </label>
            <label className={styles.label}>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={denunciarLegalmente}
                onChange={() => setDenunciarLegalmente(!denunciarLegalmente)}
              />
              <h3 className={styles.option}> Quiero denunciar legalmente</h3>
            </label>
          </div>
          <div >
            <input
              type="checkbox"
              checked={aceptoTerminos}
              onChange={() => setAceptoTerminos(!aceptoTerminos)}
            />
            <label className={styles.acepto}>Acepto los términos y condiciones</label>
            <Link className={styles.link} to="./terminos"> Leer</Link>

          </div>

          <button className={styles.boton} type="button" onClick={handleSubmit} disabled={isSending}>
            Enviar
          </button>
        </section>
      </section>
    </>
  );
};

export default Denuncia;
