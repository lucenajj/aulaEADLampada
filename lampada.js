function ligarOn(){
document.getElementById('off').src='on.jpg'

}

function desligarOff(){
    document.getElementById('off').src='off.jpg'

}

function piscarLuz(){
var intervalo = 0
var contador = 0

while(contador < 100){
    intervalo += 300
    setTimeout("document.getElementById('off').src='on.jpg'", intervalo) 
    intervalo+= 300
    setTimeout("document.getElementById('off').src='off.jpg'", intervalo)
    contador++
}
}