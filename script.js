// Exercicio 1 //


let precoGasolina = 6.80;
let dinheiroDoCliente = parseFloat(prompt("Digite quanto de dinheiro você vai abastecer"));
let convercaoEmGasolina = dinheiroDoCliente / precoGasolina;

alert(`O Cliente abasteceu ${convercaoEmGasolina}L`);


// Exercicio 2 //


let grausCelsius = parseFloat(prompt("Digite a temperatura em graus celsius"));
let fahrenheit = (9 * grausCelsius + 160) / 5;

alert(`O valor ${grausCelsius}ºc em Fahrenheit é ${fahrenheit}`);

// Exercicio 3 //


let temperaturaEmFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit"));
let temperaturaEmGrausCelsius = ((temperaturaEmFahrenheit - 32) * 5) / 9;

alert(`O valor ${temperaturaEmFahrenheit}ºf em Celsius é ${temperaturaEmGrausCelsius}`);


// Exercicio 4 //


let comprimento = parseFloat(prompt("Digite o comprimento"));
let largura = parseFloat(prompt("Digite a largura"));
let altura = parseFloat(prompt("Digite a altura"));
let volume = comprimento * largura * altura;

alert(`O volume é de: ${volume}m³`);


// Exercicio 5 //


let valorInteiro = parseInt(prompt("Digite o valor inteiro"));
let valorAoQuadrado = valorInteiro * valorInteiro;

alert(`O valor ${valorInteiro} ao quadrado é ${valorAoQuadrado}`);

// Exercicio 6 //


let valor1 = parseFloat(prompt("Digite um número"));
let valor2 = parseFloat(prompt("Digite um número"));
let valor3 = parseFloat(prompt("Digite um número"));
let valor4 = parseFloat(prompt("Digite um número"));
let valor5 = parseFloat(prompt("Digite um número"));
let somaDosNumeros = valor1 + valor2 + valor3 + valor4 + valor5;
let mediaDaSoma = somaDosNumeros / 5;

alert(`A soma dos valores informados é: ${somaDosNumeros} e a média das notas é: ${mediaDaSoma}`);


// Exercicio 7 //


let valorInteiro1 = parseInt(prompt("Digite um numero positivo"));
let valorInteiro2 = parseInt(prompt("Digite outro numero positivo"));
let restoDaDivisao = valorInteiro1 % valorInteiro2;

alert(`O resto da divisão de ${valorInteiro1} por ${valorInteiro2} é: ${restoDaDivisao}`);


// Exercicio 8 //


let frase = prompt("Digite uma frase ou uma palavra");
let comprimentoFrase = frase.length;

alert(`Este texto tem ${comprimentoFrase} caracteres`);


// Exercicio 9 incompleto colocar a primeira letra em maiusculo //


let palavra = prompt("Digite uma frase ou uma palavra");
let palavraComprimento = palavra.length;
let primeiraLetra = palavra[0];
let ultimoCaractere = palavra[palavraComprimento - 1];


alert(`A primeira letra deste texto é ${primeiraLetra.toUpperCase()} e última é ${ultimoCaractere.toLowerCase()}`);


// Exercicio 10 incompleto colocar o nome e sobrenome em maiusculo //


let nomeFuncionario = prompt("Digite seu primeiro nome");
let sobrenomeFuncionario = prompt("Digite seu sobrenome");
let idadeFuncionario = parseInt(prompt("Digite sua idade"));
let setorFuncionario = prompt("Digite seu setor");

alert(`nome: ${nomeFuncionario.toUpperCase()} ${sobrenomeFuncionario.toUpperCase()} - idade: ${idadeFuncionario} - Setor: ${setorFuncionario}`); 