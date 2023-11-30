while (true) {
  gradoC = parseFloat(
    prompt("Escriba la temperatura(C°) que deseas transformar: ")
  );

  if (!isNaN(gradoC)) {
    break;
  }

  console.log("Error: sólo se pueden ingresar números");
}

function calcularTemperatura(gradoC) {
  gradoF = (9 / 5) * gradoC + 32;
  gradoK = gradoC + 273;
  return {
    Fahrenheit: gradoF,
    Kelvin: gradoK,
  };
}

let resultado = calcularTemperatura(gradoC);
console.log("La temperatura en Fahrenheit sería: ", resultado.Fahrenheit);
console.log("La temperatura en Kelvin sería: ", resultado.Kelvin);
