// PARTE QUE ESCREVE O TEXTO NO CONTAINER
const memeGeneratorInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

function containerTextCreator(){

memeText.innerText = memeGeneratorInput.value;
}

memeGeneratorInput.addEventListener('keyup', containerTextCreator);

// COLOCA A IMAGEM NO CONTAINER

const imageGeneratorInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image')

imageGeneratorInput.addEventListener('input', PreviewImage)

function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(imageGeneratorInput.files[0]);

    oFReader.onload = function (oFREvent) {
        memeImage.src = oFREvent.target.result;
    };
};

// PARTE MUDA A BORDA

const containerGeral = document.querySelector('#meme-image-container');

const fireButton = document.querySelector('#fire');

function changeToRed(){
    containerGeral.style.border = '3px dashed red'
}

fireButton.addEventListener('click', changeToRed);

const waterButton = document.querySelector('#water');

function changeToBlue(){
    containerGeral.style.border = '5px double blue'
}

waterButton.addEventListener('click', changeToBlue);

const earthButton = document.querySelector('#earth');

function changeToGreen(){
    containerGeral.style.border = '6px groove green'
}

earthButton.addEventListener('click', changeToGreen);

// PARTE QUE COLOCA A FOTO AUTOMATICA

const meme1Button = document.querySelector('#meme-1');

meme1Button.addEventListener('click', mudaMeme1);

function mudaMeme1(){
    memeImage.src = './imgs/meme1.png'
    console.log(meme1Button.src)
}

const meme2Button = document.querySelector('#meme-2');

meme2Button.addEventListener('click', mudaMeme2);

function mudaMeme2(){
    memeImage.src = './imgs/meme2.png'
    console.log(meme1Button.src)
}

const meme3Button = document.querySelector('#meme-3');

meme3Button.addEventListener('click', mudaMeme3);

function mudaMeme3(){
    memeImage.src = './imgs/meme3.png'
    console.log(meme3Button.src)
}

const meme4Button = document.querySelector('#meme-4');

meme4Button.addEventListener('click', mudaMeme4);

function mudaMeme4(){
    memeImage.src = './imgs/meme4.png'
    console.log(meme4Button.src)
}