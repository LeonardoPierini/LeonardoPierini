var sec = 0;
var min = 0;
var hr = 0;
var interval;

function start() {
    // Verifica se o cronômetro já está em execução
    if (!interval) {
        time();
        interval = setInterval(time, 1000);
    }
}

function pausar() {
    clearInterval(interval);
    interval = null; // Define interval como nulo para indicar que o cronômetro está parado
}

function zerar() {
    clearInterval(interval);
    interval = null; // Define interval como nulo ao zerar o cronômetro
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById('time').innerText = '00:00:00';
}

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit);
    } else {
        return (digit);
    }
}

function time() {
    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
        if (min == 60) {
            hr++;
            min = 0;
        }
    }
    document.getElementById('time').innerText = twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(sec);
}
