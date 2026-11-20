const modalNp = document.querySelector("#modal-np");
const abrirNp = document.querySelector("#abrir-np");
const fecharNp = modalNp.querySelector(".fechar-modal");

const modalBronze = document.querySelector("#modal-bronze");
const abrirBronze = document.querySelector("#abrir-bronze");
const fecharBronze = modalBronze.querySelector(".fechar-modal");

const modalPrata = document.querySelector("#modal-prata");
const abrirPrata = document.querySelector("#abrir-prata");
const fecharPrata = modalPrata.querySelector(".fechar-modal");

const modalOuro = document.querySelector("#modal-ouro");
const abrirOuro = document.querySelector("#abrir-ouro");
const fecharOuro = modalOuro.querySelector(".fechar-modal");

abrirNp.addEventListener("click", () => modalNp.showModal());
fecharNp.addEventListener("click", () => modalNp.close());

abrirBronze.addEventListener("click", () => modalBronze.showModal());
fecharBronze.addEventListener("click", () => modalBronze.close());

abrirPrata.addEventListener("click", () => modalPrata.showModal());
fecharPrata.addEventListener("click", () => modalPrata.close());

abrirOuro.addEventListener("click", () => modalOuro.showModal());
fecharOuro.addEventListener("click", () => modalOuro.close());

modalNp.addEventListener("click", (evento) => {
  if (evento.target === modalNp) {
    modalNp.close();
  }
});

modalBronze.addEventListener("click", (evento) => {
  if (evento.target === modalBronze) {
    modalBronze.close();
  }
});

modalPrata.addEventListener("click", (evento) => {
  if (evento.target === modalPrata) {
    modalPrata.close();
  }
});

modalOuro.addEventListener("click", (evento) => {
  if (evento.target === modalOuro) {
    modalOuro.close();
  }
});