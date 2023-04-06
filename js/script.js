const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const calcularBtn = document.getElementById("calcular");
const promedioEl = document.getElementById("promedio");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); 


  const n1 = parseFloat(nota1.value);
  const n2 = parseFloat(nota2.value);
  const n3 = parseFloat(nota3.value);


  const notas = {
    nota1: n1,
    nota2: n2,
    nota3: n3
  };


  localStorage.setItem("notas", JSON.stringify(notas));


  const promedio = (n1 + n2 + n3) / 3;


  promedioEl.textContent = `El promedio es ${promedio.toFixed(2)}`;
});


window.addEventListener("load", () => {
  const notasGuardadas = localStorage.getItem("notas");

  if (notasGuardadas !== null) {
    const notas = JSON.parse(notasGuardadas);
    nota1.value = notas.nota1;
    nota2.value = notas.nota2;
    nota3.value = notas.nota3;

    const promedio = (notas.nota1 + notas.nota2 + notas.nota3) / 3;
    promedioEl.textContent = `El promedio anterior fue ${promedio.toFixed(2)}`;
  }
});

