/*Pegando contéudo do HTML*/
const mario = document.querySelector('img.Mario');
const cano = document.querySelector('img.pipe');
const nuvens = document.querySelector('img.cloud');
const pontos = document.querySelector('.placar')
const reiniciar = document.querySelector('#reiniciar')
const botao = document.querySelector('#botao');

/*Loops de verificação e pontuação padrão*/
var pontuacao = 0; 
var loop = setInterval(hit, 10);
var placar = setInterval(ponto, 900);//A cada 0.9s faz um ponto 

function pular(){ //Função pra pular
    let posicaoMario = +window.getComputedStyle(mario).bottom.replace("px", '');
    if(posicaoMario == 0){ //Se ele já não estiver pulando
        mario.classList.add('pulo');
        setTimeout(voltar, 500);
    }
}

function voltar(){ //Função pra pousar
    mario.classList.remove('pulo');
}

function hit(){ //Verifica se bateu a cada 10ms
    let posicaoCano = cano.offsetLeft;
    let posicaoMario = +window.getComputedStyle(mario).bottom.replace("px", '');
    let posicaoNuvens = nuvens.offsetLeft;

    if(window.matchMedia("(min-width:601px)").matches){ //Se a tela tiver mais que 600px
        if(posicaoCano <=130 && posicaoMario <100 && posicaoCano >0){
            cano.style.animation = 'none';
            cano.style.left = `${posicaoCano}px`;
            mario.style.animation = 'none';
            mario.style.bottom = `${posicaoMario}px`;
            nuvens.style.animation = 'none';
            nuvens.style.left = `${posicaoNuvens}px`

            mario.src = 'assets/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            reiniciar.style.display = 'flex';

            clearInterval(loop);
            clearInterval(placar);
        }
    }
    else{ //Se a tela tiver 600px ou menos
        if(posicaoCano <= 75 && posicaoMario < 50 && posicaoCano > 0){
            cano.style.animation = 'none';
            cano.style.left = `${posicaoCano}px`;
            mario.style.animation = 'none';
            mario.style.bottom = `${posicaoMario}px`;
            nuvens.style.animation = 'none';
            nuvens.style.left = `${posicaoNuvens}px`;

            mario.src = 'assets/game-over.png';
            mario.style.width = '37px';
            mario.style.marginLeft = '25px';

            reiniciar.style.display = 'flex';

            clearInterval(loop);
            clearInterval(placar);
        }
    }
}

function ponto(){ //Aumenta Pontuação
    pontuacao ++;
    pontos.innerHTML = `<p>Distância: ${pontuacao}KM</p>`
}

function restart(){
    if(window.matchMedia("(min-width:601px)").matches){
        mario.style.width = '160px';
    }
    else{
        mario.style.width = '80px';
    }
    mario.style.bottom = '0px';
    mario.src = 'assets/mario.gif';
    mario.style.marginLeft = '0px';
    mario.style.animation = '';
    cano.style.left = 'auto';
    cano.style.animation = 'animacao-cano 1s infinite linear';
    nuvens.style.left = 'auto';
    nuvens.style.animation = 'animacao-nuvens 20s infinite linear';
    reiniciar.style.display = 'none';
    pontos.innerHTML = `<p>Distância: 0KM</p>`;
    pontuacao = 0;
    loop = setInterval(hit, 10);
    placar = setInterval(ponto, 900);
}

function Start(){
    reiniciar.style.display = 'flex';
    mario.style.animation = 'none';
    cano.style.animation = 'none';
    cano.style.left = '100%';
    clearInterval(loop)
    clearInterval(placar)
}
addEventListener('keydown', pular)
addEventListener('touchstart', pular)