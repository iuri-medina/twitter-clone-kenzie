const textarea = document.querySelector('textarea');
const feed = document.querySelector('.conteudoPrincipal__listaTweets');
const tweetar = document.querySelector('button');
tweetar.disabled = true;
const homeButton = document.querySelector('.conteudoPrincipal__titulo');
const logo = document.querySelector('.cabecalho__logo');

textarea.addEventListener('keydown', () => {
    if(textarea.value) {
        tweetar.disabled = false;
    } else {
        tweetar.disabled = true;
    }
})

function pegarTweet(event) {
    event.preventDefault();
    if(!textarea.value) {
        tweetar.disabled = true;
        return false;
    } 
    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea); 
};

homeButton.addEventListener('click', () => {
    document.location.reload();
});

logo.addEventListener('click', () => {
    document.location.reload();
});

tweetar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto) {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    const tweet = {
        nome: 'Iuri',
        foto: './assets/img/minhaFotoPerfil.png',
        usuario: '@iurimedina_',
        texto: tweetTexto,
        tempo: `${hora}:${min}`
    }
    listarTweet(tweet)
}

function listarTweet(tweet) {

    const {nome, foto, usuario, texto, tempo} = tweet;

    let li = document.createElement('li');
    li.classList.add('conteudoPrincipal__tweet')
    let img = document.createElement('img');
    img.src = foto
    img.classList.add('tweet__fotoPerfil')
    let div = document.createElement('div');
    div.classList.add('tweet__conteudo')
    let h2 = document.createElement('h2');
    h2.innerText = nome + ' '
    let span = document.createElement('span');
    span.innerText = `${usuario}  ${tempo}`
    let p = document.createElement('p');
    p.innerText = texto
    

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    li.appendChild(img);
    li.appendChild(div);

    feed.appendChild(li);
    textarea.value = ''
}