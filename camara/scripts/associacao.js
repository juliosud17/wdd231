// Preenche o campo oculto com a data e a hora em que a página foi carregada.
const campoTimestamp = document.getElementById("timestamp");

campoTimestamp.value = new Date().toLocaleString("pt-BR");
