const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intevalId = null


// Localiza o botão clicado e faz o evento acontecer
const trafficLight = (event) => {
    stopAutomatic();
   turnOn[event.target.id]();
} 

//chama os botões em geral
buttons.addEventListener('click', trafficLight)



// contador que adiciona mais um para fazer a mudança
const nextColor = () => {
    if(colorIndex < 2){
        colorIndex++;
    }else{
        colorIndex = 0;
    }
}


// faz a mudança de cor do autoomatico de acordo com as posições
const chargeColor = () => {
    const colors = ['red', 'yellow','green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextColor();

    
}
// Limpa os intervalos de tempo quando clicado
const stopAutomatic = () => {
    clearInterval(intevalId)
}

// Adiciona as imagens das cores do semaforo de acordo com o botão clicado
const turnOn = {
    'red': () => img.src = '../imgs/vermelho.png',
    'yellow': () => img.src = '../imgs/amarelo.png',
    'green': () => img.src = '../imgs/verde.png',
    'automatic': () => intevalId = setInterval(chargeColor, 1000)
    
}