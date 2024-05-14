// Declaramos variables para almacenar los operandos y la operación actual
let operandoa;
let operandob;
let operacion;

// Inicializamos la calculadora
function init() {
  //  referencias para todos los elementos
  const resultado = document.getElementById("resultado");
  const reset = document.getElementById("reset");
  const suma = document.getElementById("suma");
  const resta = document.getElementById("resta");
  const multiplicacion = document.getElementById("multiplicacion");
  const division = document.getElementById("division");
  const igual = document.getElementById("igual");
  const uno = document.getElementById("uno");
  const dos = document.getElementById("dos");
  const tres = document.getElementById("tres");
  const cuatro = document.getElementById("cuatro");
  const cinco = document.getElementById("cinco");
  const seis = document.getElementById("seis");
  const siete = document.getElementById("siete");
  const ocho = document.getElementById("ocho");
  const nueve = document.getElementById("nueve");
  const cero = document.getElementById("cero");

  //  eventos para cada botón de número para actualizar el resultado en pantalla
  uno.onclick = () => actualizarResultado("1");
  dos.onclick = () => actualizarResultado("2");
  tres.onclick = () => actualizarResultado("3");
  cuatro.onclick = () => actualizarResultado("4");
  cinco.onclick = () => actualizarResultado("5");
  seis.onclick = () => actualizarResultado("6");
  siete.onclick = () => actualizarResultado("7");
  ocho.onclick = () => actualizarResultado("8");
  nueve.onclick = () => actualizarResultado("9");
  cero.onclick = () => actualizarResultado("0");

  //  evento del botón de reset para limpiar la pantalla y los operandos
  reset.onclick = () => resetear();

  // eventos para los botones de operaciones (+, -, *, /)
  suma.onclick = () => setOperacion("+");
  resta.onclick = () => setOperacion("-");
  multiplicacion.onclick = () => setOperacion("*");
  division.onclick = () => setOperacion("/");

  //  evento del botón de igual para realizar la operación y mostrar el resultado
  igual.onclick = () => {
    operandob = resultado.textContent; // Guardamos el segundo operando
    resolver(); // resolver la operacion
  };
}

// Esta función actualiza el contenido del resultado cuando se presiona un número
function actualizarResultado(valor) {
  const resultado = document.getElementById("resultado");
  if (resultado.textContent === "0") {
    // Si el resultado actual es "0", lo reemplazamos por el nuevo valor
    resultado.textContent = valor;
  } else {
    // sino, agregar el nuevo valor al final
    resultado.textContent += valor;
  }
}

// Esta función guarda el primer operando y la operación seleccionada, y limpia la pantalla
function setOperacion(op) {
  operandoa = document.getElementById("resultado").textContent;
  operacion = op;
  limpiar();
}

// Función para limpiar el contenido de la pantalla de resultados
function limpiar() {
  document.getElementById("resultado").textContent = "0";
}

// Función para resetear la calculadora a su estado inicial
function resetear() {
  document.getElementById("resultado").textContent = "0";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

// Función para realizar la operación matemática y mostrar el resultado
function resolver() {
  let res = 0;
  // Dependiendo de la operación seleccionada, se realizama la operación
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear(); // Reseteamos la calculadora para el próximo cálculo
  document.getElementById("resultado").textContent = res; // Mostramos el resultado
}
