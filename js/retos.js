function ejeUno() {
  var numeroUno = document.getElementById("numeroUno").value;
  var numeroDos = document.getElementById("numeroDos").value;
  var resultado = numeroUno - numeroDos;
  console.log("El resultado de la resta es: " + resultado);
  alert("El resultado de la resta es: " + resultado);
}

function ejeDos() {
  var numeroUno = document.getElementById("numeroUno").value;
  var numeroDos = document.getElementById("numeroDos").value;
  var resultadoResta = numeroUno - numeroDos;
  var resultadoMultiplicacion = numeroUno * numeroDos;
  console.log(
    "El resultado de la resta es: " +
      resultadoResta +
      " y el de la multiplicacion: " +
      resultadoMultiplicacion
  );
  alert(
    "El resultado de la resta es: " +
      resultadoResta +
      " y el de la multiplicacion: " +
      resultadoMultiplicacion
  );
}

function eje3() {
  var numeroUno = document.getElementById("numeroUno").value;
  var numeroDos = document.getElementById("numeroDos").value;
  var aleatorio = aleatorioRango();
  let resultado;
  if (aleatorio < 5) {
    resultado = numeroUno - numeroDos;
  } else {
    resultado = numeroUno * numeroDos;
  }
  console.log("El nuero aleatorio es: " + aleatorio);
  alert("El resultado es: " + resultado);
}

function eje4() {
  var aleatorio = aleatorioRango4();
  aleatorio == 1 ||
  aleatorio == 3 ||
  aleatorio == 5 ||
  aleatorio == 7 ||
  aleatorio == 8 ||
  aleatorio == 10 ||
  aleatorio == 12
    ? alert("El mes es: " + aleatorio + ", por lo tanto tine 31 dias")
    : aleatorio == 4 || aleatorio == 6 || aleatorio == 7 || aleatorio == 11
    ? alert("El mes es: " + aleatorio + ", por lo tanto tiene 30 dias")
    : alert("El mes es 2, por lo tanto tiene 28 dias o 29 si es bisiesto");
}

function aleatorioRango() {
  const MIN = 0;
  const MAX = 10;
  let aleatorio = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
  return aleatorio;
}

function aleatorioRango4() {
  const MIN = 0;
  const MAX = 10;
  let aleatorio = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
  return aleatorio;
}
