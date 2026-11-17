// 1. nomes do topo
const urlMembros = 'dados/membros.json';
const areaDestaques = document.querySelector('#destaques');

// 2. a busca (mesmo formato do apiFetch do clima)
async function obterDestaques() {
  try {
    const resposta = await fetch(urlMembros);
    if (resposta.ok) {
      const dados = await resposta.json();
      const destaques = sortearDestaques(dados.empresas);
      exibirDestaques(destaques);
    } else {
      throw Error(await resposta.text());
    }
  } catch (erro) {
    console.log(erro);
  }
}

function sortearDestaques(empresas) {
  const elegiveis = empresas.filter((empresa) => empresa.nivel >= 2);
  const destaques = [];

  for (let i = 0; i < 3; i++) {
    const posicao = Math.floor(Math.random() * elegiveis.length);
    const sorteada = elegiveis.splice(posicao, 1)[0];
    destaques.push(sorteada);
  }

  return destaques;
}

function nomeDoNivel(nivel) {
  if (nivel === 3) {
    return "Ouro";
  } else {
    return "Prata";
  }
}

const exibirDestaques = (empresas) => {
    empresas.forEach((empresa) => {
        let cartao = document.createElement('section');
        let nomeEmpresa = document.createElement('h3');
        let imagem = document.createElement('img');
        let telefone = document.createElement('p');
        let site = document.createElement('a');
        let endereco = document.createElement('p');
        let nivel = document.createElement('p');

        nomeEmpresa.textContent = empresa.nome;

        imagem.setAttribute('src', `imagens/${empresa.imagem}`);
        imagem.setAttribute('alt', `Imagem da empresa ${empresa.nome}`);
        imagem.setAttribute('loading','lazy');
        imagem.setAttribute('width', '400');
        imagem.setAttribute('height','300');
        
        nivel.textContent = `Nível: ${nomeDoNivel(empresa.nivel)}`;
        telefone.textContent = empresa.telefone;
        endereco.textContent = empresa.endereco;
        site.setAttribute('href', empresa.site);
        site.textContent = 'Visitar site';
        site.setAttribute('aria-label', `Visitar site de ${empresa.nome}`);
        site.setAttribute('target', '_blank');
        site.setAttribute('rel', 'noopener noreferrer');

        cartao.appendChild(nomeEmpresa);
        cartao.appendChild(imagem);
        cartao.appendChild(nivel);
        cartao.appendChild(telefone);
        cartao.appendChild(endereco);
        cartao.appendChild(site);


        areaDestaques.appendChild(cartao);
    });

}

// 4. a chamada
obterDestaques();
