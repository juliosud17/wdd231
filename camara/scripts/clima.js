const tempAtual = document.querySelector('#temperatura');
const iconeDoClima = document.querySelector('#icone-do-clima');
const descrDaLegenda = document.querySelector('#tempo-atual figcaption');
const previsao = document.querySelector('#previsao-tempo');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-24.00&lon=-46.44&units=metric&appid=6fac6d12172dc43dacac2952d5f12c73&lang=pt_br'; 
const urlPrevisao = 'https://api.openweathermap.org/data/2.5/forecast?lat=-24.00&lon=-46.44&units=metric&appid=6fac6d12172dc43dacac2952d5f12c73&lang=pt_br';


async function apiFetch() {
  try {
    const resposta = await fetch(url);
    if (resposta.ok) {
      const dados = await resposta.json();
      mostrarResultados(dados);
    } else {
      throw Error(await resposta.text());
    }
  } catch (erro) {
    console.log(erro);
  }
}
function mostrarResultados(dados) {
  tempAtual.innerHTML = `${Math.round(dados.main.temp)}&deg;C`;
  const iconesrc = `https://openweathermap.org/img/w/${dados.weather[0].icon}.png`;
  let descr = dados.weather[0].description;
  iconeDoClima.setAttribute('src', iconesrc);
  iconeDoClima.setAttribute('alt', descr);
  descrDaLegenda.textContent = descr;
}

async function buscarPrevisao() {
  try {
    const resposta = await fetch(urlPrevisao);
    if (resposta.ok) {
      const dados = await resposta.json();
      mostrarPrevisao(dados);
    } else {
      throw Error(await resposta.text());
    }
  } catch (erro) {
    console.log(erro);
  }
}

function mostrarPrevisao(dados) {
  const dias = [dados.list[8], dados.list[16], dados.list[24]]; 

  dias.forEach((dia) => {
    const nomeDia = new Date(dia.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long' });
    const linha = document.createElement('p');
    linha.textContent = `${nomeDia}: ${Math.round(dia.main.temp)}°C`;
    previsao.appendChild(linha);
  });
}

apiFetch();
buscarPrevisao();

