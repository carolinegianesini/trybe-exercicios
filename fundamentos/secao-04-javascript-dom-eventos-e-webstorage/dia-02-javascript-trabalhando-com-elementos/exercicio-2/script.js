const pai = document.getElementById('pai');
const irmaoDoElementoQueVoceEsta = document.createElement('section');
irmaoDoElementoQueVoceEsta.id = 'irmaoDoElementoQueVoceEsta';
pai.appendChild(irmaoDoElementoQueVoceEsta);

const filhoDoElementoAtual = document.createElement('section');
filhoDoElementoAtual.id = 'filhoDoElementoAtual';
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(filhoDoElementoAtual);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

const terceiroFilho = primeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
