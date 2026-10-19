// Itt hivatkozz az elemekre, rendeld hozzá az eseménykezelőt,
const stilus = document.querySelector('#stilus')
const valasztott = document.querySelector('#valasztott')
var title= document.querySelector('title')
stilus.addEventListener('change',listaChange)
// és írd meg a saját függvényedet!
function listaChange(){

    valasztott.textContent=stilus.value
    title.textContent=`${stilus.value}-Zenei stílusválasztó`
    //document.title=stilus.value
}