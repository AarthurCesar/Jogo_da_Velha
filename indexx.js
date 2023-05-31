const container = document.getElementById("container");
const rulesToSuccess = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

let letra = "X"; // Variável global para acompanhar a letra atual

function joga(element) {
  const click = element.innerHTML;
  if (click) {
    alert("Opa, este quadrado já foi escolhido!");
    return; // Retorna caso o quadrado já tenha sido escolhido
  }

  element.innerHTML = letra;
  element.style.color = letra === "X" ? "red" : "blue";

  if (verificarVitoria()) {
    setTimeout(() => {
      alert(`(${letra}) GANHOU`);
      limpa();
    }, 5); // Exibe o alerta após 500ms
    return; // Interrompe a função caso haja uma vitória
  }

  if (letra === "X") {
    letra = "O";
  } else {
    letra = "X";
  }
}

function verificarVitoria() {
  for (const rule of rulesToSuccess) {
    const [a, b, c] = rule.map(
      (caixa) => document.getElementById(`caixa${caixa}`).innerHTML
    );

    if (a === b && b === c && a !== "") {
      return true; // Retorna verdadeiro se houver uma sequência vencedora
    }
  }

  return false; // Retorna falso se nenhuma sequência vencedora for encontrada
}

function limpa() {
  const caixas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  caixas.forEach((caixa) => {
    const element = document.getElementById(`caixa${caixa}`);
    element.innerHTML = "";
    element.style.color = ""; // Remove a cor do texto
  });
}

function resetarPagina() {
  location.reload();
}

let isBlack = false;

function changeBackground() {
  const body = document.body;
  isBlack = !isBlack;
  if (isBlack) {
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "#444444";
  }
}
