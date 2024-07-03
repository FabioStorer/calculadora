function soma (num1, num2) {
    if (num1 == NaN || num2 == NaN) {
        console.log('Isto não é um número. Digite por favor um número: ');
    } else {
        let resultado = num1 + num2;
        console.log('O resultado da soma entre', num1, 'e', num2, 'é de', resultado, '.');
    }
};

function subtracao (numero1, numero2) {
    if (numero1 == NaN || numero2 == NaN) {
        console.log('Isto não é um número. Digite por favor um número: ');
    } else {
        let resultado = numero1 - numero2;
        console.log('O resultado da subtração entre', numero1, 'e', numero2, 'é de', resultado, '.');
    }
};

function multiplicacao (numero1, numero2) {
    if (numero1 == NaN || numero2 == NaN) {
        console.log('Isto não é um número. Digite por favor um número: ');
    } else {
        let resultado = numero1 * numero2;
        console.log('O resultado da multiplicação entre', numero1, 'e', numero2, 'é de', resultado, '.');
    }
};

function divisao (numero1, numero2) {
    if (numero1 == NaN || numero2 == NaN) {
        console.log('Isto não é um número. Digite por favor um número: ');
    } else {
        let resultado = numero1 / numero2;
        console.log('O resultado da divisão entre', numero1, 'e', numero2, 'é de', resultado, '.');
    }
};

function porcentagem (numero1, numero2) {
    if (numero1 == NaN || numero2 == NaN) {
        console.log('Isto não é um número. Digite por favor um número: ');
    } else {
        let resultado = numero1 / 100;
        console.log(numero2, 'porcento de ', numero1, 'é', resultado, '.');
    }
};

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    porcentagem
};