const prompt = require ('prompt-sync')();
const funcao = require ('./funcoes.js');

console.log(`Olá, eu sou uma calculadora. Está duvidando? Olha só: "2 + 2 é igual a 4!...."
Não soou convincente não é? Pois bem. Vou provar para você de uma maneira melhor.
Vou te mostrar algumas opções básicas de cálculo, e você poderá escolher entre elas.
Solicitarei então alguns números, e realizarei os cálculos para você.`);
console.log(`Escolha entre uma das opções abaixo:`, 
1+'.', 'Soma.',
2+'.', 'Subtração.',
3+'.', 'Multiplicação.',
4+'.', 'Divisão.',
5+'.', 'Porcentagem.',
6+'.', 'Finalizar.');
let opcao = prompt();

if (opcao == 1) {
    let numero1 = prompt('Digite o primeiro valor da soma: ');
    let numero2 = prompt('Digite o segundo valor da soma: ');
    funcao.soma(numero1, numero2);
}