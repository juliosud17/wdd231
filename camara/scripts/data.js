const ano = new Date().getFullYear();

const elemento = document.getElementById("anoatual");

elemento.textContent = ano;


const elementoDataModificacao = document.getElementById("dataModificacao");

elementoDataModificacao.textContent = document.lastModified;
