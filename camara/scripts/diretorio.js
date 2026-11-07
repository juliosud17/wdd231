const url = 'dados/membros.json';
const cartoes = document.querySelector('#cartoes');
const botaograde = document.querySelector("#botao-grade");
const botaolista = document.querySelector("#botao-lista");

botaograde.addEventListener('click', () => {
    cartoes.classList.add('grade');
    cartoes.classList.remove('lista');
});

botaolista.addEventListener('click', () => {
    cartoes.classList.add('lista');
    cartoes.classList.remove('grade');
});


async function obterDadosDeEmpresas()
{
    const resposta = await fetch(url);
    const dados = await resposta.json();

    exibirEmpresas(dados.empresas);
}

const exibirEmpresas = (empresas) => {
    empresas.forEach((empresa) => {
        let cartao = document.createElement('section');
        let nomeEmpresa = document.createElement('h2');
        let slogan = document.createElement('p');
        let imagem = document.createElement('img');
        let email = document.createElement('p');
        let telefone = document.createElement('p');
        let site = document.createElement('a');

        nomeEmpresa.textContent = empresa.nome;
        slogan.textContent = empresa.slogan;

        imagem.setAttribute('src', `imagens/${empresa.imagem}`);
        imagem.setAttribute('alt', `Imagem da empresa ${empresa.nome}`);
        imagem.setAttribute('loading','lazy');
        imagem.setAttribute('width', '400');
        imagem.setAttribute('height','300');
        
        email.textContent = empresa.email;
        telefone.textContent = empresa.telefone;
        site.setAttribute('href', empresa.site);
        site.textContent = empresa.site; 

        cartao.appendChild(nomeEmpresa);
        cartao.appendChild(slogan);
        cartao.appendChild(imagem);
        cartao.appendChild(email);
        cartao.appendChild(telefone);
        cartao.appendChild(site);


        cartoes.appendChild(cartao);
    });

}

obterDadosDeEmpresas();