const pixelBoard = document.querySelector('#pixel-board');

const arrayCores = document.querySelectorAll('.color');

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
  completeString = 'rgb' + stringRgb;
}

creatCompleteRgb();
const cor1 = completeString;

creatCompleteRgb();
const cor2 = completeString;

creatCompleteRgb();
const cor3 = completeString;

// PARTE CRIADO DO QUADRO

function criaQuadro(tamanhoQuadro) {
  for (let i = 0; i < tamanhoQuadro; i += 1) {
    const divLinha = document.createElement('div');
    divLinha.classList.add('line');
    pixelBoard.appendChild(divLinha);
  }
  const linhas = document.querySelectorAll('.line');
  for (let x = 0; x < linhas.length; x += 1) {
    const linhaTurn = linhas[x];
    for (let zindex = 0; zindex < tamanhoQuadro; zindex += 1) {
      const divColuna = document.createElement('div');
      divColuna.classList.add('pixel');
      linhaTurn.appendChild(divColuna);
    }
  }
}

criaQuadro(5);

// DECIDINDO TAMANHO DO QUADRO

const generateButton = document.querySelector('#generate-board');
const generateInput = document.querySelector('#board-size');

function decideTamanhoQuadro(evento) {
  if (generateInput.value === '' || generateInput.value === ' ') {
    alert('Board inválido!');
  } else if (parseInt(generateInput.value, 10) > 20) {
    evento.preventDefault();
    alert('Board inválido! O máximo é 20');
    pixelBoard.innerHTML = '';
    criaQuadro(20);
  } else if (parseInt(generateInput.value, 10) < 5) {
    evento.preventDefault();
    alert('Board inválido! O mínimo é 5');
    pixelBoard.innerHTML = '';
    criaQuadro(5);
  } else {
    pixelBoard.innerHTML = '';

    criaQuadro(generateInput.value);

    const pixels = document.querySelectorAll('.pixel');

    for (let xindex = 0; xindex < pixels.length; xindex += 1) {
      function mudaCorPixel() {
        if (arrayCores[0].classList[2] === 'selected') {
          pixels[xindex].style.backgroundColor = 'white';
        } else if (arrayCores[1].classList[2] === 'selected') {
          pixels[xindex].style.backgroundColor = cor1;
        } else if (arrayCores[2].classList[2] === 'selected') {
          pixels[xindex].style.backgroundColor = cor2;
        } else if (arrayCores[3].classList[2] === 'selected') {
          pixels[xindex].style.backgroundColor = cor3;
        }
      }
      pixels[xindex].addEventListener('click', mudaCorPixel);
      function apagaTudoDenovo() {
        for (let index = 0; index < pixels.length; index += 1) {
          pixels[index].style.backgroundColor = 'white';
        }
      }
    }
  }
  const clearButton = document.querySelector('#clear-board');

  clearButton.addEventListener('click', apagaTudoDenovo);
}

generateButton.addEventListener('click', decideTamanhoQuadro);

// PARTE SELECIONADORA DA

function criaCoresAleatorias() {
  arrayCores[1].style.backgroundColor = cor1;
  arrayCores[2].style.backgroundColor = cor2;
  arrayCores[3].style.backgroundColor = cor3;
}

criaCoresAleatorias();

arrayCores[0].classList.add('selected');

function selecionaPreta() {
  for (let i = 0; i < arrayCores.length; i += 1) {
    arrayCores[i].classList.remove('selected');
  }
  arrayCores[0].classList.add('selected');
}

arrayCores[0].addEventListener('click', selecionaPreta);

function selecionaVermelho() {
  for (let i = 0; i < arrayCores.length; i += 1) {
    arrayCores[i].classList.remove('selected');
  }
  arrayCores[1].classList.add('selected');
}

arrayCores[1].addEventListener('click', selecionaVermelho);

function selecionaAzul() {
  for (let i = 0; i < arrayCores.length; i += 1) {
    arrayCores[i].classList.remove('selected');
  }
  arrayCores[2].classList.add('selected');
}

arrayCores[2].addEventListener('click', selecionaAzul);

function selecionaVerde() {
  for (let i = 0; i < arrayCores.length; i += 1) {
    arrayCores[i].classList.remove('selected');
  }
  arrayCores[3].classList.add('selected');
}

arrayCores[3].addEventListener('click', selecionaVerde);

// ADICIONANDO EVENTO E MUDANÇA DE COR
const pixels = document.querySelectorAll('.pixel');

for (let xindex = 0; xindex < pixels.length; xindex += 1) {
  function mudaCorPixel() {
    if (arrayCores[0].classList[2] === 'selected') {
      pixels[xindex].style.backgroundColor = 'white';
    } else if (arrayCores[1].classList[2] === 'selected') {
      pixels[xindex].style.backgroundColor = cor1;
    } else if (arrayCores[2].classList[2] === 'selected') {
      pixels[xindex].style.backgroundColor = cor2;
    } else if (arrayCores[3].classList[2] === 'selected') {
      pixels[xindex].style.backgroundColor = cor3;
    }
  }
  pixels[xindex].addEventListener('click', mudaCorPixel);
}

// CRIANDO BORRACHA
const clearButton = document.querySelector('#clear-board');

function apagaTudo() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', apagaTudo);
