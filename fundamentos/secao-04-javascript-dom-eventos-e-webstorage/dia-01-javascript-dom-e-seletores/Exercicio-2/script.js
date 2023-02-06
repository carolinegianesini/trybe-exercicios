let cabecalho = document.getElementById('header-container');
cabecalho.style.background = 'rgb(0, 176, 105)';

let colunaUrgente = document.getElementsByClassName('emergency-tasks');
colunaUrgente[0].style.background = 'rgb(255, 159, 132)';

let linhasUrgente = document.querySelectorAll('.emergency-tasks h3');
for (let l = 0; l < linhasUrgente.length; l += 1) {
    linhasUrgente[l].style.background = 'rgb(165, 0, 243)';
}

let colunaNaoUrgente = document.getElementsByClassName('no-emergency-tasks');
colunaNaoUrgente[0].style.background = 'rgb(249, 219, 94)';

let linhasNaoUrgente = document.querySelectorAll('.no-emergency-tasks h3');
for (let n = 0; n < linhasNaoUrgente.length; n += 1) {
    linhasNaoUrgente[n].style.background = 'black';
}

let rodape = document.getElementById('footer-container');
rodape.style.background = 'rgb(0, 53, 51)';