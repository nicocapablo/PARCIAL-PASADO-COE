// --- PREGUNTAS DE PRUEBA ---
const preguntas = [
 {"texto": "El tamaño de un mercado objetivo puede gestionarlo por la distancia a la que la empresa es capaz de suministrar su producto o servicio.", "respuesta": true, 
  "explicacion": ". El tamaño del mercado puede definirse según la capacidad logística o de distribución de la empresa."},
    {"texto": "La misión de la empresa es el motivo principal de su existencia en la sociedad.", "respuesta": true, 
     "explicacion": ". La misión expresa la razón de ser de la empresa."},
    {"texto": "El resultado en las empresas puede ser de beneficio o pérdidas.", "respuesta": true, "explicacion": ". El resultado contable puede ser positivo (beneficio) o negativo (pérdida)."},
    {"texto": "Fondo de Maniobra (FM) = Activo Corriente - Pasivo Corriente", "respuesta": true, 
     "explicacion": ". Es la fórmula del fondo de maniobra."},
    {"texto": "Activo no corriente es la adquisición de bienes y servicios destinados a facilitar la actividad empresarial con carácter inferior al año (o al ciclo de explotación).", "respuesta": false, 
     "explicacion": ". Eso es activo corriente. El activo no corriente son bienes de uso duradero superior a un año."},
    {"texto": "Según OSLO, la innovación en producto se concreta en cómo la empresa hace sus procesos de negocio.", "respuesta": false, 
     "explicacion": ". Eso es innovación en procesos, no en producto."},
    {"texto": "Para que un proyecto se considere viable es necesario analizar la financiación inicial necesaria, y su financiación permanente se definirá en función de cómo evolucione la empresa.", "respuesta": true, 
     "explicacion": ". La viabilidad depende del equilibrio entre inversión inicial y financiación sostenible."},
    {"texto": "La creatividad es un objetivo importante de las empresas para conseguir una ventaja competitiva sostenible.", "respuesta": true, 
     "explicacion": ". Fomenta la innovación y la diferenciación."},
    {"texto": "La atenta observación de la vida diaria es un buen método para detectar necesidades no cubiertas.", "respuesta": true, 
     "explicacion": ". Observar el entorno ayuda a identificar oportunidades de mercado."},
    {"texto": "Una spin-off es una startup tecnológica.", "respuesta": true, 
     "explicacion": ". Una spin-off suele ser una empresa tecnológica surgida de otra organización o universidad."},
    {"texto": "En la técnica de creación de las ideas de los 6 sombreros, el blanco representa el pensamiento positivo, las ventajas y valores.", "respuesta": false, 
     "explicacion": ". El sombrero blanco representa los datos y hechos; el amarillo es el del pensamiento positivo."},
    {"texto": "El reciclaje es una forma de financiamiento y no se puede considerar dentro de la categoría de creación de productos.", "respuesta": false, 
     "explicacion": ". El reciclaje pertenece a la economía circular y puede generar nuevos productos."},
    {"texto": "Según el manual de OSLO, se puede realizar 3 tipos de innovación: tecnológica, comercial y organizativa.", "respuesta": false, 
     "explicacion": ". El manual OSLO distingue cuatro tipos: producto, proceso, organizativa y marketing."},
    {"texto": "Las patentes son un derecho exclusivo que se concede sobre una invención.", "respuesta": true, 
     "explicacion": ". La patente otorga derechos exclusivos sobre una invención."},
    {"texto": "La propiedad intelectual sobre una marca se puede mantener indefinidamente.", "respuesta": true, 
     "explicacion": ". Una marca puede renovarse indefinidamente cada 10 años."},
    {"texto": "Los derechos patrimoniales son el reconocimiento al autor o inventor por la obra o invento que ha hecho. No se puede ceder, ni renunciar, ni negociar.", "respuesta": false, 
     "explicacion": ". Los patrimoniales sí se pueden ceder o vender; los que no se pueden ceder son los derechos morales."},
    {"texto": "Si una nueva marca se parece demasiado a una ya registrada, puede crear confusión a los consumidores. Los titulares de la marca registrada pueden actuar legalmente contra la nueva marca y pedir que se modifique o se retire.", "respuesta": true, 
     "explicacion": ". Es un derecho de protección de marca."},
    {"texto": "Dentro del proceso de plan de negocio, hay 7 fases o niveles de madurez de la tecnología, llamadas TRL.", "respuesta": true, 
     "explicacion": ". Los TRL miden la madurez tecnológica en 7 niveles."},
    {"texto": "Si una empresa vende sus productos a 25 €, su coste variable es de 9 € y sus costes fijos son de 208.000 €. El punto muerto está en 13.000 unidades.", "respuesta": true, 
     "explicacion": ". PM = 208000 / (25 - 9) = 13000 unidades."},
    {"texto": "Un mercado de concurrencia es un cuanto existen muchos vendedores y muchos compradores.", "respuesta": true, 
     "explicacion": ". Es el mercado de competencia perfecta."},
    {"texto": "La oferta en economía se define como la cantidad y calidad de bienes o servicios que los consumidores están dispuestos a comprar a un precio y unas condiciones dadas en un momento determinado.", "respuesta": false, 
     "explicacion": ". Eso es la demanda. La oferta es lo que los productores están dispuestos a vender."},
    {"texto": "El mercado de consumo es aquel formado por organizaciones, empresas e instituciones.", "respuesta": false, 
     "explicacion": ". El de consumo son los consumidores finales; el de empresas es el industrial."},
    {"texto": "La cuota de mercado es el lugar que ocupa una empresa, marca o producto en un mercado determinado en función de determinados datos cuantificables, auditables y objetivos.", "respuesta": true, 
     "explicacion": ". Indica la participación de la empresa en el mercado."},
    {"texto": "En la segmentación de mercados no se usan variables como el género, la edad, el estado civil y la dimensión de la unidad familiar por la dificultad de conseguir estos datos.", "respuesta": false, 
     "explicacion": ". Esas variables demográficas son básicas en la segmentación de mercados."},
    {"texto": "Según Maslow, la primera necesidad a cubrir es la seguridad.", "respuesta": false, "explicacion": ". La primera son las necesidades fisiológicas; la seguridad es la segunda."},
    {"texto": "La propuesta de valor se define con 2 elementos: qué hacemos y cómo lo hacemos para crear valor al cliente.", "respuesta": true, 
     "explicacion": ". La propuesta de valor combina qué ofrecemos y cómo generamos valor."},
    {"texto": "El marketing MIX se refiere a las fuentes de información que nos posibilitan propuestas de mejora en el plan de empresa, la información la podemos obtener de clientes.", "respuesta": false, 
     "explicacion": ". El marketing mix son las 4 P: producto, precio, comunicación y distribución."},
    {"texto": "Up-selling es el conjunto de técnicas para vender (ofrecer) a un cliente un bien o servicio más caro que el que pretendía comprar o que ya ha comprado anteriormente.", "respuesta": true, 
     "explicacion": ". Es una técnica para aumentar el valor medio de la venta."},
    {"texto": "Las 4 P del marketing mix son: producto, precio, comunicación y distribución.", "respuesta": true, 
     "explicacion": ". Son las variables del marketing mix clásico."},
    {"texto": "El marketing industrial (B2B) tiene como característica que se negocia con el intermediario que realizará un proceso de transformación para obtener otro producto destinado al consumidor final.", "respuesta": true, 
     "explicacion": ". Es típico del marketing entre empresas."},
    {"texto": "El CRM es una estrategia de fidelización que busca atraer clientes, y satisfacerlos con rentabilidad, construyendo estrechos vínculos y ofreciendo a cambio unos servicios.", "respuesta": true, 
     "explicacion": ". El CRM se basa en relaciones rentables y duraderas con los clientes."},
    {"texto": "En una cuenta de PyG (Pérdidas y Ganancias) la partida deudores son todos los clientes que nos han pagado al contado.", "respuesta": false, 
     "explicacion": ". Deudores son los clientes que aún no han pagado."},
    {"texto": "La crisis del COVID-19 ha frenado el turismo masivo de sol y playa. Si tengo un hotel en primera línea de mar y con la crisis busco clientes que quieran teletrabajar desde el hotel es una estrategia FO (utilizar una fortaleza para una oportunidad).", "respuesta": true, 
     "explicacion": ". Usa una fortaleza (ubicación) para aprovechar una oportunidad (teletrabajo)."},
    {"texto": "En el análisis DAFO, la F significa Fabricación.", "respuesta": false, "explicacion": ". F significa Fortalezas."},
    {"texto": "Según PORTER, son 5 las fuerzas que actúan sobre un sector para Renta. Aplicar un marketing estratégico táctico de especialización en un segmento.", "respuesta": true, 
     "explicacion": ". Porter propuso 5 fuerzas competitivas del sector."},
    {"texto": "Segmentar es diferenciar un producto de la competencia. Esto sucede cuando tenemos productos nuevos y los queremos vender en mercados existentes.", "respuesta": false, 
     "explicacion": ". Eso es diferenciación o desarrollo de producto; segmentar es dividir el mercado en grupos homogéneos."},
    {"texto": "La queja de un cliente es una oportunidad para mejorar la falta de calidad del producto.", "respuesta": true, 
     "explicacion": ". Las quejas son una fuente de mejora continua."},
    {"texto": "La elasticidad de la demanda es la variación porcentual de la cantidad demandada de un bien cuando varía su precio en un 1%.", "respuesta": true, 
     "explicacion": ". Es la definición exacta de elasticidad precio de la demanda."},
    {"texto": "Las licitaciones y concursos de servicios son estrategias competitivas para la fijación de precios.", "respuesta": false, 
     "explicacion": ". Son procedimientos de contratación pública, no estrategias de precios."},
    {"texto": "En marketing, los factores del microentorno son la competencia, los proveedores, los intermediarios y los clientes. No así el entorno económico o la política de la comunidad.", "respuesta": true, 
     "explicacion": ". El entorno económico pertenece al macroentorno."},
    {"texto": "Los productos sustitutivos son aquellos que fabrican nuestra competencia y que nuestros clientes pueden usar para sustituirnos.", "respuesta": true, 
     "explicacion": ". Son productos que satisfacen la misma necesidad."},
    {"texto": "El patrocinio y el merchandising son buenos ejemplos de comunicación push.", "respuesta": false, 
     "explicacion": ". Son más bien ejemplos de comunicación pull (atraer al consumidor final)."},
    {"texto": "Las fábulas y cuentos son un buen ejemplo de recursos de lenguaje publicitario.", "respuesta": true, 
     "explicacion": ". Son recursos narrativos usados en la comunicación publicitaria."},
    {"texto": "Si un anuncio muestra un hombre elegante conduciendo un coche en un entorno serio es un anuncio que nos está usando el recurso publicitario del miedo.", "respuesta": false, 
     "explicacion": ". Usa el recurso de estatus o aspiración, no el miedo."},
    {"texto": "La publicidad efectiva es aquella que su coste por recurso (impacto) es muy bajo.", "respuesta": true, 
     "explicacion": ". Mide la eficiencia del impacto publicitario."},
    {"texto": "Los costes indirectos son los que no tienen relación directa con el producto, pero que son necesarios para que la empresa realice su actividad de forma normal.", "respuesta": true, 
     "explicacion": ". Son costes como administración, limpieza o mantenimiento."},
    {"texto": "El objetivo de la política de comunicación de la empresa debe ser favorecer el lanzamiento de nuevos productos es una inversión estratégica.", "respuesta": true, 
     "explicacion": ". La comunicación estratégica apoya el lanzamiento de nuevos productos."},
    {"texto": "La inversión realizada para que la empresa funcione se le llama sujeto inversor.", "respuesta": false, 
     "explicacion": ". El sujeto inversor es quien realiza la inversión, no la inversión en sí."},
    {"texto": "El fondo de provisión no o neceseres es una financiación de origen interno.", "respuesta": true, 
     "explicacion": ". Las provisiones son recursos internos generados por la empresa."},
    {"texto": "Las provisiones están formadas por la depreciación del inmovilizado en su proceso de producción.", "respuesta": false, 
     "explicacion": ". Eso es amortización; las provisiones cubren riesgos o gastos futuros probables."}

];

