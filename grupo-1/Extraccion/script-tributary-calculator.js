const inputs = document.querySelectorAll("input");
const calcular = document.querySelector(".boton");

calcular.addEventListener("click", (event) => {
  event.preventDefault();
  remuneracionNeta();
  jornalNeto();
  vacacionesMensual();
});
function remuneracionNeta() {
  const asignacionFamiliar = +inputs[4].value * 93;
  let valorSueldo = +inputs[5].value + asignacionFamiliar;

  if (valorSueldo > 0) {
    let valor1 = 0;
    let valor2 = 0;
    let valorResultado = 0;
    valor1 = (valorSueldo / 100) * 10;
    valor2 = ((valorSueldo - valor1) / 100) * 1.9335;
    valorResultado = valorSueldo - valor1 - valor2;
    inputs[6].value = valorResultado;
  }
}
function jornalNeto() {
  inputs[7].value = +inputs[6].value / 30;
}
function vacacionesMensual() {
  inputs[10].value = (+inputs[5].value / 360) * 30;
}
