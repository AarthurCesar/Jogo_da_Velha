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

function test() {
  for (rule of rulesToSuccess) {
    let caixasElements = [];

    for (caixa of rule) {
      caixasElements.push(document.getElementById(`caixa${caixa}`).innerHTML);
    }

    const sequence = caixasElements.join("");

    if (sequence === "OOO" || sequence === "XXX") {
      const [linha, coluna, diagonal] = rule;

      if (
        (linha === 1 && coluna === 2 && diagonal === 3) ||
        (linha === 4 && coluna === 5 && diagonal === 6) ||
        (linha === 7 && coluna === 8 && diagonal === 9) ||
        (linha === 1 && coluna === 4 && diagonal === 7) ||
        (linha === 2 && coluna === 5 && diagonal === 8) ||
        (linha === 3 && coluna === 6 && diagonal === 9) ||
        (linha === 1 && coluna === 5 && diagonal === 9) ||
        (linha === 3 && coluna === 5 && diagonal === 7)
      ) {
        if (sequence === "OOO") {
          alert("(O) GANHOU");
        } else {
          alert("(X) GANHOU");
        }
        
        limpa();
        return; // Interrompe a função caso haja uma vitória
      }
    }
  }
}

function limpa() {
  const caixas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  caixas.map(
    (caixa) => (document.getElementById(`caixa${caixa}`).innerHTML = "")
  );
}

letra = "X";
function joga(element) {
  click = element.innerHTML;
  if (click) {
    alert("Opa, este quadrado já foi escolhido!");
  } else {
    element.innerHTML = letra;
    if (letra == "X") {
      letra = "O";
    } else {
      letra = "X";
    }

    test();
  }
}

function resetarPagina() {
  location.reload();
}
