const prompt = require('prompt-sync')();
const funcao = require('./funcoes.js');
let numero1;
let numero2;

console.log(`Olá, eu sou uma calculadora. Está duvidando? Olha só: "2 + 2 é igual a 4!...."
Não soou convincente não é? Pois bem. Vou provar para você de uma maneira melhor.
Vou te mostrar algumas opções básicas de cálculo, e você poderá escolher entre elas.
Solicitarei então alguns números, e realizarei os cálculos para você.`);
console.log(`Escolha entre uma das opções abaixo:\n`,
    1 + '.', 'Soma.\n',
    2 + '.', 'Subtração.\n',
    3 + '.', 'Multiplicação.\n',
    4 + '.', 'Divisão.\n',
    5 + '.', 'Porcentagem.\n',
    6 + '.', 'Finalizar.');
let opcao = Number(prompt());

if (isNaN(opcao)) {
    console.log('Opção inválida.');
}

while (true) {
    if (!opcao) {
        console.log(`Escolha uma nova opção:\n`,
            1 + '.', 'Soma.\n',
            2 + '.', 'Subtração.\n',
            3 + '.', 'Multiplicação.\n',
            4 + '.', 'Divisão.\n',
            5 + '.', 'Porcentagem.\n',
            6 + '.', 'Finalizar.');
        opcao = Number(prompt());
    }
    switch (opcao) {
        case 1:

            numero1 = Number(prompt('Digite o primeiro valor da soma: '));
            while (true) {
                if (isNaN(numero1)) {
                    numero1 = Number(prompt('Isto não é um número. Digite por favor um número: '));
                    continue;
                }
                break;
            }
            numero2 = Number(prompt('Digite o segundo valor da soma: '));
            while (true) {
                if (isNaN(numero2)) {
                    numero2 = Number(prompt('Isto não é um número. Digite por favor um número: '));
                } else {
                    funcao.soma(numero1, numero2);
                    break;
                }
            }
            break;

        case 2:

            numero1 = Number(prompt('Digite o primeiro valor da subtração: '));
            while (true) {
                if (isNaN(numero1)) {
                    numero1 = Number(prompt('Isto não é um número. Digite por favor um número: '));
                    continue;
                }
                break;
            }
            numero2 = Number(prompt('Digite o segundo valor da subtração: '));
            while (true) {
                if (isNaN(numero2)) {
                    numero2 = Number(prompt('Isto não é um número. Digite por favor um número: '));
                } else {
                    funcao.subtracao(numero1, numero2);
                    break;
                }
            }
            break;

        case 3:

            numero1 = Number(prompt('Digite o primeiro valor da multiplicação: '));
            while (true) {
                if (isNaN(numero1)) {
                    numero1 = Number(prompt('Isto não é um número. Digite por favor um número: '));
                    continue;
                }
                break;
            }
            numero2 = Number(prompt('Digite o segundo valor da multiplicação: '));
            while (true) {
                if (isNaN(numero2)) {
                    numero2 = Number(prompt('Isto não é um número. Digite por favor um número: '));
                } else {
                    funcao.multiplicacao(numero1, numero2);
                    break;
                }
            }
            break;

        case 4:
            numero1 = Number(prompt('Digite o primeiro valor da divisão: '));
            while (true) {
                if (isNaN(numero1)) {
                    numero1 = Number(prompt('Isto não é um número. Digite por favor um número: '));
                    continue;
                }
                break;
            }
            numero2 = Number(prompt('Digite o segundo valor da divisão: '));
            while (true) {
                if (isNaN(numero2)) {
                    numero2 = Number(prompt('Isto não é um número. Digite por favor um número: '));
                } else {
                    funcao.divisao(numero1, numero2);
                    break;
                }
            }
            break;

        case 5:
            numero1 = Number(prompt('Digite o valor que deseja saber a porcentagem: '));
            while (true) {
                if (isNaN(numero1)) {
                    numero1 = Number(prompt('Isto não é um número. Digite por favor um número: '));
                    continue;
                }
                break;
            }
            numero2 = Number(prompt('Digite quantos porcento deseja saber do primeiro valor: '));
            while (true) {
                if (isNaN(numero2)) {
                    numero2 = Number(prompt('Isto não é um número. Digite por favor um número: '));
                } else {
                    funcao.porcentagem(numero1, numero2);
                    break;
                }
            }
            break;

        case 6:

            process.exit();

        default:
            console.log('Opção inválida.');
            break;
    }
    opcao = undefined;
}