// --- FRASES DE ÁNIMO ---
const frases_animo = [
  "¡Muy bien amor! 😎",
  "¡Eso es, perfecto, te camelo caramelo! 🔥",
  "¡Ole tú huevos! 💪",
  "¡Exacto, estás on fire tia! 🚀",
  "¡Muy bien pensado tronca! 🧠",
  "¡Qué máquina eres! 😍",
  "¡Correcto, así se hace! 👏",
  "¡Te lo sabes de memoria ya! 💥"
];

let i = 0;
let puntuacion = 0;

// --- FUNCIONES ---
function mostrarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  msg.textContent = texto;
  chat.appendChild(msg);
  chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" });
}

function responder(respuestaUsuario) {
  if (!preguntas[i]) return;

  mostrarMensaje(respuestaUsuario ? "✔️ Verdadero" : "❌ Falso", "user");

  if (respuestaUsuario === preguntas[i].respuesta) {
    puntuacion++;
    mostrarMensaje(frases_animo[Math.floor(Math.random() * frases_animo.length)], "bot");
  } else {
    mostrarMensaje("❌ Incorrecto. " + preguntas[i].explicacion, "bot");
  }

  i++;
  if (i < preguntas.length) {
    setTimeout(() => {
      mostrarMensaje(preguntas[i].texto, "bot");
    }, 700);
  } else {
    setTimeout(() => {
      mostrarMensaje(`🏁 Has acertado ${puntuacion} de ${preguntas.length} preguntas. 💡 ¡Sigue practicando, que vas de lujo!`, "bot");
      document.getElementById("btnV").disabled = true;
      document.getElementById("btnF").disabled = true;
    }, 800);
  }
}

// --- FUNCIÓN PARA MEZCLAR ---
function mezclarPreguntas(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- ARRANQUE SEGURO ---
document.addEventListener("DOMContentLoaded", () => {
  mezclarPreguntas(preguntas);
  i = 0;
  puntuacion = 0;

  mostrarMensaje("🌻🌻🌻🌻 Bienvenida a la practica del parcial de COE del año pasado🌻🌻🌻🌻! 💬", "bot");
  setTimeout(() => {
    mostrarMensaje(preguntas[i].texto, "bot");
  }, 500);

  document.getElementById("btnV").onclick = () => responder(true);
  document.getElementById("btnF").onclick = () => responder(false);
});






