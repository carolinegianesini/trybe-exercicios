const soma = require('./sum');

test('Verifica se a soma de 1 e 2 é 3', () => {
    expect(soma(1,2)).toBe(3);
})