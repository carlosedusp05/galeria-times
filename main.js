'use strict'
function criarImagem(Imagem) {
    const galeria = document.getElementById('galeria')
    const container = document.createElement('div')
    const img = document.createElement('img')
    const nome = document.createElement('nome')

    img.src = Imagem.url
    img.alt = Imagem.nome
    nome.textContent = Imagem.nome
    nome.classList.add('nome')

    galeria.appendChild(img)
    galeria.appendChild(nome)
    galeria.appendChild(container)
}

function carregarImagens (){
    const imagens = [
        {
            nome: 'Atalanta',
            url: './img/atalanta.png'
        },
        {
            nome: 'Sevilla',
            url: './img/sevilla.png'
        },
        {
            nome: 'Wolves',
            url: './img/wolves.png'
        },
        {
            nome: 'Milan',
            url: './img/milan.png'
        },
        {
            nome: 'Real Madrid',
            url: './img/real-madrid.png'
       },
       {
            nome: 'Internazionale',
            url: './img/internazionale.png'
        },
        {
            nome: 'Chelsea',
            url: './img/chelsea.png'
       },
       {
            nome: 'Benfica',
            url: './img/benfica.png'
        },
        {
            nome: 'Bayern',
            url: './img/bayern.png'
       },
       {
            nome: 'Barcelona',
            url: './img/barcelona.png'
        }
    ]
    imagens.forEach(criarImagem)
}

carregarImagens() 