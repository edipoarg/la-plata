import React from "react";
import ReactDOM from "react-dom/client";
import { loader as getURLs } from "./components/Loader.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

import Investigaciones from "./components/Investigaciones/Investigaciones.jsx";
import Denuncia from "./components/denuncia/Denuncia.tsx";
import Denuncias from "./components/denuncias/Denuncias.jsx";
import Recursos from "./components/recursos/Recursos.jsx";
import Jefatura from "./components/jefatura/Jefatura.jsx";
import ReportesSoon from "./components/reportes/ReportesSoon.jsx";
import Nosotrxs from "./components/us/Nosotrxs.jsx";
import Menu from "./components/menu/Menu.jsx";
import GatilloFacil from "./components/gatilloFacil/GatilloFacil.jsx";
import Podcast from "./components/podcast/Podcast.jsx";
import Recurso from "./components/recurso/Recurso.jsx";
import Autorxs from "./components/Investigaciones/autorxs/Autorxs.jsx";
import FichaAutorxs from "./components/Investigaciones/autorxs/FichaAutorxs.jsx";
import Investigacion from "./components/Investigaciones/investigacion/Investigacion.jsx";
import Root from "./routes/Root.jsx";
import Ficha from "./components/fichas/Ficha.jsx";
import Organizate from "./components/recurso/Organizate.jsx";
import Nota14 from "./components/Investigaciones/todasInvest/Nota14.jsx";
import Terminos from "./components/terminos/Terminos.jsx";

const loader = async () => ({
  urls: await getURLs({
    casos: "data/casos.json",
    barriosCaba: "data/barriosCaba.json",
    departamentos: "data/departamentos.json",
    caba: "data/caba.json",
    laPlata: "data/laPlata.json",
    departamentosLaPlata: "data/departamentosLaPlata.json",
    dependenciasLaPlata: "data/dependenciasLaPlata.json",
    dependenciasCaba: "data/dependenciasCaba.json",
    gatillo: "data/gatilloLaPlata.json",
  }),
});

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <App />, loader },
      { path: "/denuncias", element: <Denuncias />, loader },
      { path: "/recursos", element: <Recursos />, loader },
      { path: "/investigaciones", element: <Investigaciones />, loader },
      { path: "/jefatura", element: <Jefatura /> },
      { path: "/reportes", element: <ReportesSoon /> },
      { path: "/nosotrxs", element: <Nosotrxs /> },
      { path: "/menu", element: <Menu /> },
      { path: "/podcast", element: <Podcast /> },
      { path: "/gatillo-facil", element: <GatilloFacil /> },
      { path: "/denuncia", element: <Denuncia /> },
      { path: "/recursos/:dominio", element: <Recurso /> },
      { path: "/organizate", element: <Organizate /> },
      { path: "/autorxs", element: <Autorxs /> },
      { path: "/:enlaceVer", element: <FichaAutorxs /> },
      { path: "/investigacion/:dominio", element: <Investigacion /> },
      { path: "/investigaciones", element: <Nota14 /> },
      { path: "/ficha/:Contador", element: <Ficha /> },
      { path: "/terminos", element: <Terminos /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
