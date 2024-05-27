import CaseCounter from "./CaseCounter";
import styles from "./Reportes.module.css";

const Reportes = () => {
  const numeroReporte = 4; // Definimos numeroReporte como una constante con el valor 4
  const fecha = "8 de Mayo 2024";
  const bajada = [
    "El 11 de julio se lanzó en la Legislatura porteña el Mapa de la Policía, herramienta digital que propone construir una RED DE CUIDADOS CONTRA LA VIOLENCIA POLICIAL.",
    "El principal objetivo de la iniciativa es VISIBILIZAR EL ABUSO para evitar que se naturalice.",
  ];
  const tituloSistematico = "titulo SISTEMATICO";
  const tituloPolitico = "titulo politico";
  const subtituloPolitico = "subtitulo politico";
  const singularImg =
    "https://static.wixstatic.com/media/0f4ca0_568735806ee749b588aae9358978fc13~mv2.jpg/v1/fill/w_1190,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/gatillo-mayo-2024-x-panchopepe-PORTADA--WEB-CRISIS.jpg";

  return (
    <div className={styles.reportContainer}>
      {/* Parte Intro */}
      <section className={styles.indexContainer}>
        <section className={styles.index}>
          <section className={styles.reportData}>
            <h2>{numeroReporte}° reporte de violencia policial</h2>
            <h3>{fecha}</h3>
            <h5>{bajada}</h5>
            <section className={styles.subMenu}>
              <h5 className={styles.Button}>Metodología</h5>
              <h5 className={styles.Button}>Reportes Anteriores</h5>
            </section>
          </section>
          <section className={styles.reportMenu}>
            <div className={styles.reportItem}>
              <h3>Geolocalización</h3>
              <h5>de los casos de violencia recibidos por el Mapa.</h5>
            </div>
            <div className={styles.reportItem}>
              <h3>Análisis de una práctica sistemática</h3>
              <h5>{tituloSistematico}</h5>
            </div>
            <div className={styles.reportItem}>
              <h3>{tituloPolitico}</h3>
              <h5>{subtituloPolitico}</h5>
            </div>
          </section>
        </section>
        <section className="reportCases">
          <div className={styles.reportImage}></div>
          <CaseCounter />
        </section>
      </section>

      {/* Casos Singulares */}
      <section className={styles.titleBox}>
        <img src={singularImg} alt="" className={styles.img} />
        <h2 className={styles.singularTitle}>Un caso singular</h2>
        </section>
      <div className={styles.singularCaseContainer}>
       
        <div className={styles.singularPart1}>
          <h3 className={styles.singularSubTitle}>
            Las balas del estado policial
          </h3>
          <h4 className={styles.singularText}>
            Fidel Ignacio Corbalán, de 18 años, recibió tres disparos de arma de
            fuego aquella madrugada del 16 de marzo de 2024. Cayó al piso de
            espaldas en la esquina de Balcarce y Pasaje San Lorenzo, en el
            barrio de San Telmo, mientras a su alrededor un centenar de jóvenes
            y adolescentes corrían y se dispersaban por el estruendo de las
            balas. Marcelo Alejandro Díaz, inspector de la Comisaría Comunal 3B
            de la Policía de la Ciudad había terminado un servicio adicional en
            el Instituto Nacional de la Propiedad Industrial, a unas cuadras de
            aquella esquina, y se dirigía a su casa en un auto particular,
            vestido de civil. Cuando llegó a las inmediaciones, un número
            indeterminado de jóvenes rodeó el vehículo y lo forzó a frenar.
            Según se supo por testimonios, estaba recién concluida una fiesta a
            la que la mayoría había asistido. Había jóvenes que conversaban
            sobre la calle o la vereda, que hablaban por teléfono o bebían el
            resto de la cerveza que les quedaba en el vaso. Algunos de ellos
            -entre los que se señala a Fidel- en momentos previos a la llegada
            de Díaz, habían forzado la cerradura de un auto estacionado e
            intentado forzar el baúl de otro, aunque el dueño del vehículo -
            vecino del lugar- lo había impedido. El momento en que el Renault
            Sandero de Díaz aparece en escena quedó registrado en un video que
            forma parte de la prueba, en el marco de la investigación penal.
            Díaz declaró que se abalanzaron sobre el automóvil, que intentaron
            abrir las puertas, que sentía las patadas y los golpes sobre el
            metal de su auto, que había dejado apenas unos centímetros baja la
            ventanilla y que por ahí, con los dedos, una persona había levantado
            el pestillo de seguridad e intentaba forzar su entrada al vehículo.
            Hasta aquí, lo que declaró Díaz coincide en líneas generales- con lo
            que muestran las imágenes.
          </h4>
          <h4 className={styles.singularText}>
            Después, según el oficial, en medio de ese forcejeo, pudo ver que
            otro de sus agresores que se encontraba delante, a la altura del
            espejo retrovisor Fidel Corbalán- le apuntaba con un arma. El
            oficial ante la Justicia que tuvo que sacar la reglamentaria y
            dispararle. Lo hizo por ese breve espacio abierto de la ventanilla,
            el vidrio se vidrio se mantuvo intacto. Su pistola marca Bersa,
            modelo “Thunder”, semiautomática, calibre 9x19 mm emitió, al menos,
            tres disparos que dieron de frente contra el cuerpo de Fidel.
            Falleció, según la autopsia, por “múltiples lesiones de proyectil de
            arma de fuego y hemorragia interna”. Esas mismas balas, que
            traspasaron al joven en el hombro, el abdomen y el muslo izquierdo,
            hirieron a otros dos adolescentes, de 17 y 15 años, que corrieron
            por sus vidas. Ambos fueron llevados al Hospital Argerich, donde sus
            lesiones quedaron registradas como “herida por proyectil de arma de
            fuego en muslo izquierdo y fractura expuesta de fémur izquierdo”, y
            un “roce de impacto de bala en el pie izquierdo”, respectivamente.
          </h4>
        </div>
      </div>
      <div className={styles.singularPart2}>
        <h4 className={styles.singularTextBlack}>
          Y sin embargo, del cúmulo de pruebas reunidas, de los testimonios
          recabados, de las filmaciones del momento del hecho o de las
          circunstancias previas al asalto al oficial, no surge la existencia de
          otra arma de fuego que no fuera la del agente de civil. Incluso, según
          valoró la Justicia, no había siquiera en el lenguaje corporal de los
          implicados, muchos de ellos hasta ahora desconocidos, actitud alguna
          que pudiera presumir la portación de un arma. En sus últimos momentos,
          en aquella filmación, Fidel tenía ambos brazos a los costados del
          cuerpo. No tuvo tiempo, siquiera, de correr.
        </h4>
        <h4 className={styles.singularTextBlack}>
          Con este motivo, el pasado 30 de abril, el Juzgado Nacional de Menores
          N° 6 decretó el procesamiento del inspector Marcelo Alejandro Díaz por
          el delito de homicidio agravado por el uso de un arma de fuego en
          perjuicio de Fidel Corbalán. Asimismo, en concurso ideal con el delito
          de lesiones graves y lesiones leves contra los dos adolescentes
          heridos. El magistrado decretó que fueron cometidos en exceso de la
          legítima defensa necesaria, en calidad de autor. No obstante, el
          procesamiento del agente no incluyó la prisión preventiva. Hasta el
          momento de la publicación del presente reporte, tampoco había sido
          relevado de sus funciones. El procesamiento fue apelado por la defensa
          del imputado, por lo que tampoco se encuentra firme ni se conoce
          cuándo la causa podría ser elevada a juicio oral. Por una parte de la
          querella, interviene el equipo jurídico del Programa de Asistencia y
          Patrocinio Jurídico a Víctimas de Delitos del Ministerio Público de la
          Defensa de la Nación.{" "}
        </h4>
        <h4 className={styles.singularTextBlack}>
          El crimen de Fidel Corbalán pone en discusión el estado policial, es
          decir, la posibilidad de que los agentes en actividad o retirados
          tengan permiso de portación de armas las 24 horas, tanto dentro como
          fuera del horario de trabajo y estando o no de uniforme. Aún sin estar
          firme, esta sentencia reconoció que hubo un uso inapropiado del arma
          de fuego, es decir, una incompetencia por parte del agente y un exceso
          o desproporción de la respuesta ante una agresión ilegítima. De esta
          manera, al igual que en otras causas, se revela la falta de
          capacitación y profesionalismo policial así como la ausencia de
          criterios de intervención basados en el principio racional del uso de
          la fuerza, un criterio de intervención que tiene un importante
          componente político. Precisamente, Fidel Corbalán moría por la bala
          policial a dos días de la publicación en el Boletín Oficial de la
          Resolución 125/2024 en la que la ministra de Seguridad de la Nación,
          Patricia Bullrich, flexibilizaba el uso de las armas de fuego para las
          fuerzas federales que, a partir de ese momento, pueden disparar sin
          identificarse en determinadas circunstancias. Esa política de Estado
          que legaliza el gatillo fácil permea también en los estrados
          judiciales. Así, el pasado 6 de mayo, la Cámara de Casación revocó la
          sentencia de Luis Chocobar, policía bonaerense que mató por la espalda
          a un adolescente que había asaltado y herido a un turista en el barrio
          de La Boca en 2017. Chocobar, en ese momento había sido recibido y
          felicitado por Bullrich durante la gestión presidencial de Mauricio
          Macri.
        </h4>
        <h4 className={styles.singularTextBlack}>
          {" "}
          En la era libertaria, la ministra no solo festejó el fallo en sus
          redes sociales, también recibió en su despacho a otros agentes que
          mataron en el ejercicio de sus funciones. En el video publicado en su
          cuenta de Instagram escribió: “A lo largo y ancho del país hay muchos
          Chocobar. Hoy los recibimos y reconocemos a cada uno de ellos”.{" "}
        </h4>
      </div>

      {/* Caso de Violencia Sistématica */}
      <div className={styles.sistematicContainer}>
        <div>
          <h2>La represión a la protesta del nuevo gobierno de ultraderecha</h2>
          <h4>
            Javier Milei asumió el comando del estado nacional el 10 de
            diciembre de 2023, al mismo tiempo que Jorge Macri se hacía cargo de
            la Ciudad de Buenos Aires. Ellos representan a las dos corrientes
            principales de la ultraderecha en nuestro país: el presidente lidera
            al partido libertario, mientras el jefe de gobierno porteño integra
            el PRO. A pesar de haber competido en las últimas elecciones, ambas
            fuerzas se aliaron con el objetivo de imponer una nueva
            gobernabilidad, basada en un dos principios fundamentales: llevar a
            cabo un programa económico de tinte marcadamente antipopular, y
            neutralizar cualquier intento de resistencia ante el ajuste y las
            reformas pro mercado. Para cumplir con el segundo postulado están
            desplegando una nueva política de seguridad, que criminaliza la
            protesta social y hostiga a las organizaciones sociales,
            desconociendo los consensos democráticos establecidos luego de la
            última dictadura militar.
          </h4>
          <h4>
            La encargada de articular esta avanzada represiva es la ministra de
            Seguridad de la Nación Patricia Bullrich, candidata presidencial del
            partido de Macri. Su principal herramienta es el “Protocolo para el
            mantenimiento del orden público ante el corte de vías de
            circulación”, más conocido como Protocolo antipiquetes, publicado en
            el Boletín Oficial el 14 de diciembre, a solo cuatro días de
            iniciado el mandato. Como explica un comunicado del Centro de
            Estudios Legales y Sociales (CELS), la medida “establece que
            cualquier manifestación pública que se realice con cortes de calles
            o rutas constituye la comisión de un delito en flagrancia, lo que
            habilitará la actuación de las fuerzas de seguridad para desalojar o
            dispersar la protesta y para recabar información sobre sus
            participantes y organizaciones a los fines de perseguirlos
            penalmente. Al suprimir el derecho a elegir el modo y lugar de la
            protesta, anula por completo el derecho a manifestarse”.
          </h4>
          <h4>
            Como es lógico, la mayor parte de las manifestaciones y expresiones
            colectivas del descontento se desarrollan en la Ciudad de Buenos,
            sede del poder político, judicial, mediático y económico. Sin
            embargo, la Capital Federal cuenta con su propia normativa, que
            difiere con la diseñada desde el Ejecutivo Nacional. A continuación,
            presentamos la cronología de los operativos represivos desplegados
            de manera coordinada por las fuerzas de seguridad federales y
            porteñas desde la asunción del nuevo gobierno de derechas, con el
            objetivo de encontrar patrones y determinar su éxito y/o su fracaso.
          </h4>
        </div>
        <div>
          <h2>Cronología de los operativos policiales contra la protesta.</h2>
        </div>
        <div>
          <h2>Conclusiones provisorias:</h2>
          <h4>
            Como hemos visto a lo largo de la cronología, el ritmo y la magnitud
            de la protesta social durante los cinco meses que cubre este Reporte
            ha sido impresionante. Sin temor a equivocarnos, se trata del mayor
            nivel de movilización en las últimas dos décadas. Pero también fue
            notable y por momentos desproporcionada la dimensión de los
            operativos policiales desplegados por el Ministerio de Seguridad de
            la Nación, y sus estrategias de amedrentamiento.{" "}
          </h4>
          <h4>El gobierno de ultraderecha se propone un doble objetivo:</h4>
          <h4>
            infundir el miedo en quienes se ven afectados por las agresivas
            políticas del oficialismo, para disuadirlos y que no se movilicen;{" "}
          </h4>
          <h4>
            golpear a las organizaciones populares, históricamente encargadas en
            nuestro país de catalizar y encauzar la protesta.
          </h4>
          <h4>
            A partir del seguimiento realizado por el Archivo Histórico de la
            Represión en Argentina, concluimos que el primer propósito ha
            fracasado, al menos por ahora. Tras un primer momento en el que la
            prepotencia represiva parecía imponerse, especialmente durante la
            última semana de enero en ocasión del tratamiento de la primera Ley
            Ómnibus en el Congreso, la violencia estatal fue disminuyendo y la
            aplicación del Protocolo antipiquetes se relajó, mientras las
            protestas crecieron en intensidad y volumen.
          </h4>
          <h4>
            Son múltiples los indicios que nos llevan a arriesgar este balance
            parcial. También son variadas las causas. Entre ellas, podríamos
            apuntar los cortocircuitos evidentes generados entre las autoridades
            de Seguridad nacionales y las de la Ciudad, y la poca sinergia entre
            las fuerzas federales y porteñas.{" "}
          </h4>
          <h4>
            Por otra parte, el costo de implementar casi diariamente semejante
            movilización policial no solo se mide financieramente, sino también
            en la distracción de efectivos que implica para su utilización en
            los territorios donde la violencia social aumenta. Anotemos al pasar
            que la iniciativa de cobrarle dichos operativos a las organizaciones
            que participan de la protesta no pasó de ser una performance
            meramente intimidatoria.
          </h4>
          <h4>
            performance meramente intimidatoria. Por último, hay que tener en
            cuenta también las negativas implicancias institucionales de violar
            ciertos parámetros democráticos, aún si buena parte del sistema
            político, de la casta empresarial y de la constelación mediática,
            apoyan con entusiasmo la vocación estatal de disciplinamiento. Más
            que la atención de la Comunidad Internacional, expresada en la carta
            de preocupación que enviaron tres Relatores de la ONU, el síntoma de
            ese relativo revés es la incapacidad de aprobar leyes en el
            Parlamento y el naufragio del Pacto de Mayo.
          </h4>
          <h4>
            Donde quizás el gobierno sí haya logrado cierto éxito, aunque el
            desenlace en este rubro aún está por verse, es en su intento por
            maniatar a las estructuras organizacionales del campo popular. La
            criminalización judicial desatada durante los primeros días de mayo
            contra las organizaciones sociales significó un salto de escala en
            la persecución. Es preciso crear las herramientas legales y
            narrativas necesarias para desarmar esta ofensiva disciplinadora.
          </h4>
          <h4>
            La casi totalidad de los eventos mapeados en este Reporte pertenecen
            al Área Metropolitana de Buenos Aires (AMBA), porque es allí donde
            se concentró la conflictividad durante los primeros cinco meses de
            la gestión ultraderechista, y porque nuestra plataforma ciudadana se
            ocupa por ahora de monitorear la actuación policial en la Capital
            Federal. Pero al cierre de esta edición, la protesta se desató en
            diferentes provincias y amenaza con derramarse por todo el país.
            Durante las próximas semanas, además, el Mapa de la Policía será
            lanzado en la ciudad de La Plata y en Rosario. Así las cosas, cada
            vez se torna más relevante cartografiar los movimientos policiales y
            construir una potente red de autocuidados ciudadanos.{" "}
          </h4>
        </div>
      </div>

      {/* Análisis Político */}
      <div className={styles.politicContainer}>
        {/* Detalles del análisis político */}
      </div>

      {/* Contador de Casos */}
    </div>
  );
};

export default Reportes;
