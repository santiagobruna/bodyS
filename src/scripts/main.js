window.sr = ScrollReveal({reset: true});

sr.reveal('.area-1', {
duration: 3000});

sr.reveal('.area-2', {
rotate:{x:0, y:100, z:0},
duration: 3000});

sr.reveal('.area-3', {duration: 3000});

let elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach((duvida) => {
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa');
    })
})