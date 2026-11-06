const url = 'https://byui-cse.github.io/cse-ww-program-pt/data/profetas-dos-ultimos-dias.json';
const cartoes = document.querySelector('#cartoes');

async function obterDadosDeProfetas()
{
    const resposta = await fetch(url);
    const dados = await resposta.json();
    // console.table(dados);
    exibirProfetas(dados.profetas);
}
    
const exibirProfetas = (profetas) => {
    profetas.forEach((profeta) => {
        let cartao  = document.createElement('section');
        let nomeCompleto = document.createElement('h2');
        let retrato = document.createElement('img');
        let nascimento = document.createElement('p');
        let localNascimento = document.createElement('p');

        nomeCompleto.textContent = `${profeta.nome} ${profeta.sobrenome}`;
        nascimento.textContent = `Data de Nascimento: ${profeta.nascimento}`;
        localNascimento.textContent = `Local de Nascimento: ${profeta.localNascimento}`;

        retrato.setAttribute('src', profeta.urlImagem);
        retrato.setAttribute('alt', `Retrato de ${profeta.nome} ${profeta.sobrenome}`);
        retrato.setAttribute('loading','lazy');
        retrato.setAttribute('width', '340');
        retrato.setAttribute('height','440');

        cartao.appendChild(nomeCompleto);
        cartao.appendChild(nascimento);
        cartao.appendChild(localNascimento);
        cartao.appendChild(retrato);


        cartoes.appendChild(cartao);

        

    });

}


obterDadosDeProfetas();