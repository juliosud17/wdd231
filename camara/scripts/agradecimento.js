const parametros = new URLSearchParams(window.location.search);

document.getElementById("res-nome").textContent = parametros.get("nome");
document.getElementById("res-sobrenome").textContent = parametros.get("sobrenome");
document.getElementById("res-email").textContent = parametros.get("email");
document.getElementById("res-celular").textContent = parametros.get("celular");
document.getElementById("res-organizacao").textContent = parametros.get("organizacao");
document.getElementById("res-timestamp").textContent = parametros.get("timestamp");



