function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value) / 100; // Convertir a metros
  const resultado = document.getElementById('resultado');

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.textContent = "Por favor ingresa valores válidos.";
    resultado.style.color = "red";
    return;
  }

  const imc = peso / (altura * altura);
  let mensaje = `Tu IMC es ${imc.toFixed(2)} - `;

  if (imc < 18.5) {
    mensaje += "Estas en los huesitos";
  } else if (imc < 24.9) {
    mensaje += "Persona normal";
  } else if (imc < 29.9) {
    mensaje += "creo que comes mucho";
  } else {
    mensaje += "Amigo estas como ballena";
  }

  resultado.textContent = mensaje;
  resultado.style.color = "#333";
}
