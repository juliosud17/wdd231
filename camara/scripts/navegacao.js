const botaodenav = document.querySelector("#botao-de-nav");
const barraNavegacao = document.querySelector("#barra-navegacao");

botaodenav.addEventListener('click', () => {
    botaodenav.classList.toggle("exibir");
    barraNavegacao.classList.toggle("exibir");

})
