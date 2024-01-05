const Pj = document.getElementById('projeto')
const Cert = document.getElementById('certificado')
const uf = document.getElementById('info')

const Zap = document.getElementById('whats')
const Git = document.getElementById('github')
const Insta = document.getElementById('instagram')


// funções para abrir novos modulos
function newPj(){
    window.location.href = './projetos/projetos.html';
}

function newCert(){
    window.location.href = './Certificados/certificado.html';
}

function newUf(){
    window.location.href = './informacao/info.html';
}


// chamando as funções atarves do click
Pj.addEventListener('click', newPj)

Cert.addEventListener('click', newCert)

uf.addEventListener('click', newUf)





// Funções de chamar contato
function WhatsApp(){

    var linkZap = 'Https://wa.me/5518997237098';

        // Abre o link em uma nova janela ou aba
        window.open(linkZap, '_blank');
}


function GitHub(){

    var linkGithub = 'https://github.com/LeonardoPierini';

        // Abre o link em uma nova janela ou aba
        window.open(linkGithub, '_blank');
}


function Instagram(){

    var linkInsta = 'https://www.instagram.com/leo_pierini?igsh=bHFpZ3A3M2cxbzZw';

        // Abre o link em uma nova janela ou aba
        window.open(linkInsta, '_blank');
}


Zap.addEventListener('click', WhatsApp)

Git.addEventListener('click', GitHub)

Insta.addEventListener('click', Instagram)
