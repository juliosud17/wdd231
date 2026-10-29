const botaodenav = document.querySelector("#botao-de-nav");
const barraNavegacao = document.querySelector("#barra-navegacao");

botaodenav.addEventListener('click', () => {
    botaodenav.classList.toggle("exibir");
    barraNavegacao.classList.toggle("exibir");

})

const ano = new Date().getFullYear();

const elemento = document.getElementById("anoatual");

elemento.textContent = ano;


const elementoDataModificacao = document.getElementById("dataModificacao");

elementoDataModificacao.textContent = document.lastModified;
