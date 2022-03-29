    const id = document.getElementById('exercicios');
    const pId = document.getElementById('corTexto');
    const body = document.body
function backColor() {
    const backColors = document.createElement('input');
    backColors.id = 'corFundo';
    backColors.type = "color";
    id.appendChild(backColors);
}
backColor();
let cor = document.getElementById('corFundo')
function bodyBack (event){
    body.style.backgroundColor = event.target.value
    localStorage.setItem("cor", event.target.value);
}
cor.addEventListener('input', bodyBack);
function Paragrafo() {
    const paragrafos = document.createElement('input');
    paragrafos.id = 'pCor';
    paragrafos.type = 'color';
    id.appendChild(paragrafos)
}Paragrafo();
const paraCor = document.getElementById('pCor')
function ParagrafoCor(event){
    pId.style.color = event.target.value
}
paraCor.addEventListener('input', ParagrafoCor);

let fbgc = localStorage.getItem('cor');
body.style.backgroundColor = fbgc;