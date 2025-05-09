document.addEventListener("DOMContentLoaded", () => {
const inputEmail = document.getElementById("gmail");
const inputSenha = document.getElementById("senha");
const tela = document.getElementById("tela");

let interagiu = false;

inputEmail.addEventListener("focus", () => {
tela.classList.remove("descer");
tela.classList.add("subir");
interagiu = true;
});
1
inputSenha.addEventListener("focus", () => {
// Só sobe se ainda não tiver subido
if (!tela.classList.contains("subir")) {
tela.classList.remove("descer");
tela.classList.add("subir");
}
interagiu = true;
});

const verificarFora = () => {
setTimeout(() => {
const focoAtual = document.activeElement;
if (
focoAtual !== inputEmail &&
focoAtual !== inputSenha &&
interagiu
) {
tela.classList.remove("subir");
tela.classList.add("descer");
interagiu = false;
}
}, 0);
};

inputEmail.addEventListener("blur", verificarFora);
inputSenha.addEventListener("blur", verificarFora);
});

const tela = document.getElementById("tela");
const input1 = document.getElementById("gmail");
const input2 = document.getElementById("senha");

let alturaAnterior = window.innerHeight;

// Sobe a tela quando o input1 recebe foco
input1.addEventListener("focus", () => {
tela.classList.remove("descer");
tela.classList.add("subir");
});

// Sobe a tela quando input2 recebe foco, mas só se estiver embaixo
input2.addEventListener("focus", () => {
if (!tela.classList.contains("subir")) {
tela.classList.remove("descer");
tela.classList.add("subir");
}
});

// Detecta quando o teclado foi fechado
window.addEventListener("resize", () => {
const alturaAtual = window.innerHeight;

if (alturaAtual > alturaAnterior) {
// O teclado foi fechado (altura aumentou)
if (tela.classList.contains("subir")) {
tela.classList.remove("subir");
tela.classList.add("descer");
}
}

// Atualiza a altura anterior para comparar em futuros resize
alturaAnterior = alturaAtual;
});



function Sair1(event) {
  event.preventDefault();
  const tela = document.getElementById("tela");
  const overlay = document.getElementById("fadeOverlay");

  tela.classList.add("sair");

  tela.addEventListener("animationend", function aoFinalSair() {
    tela.removeEventListener("animationend", aoFinalSair);

    overlay.classList.add("fadeInOverlay");

    overlay.addEventListener("animationend", function aoFinalOverlay() {
      overlay.removeEventListener("animationend", aoFinalOverlay);
      window.location.href = "link1.html";
    });
  });
}

function Sair2(event) {
  const tela = document.getElementById("tela");

  tela.classList.add("sair");
  tela.addEventListener("animationend", function aoFinalSair() {

      window.location.href = "index2.html";
    });
  };