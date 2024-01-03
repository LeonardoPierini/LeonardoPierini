
// variaveis
const turnOff = document.getElementById('turnOff')
const turnOn = document.getElementById('turnOn')
const lamp = document.getElementById('lamp')
const myelement = document.getElementById('light')


// ligar e desligar lampada
turnOn.addEventListener('click', lampOn) 
turnOff.addEventListener('click',lampOff)


// quebra a lampada
lamp.addEventListener('dblclick',lampbroken)


// hover da lamnpada
lamp.addEventListener('mouseover',lampOn)
lamp.addEventListener('mouseleave',lampOff)
    

// função que verifica se a lâmpada esta quebrada
function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1
}



// função que liga a lampada
function lampOn(){
    if(!isLampBroken()){
          lamp.src = '../imgs/ligada.jpg'
        
    }
   
}


// funçaão que desliga a lampada
function lampOff(){
    if(!isLampBroken()){
        lamp.src = '../imgs/desligada.jpg'
}
    }
    
    
// função que quebra a lampada
function lampbroken(){
    lamp.src = '../imgs/quebrada.jpg'
}


