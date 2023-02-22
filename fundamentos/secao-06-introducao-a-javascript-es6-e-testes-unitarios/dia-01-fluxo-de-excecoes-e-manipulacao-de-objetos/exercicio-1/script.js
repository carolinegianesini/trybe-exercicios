const pessoaEstudante = {};

function adicionaChave(objeto, novaChave, novoValor) {
  objeto[novaChave] = novoValor;
}

const chave1 = 'nome';
const nome = 'Caroline Gianesini';


const chave2 = 'email';
const email = 'caroline.gianesini@gmail.com';

const chave3 = 'telefone';
const telefone = '51980584823';

const chave4 = 'github';
const github = 'https://carolinegianesini.github.io/';

const chave5 = 'linkedin';
const linkedin = 'linkedin';

adicionaChave(pessoaEstudante, chave1, nome);
adicionaChave(pessoaEstudante, chave2, email);
adicionaChave(pessoaEstudante, chave3, telefone);
adicionaChave(pessoaEstudante, chave4, github);
adicionaChave(pessoaEstudante, chave5, linkedin);

console.log(pessoaEstudante);








