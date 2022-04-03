const rgbParagraph = document.querySelector('#rgb-color');
const test = document.querySelector('#title');
const balls = document.querySelectorAll('.ball');
const result = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game');
const scorePoints = document.querySelector('#score') 

// FUNCAO CRIA NUMERO ALEATORIO
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min)) + min;
}

// FUNCAO CRIA SESSAO RGB ALEATORIA
function createRgb() {
  getRandomInt(0, 3);
  number1 = number;
  getRandomInt(0, 6);
  number2 = number;
  getRandomInt(0, 6);
  number3 = number;
  completeRgb = `${number1}${number2}${number3}`;
}

// CRIA RGB COMPLETO sem o 'rgb' no começo
function creatCompleteRgb() {
  let stringRgb = '(';
  createRgb();
  stringRgb += `${completeRgb},`;
  createRgb();
  stringRgb += `${completeRgb},`;
  createRgb();
  stringRgb += `${completeRgb})`;
  completeString = stringRgb;
}

// SETA O RGB INICIAL CORRTO
function initial() {
  creatCompleteRgb();
  result.innerHTML = 'Escolha uma cor';
  rgbParagraph.innerHTML = completeString;
}

// DA CORES ALEATORIAS PRA TODAS AS BALLS
function colorToYou() {
  for (let i = 0; i < balls.length; i += 1) {
    let completeColor = 'rgb';
    creatCompleteRgb();
    completeColor += completeString;
    balls[i].style.backgroundColor = completeColor;
  }
}

colorToYou();

initial();

// DA A COR CERTA PRA UMA DAS BOLAS
function theRightOne() {
  theRight = balls[Math.floor((Math.random() * balls.length))];
  theRight.style.backgroundColor = `rgb${rgbParagraph.innerHTML}`;
  rightColor = theRight.style.backgroundColor;
}

theRightOne();

// REVELA RESULTADO
let inicial = 0;
function revelaAcerto(clickedBall) {
  atualColor = clickedBall.target.style.backgroundColor
  if(atualColor !== rightColor){
    inicial -= 1;
    scorePoints.innerHTML = inicial;
    console.log(atualColor);
    console.log(rightColor);
    result.innerText = 'Errou! Tente novamente!';

  } else {
    inicial += 3;
    scorePoints.innerHTML = inicial;
    console.log(rightColor);
    console.log(atualColor);
    replay();
    result.innerText = 'Acertou!'
  }
}

for (let i = 0; i < balls.length; i += 1) {
  balls[i].addEventListener('click', revelaAcerto);
}

// REINICIAR JOGO

function resetGame(){
  creatCompleteRgb();
  initial();
  colorToYou();
  theRightOne();
  creatCompleteRgb();
  inicial = 0;
  scorePoints.innerHTML = 0;
}

resetButton.addEventListener('click', resetGame);

// MARCA O SCORE

function scoreMark(){
  realScore = 0;
  scorePoints.innerHTML = realScore;
}

scoreMark();

function replay(){
  creatCompleteRgb();
  initial();
  colorToYou();
  theRightOne();
  creatCompleteRgb();
}