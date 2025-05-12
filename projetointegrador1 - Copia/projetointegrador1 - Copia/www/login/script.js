document.addEventListener("DOMContentLoaded", () => {
  const tela = document.getElementById("tela");
  const inputEmail = document.getElementById("gmail");
  const inputSenha = document.getElementById("senha");
  const olho = document.getElementById("olho");

  let interagiu = false;
  let alturaAnterior = window.innerHeight;

  // Função para subir a tela
  function subirTela() {
    if (!tela.classList.contains("subir")) {
      tela.classList.remove("descer");
      tela.classList.add("subir");
    }
  }

  // Função para descer a tela
  function descerTela() {
    if (tela.classList.contains("subir")) {
      tela.classList.remove("subir");
      tela.classList.add("descer");
    }
  }

  // Evento de foco nos inputs
  inputEmail.addEventListener("focus", () => {
    subirTela();
    interagiu = true;
  });

  inputSenha.addEventListener("focus", () => {
    subirTela();
    interagiu = true;
  });

  // Verificar se o foco saiu dos inputs
  const verificarFora = () => {
    setTimeout(() => {
      const focoAtual = document.activeElement;
      if (focoAtual 
        !== inputEmail && focoAtual 
        !== inputSenha && interagiu) {
        descerTela();
        interagiu = false;
      }
    }, 0);
  };

  inputEmail.addEventListener("blur", verificarFora);
  inputSenha.addEventListener("blur", verificarFora);

  // Verifica se o teclado foi fechado (em dispositivos móveis)
  window.addEventListener("resize", () => {
    const alturaAtual = window.innerHeight;
    if (alturaAtual > alturaAnterior) {
      descerTela();
    }
    alturaAnterior = alturaAtual;
  });

  // Alterna visibilidade da senha e sobe tela se necessário
  olho.addEventListener("click", () => {
    if (!tela.classList.contains("subir")) {
      subirTela();
    }
    inputSenha.focus();
    if (inputSenha.type === "password") {
      inputSenha.type = "text";
      olho.classList.remove("mdi-eye");
      olho.classList.add("mdi-eye-off");
    } else {
      inputSenha.type = "password";
      olho.classList.remove("mdi-eye-off");
      olho.classList.add("mdi-eye");
    }
  });

  // Pressionar Enter desce a tela
  inputSenha.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      descerTela();
      e.target.blur(); // opcional
    }
  });

  // Botão Sair1 (vai para link1.html)
  window.Sair1 = function(event) {
    event.preventDefault();
    const overlay = document.getElementById("telaBranca");

    tela.classList.add("sair");

    tela.addEventListener("animationend", function aoFinalSair() {
      tela.removeEventListener("animationend", aoFinalSair);
      overlay.classList.add("telaBrancaIr");

      overlay.addEventListener("animationend", function aoFinalOverlay() {
        overlay.removeEventListener("animationend", aoFinalOverlay);
        window.location.href = "link1.html";
      });
    });
  };

  // Botão Sair2 (vai para criar_conta.html)
  window.Sair2 = function(event) {
    tela.classList.add("sair");
    tela.addEventListener("animationend", function aoFinalSair() {
      window.location.href = "criar_conta.html";
    });
  };
});

