// 1)

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
K = K + 1;
SOMA = SOMA + K;
}

console.log(SOMA); 
// Resultado: 91

// 2)

function isFibonacci(num) {
let a = 0;
let b = 1;
let c;

while (b < num) {
c = a + b;
a = b;
b = c;
}

if (b === num) {
console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
console.log(`${num} não pertence à sequência de Fibonacci.`);
}
}

isFibonacci(5); 
// Resultado: 5 pertence à sequência de Fibonacci.

// 3)

 1, 3, 5, 7, 9
 2, 4, 8, 16, 32, 64, 128
 0, 1, 4, 9, 16, 25, 36, 49
 4, 16, 36, 64, 100
 1, 1, 2, 3, 5, 8, 13
 2, 10, 12, 16, 17, 18, 19, 20

 // 4)

/*Tempo caminhão = (100 km / 80 km/h) + (2 x 5 min) = 1,25 h

Já o tempo do carro será de:

Tempo carro = 100 km / 110 km/h = 0,91 h

Como os veículos se encontram no meio do caminho, é possível concluir que o carro estará mais
próximo da cidade de Ribeirão Preto.

Portanto, a resposta é: o carro estará mais próximo da cidade de Ribeirão Preto.*/


 // 5)

 function inverteString(str) {
let novaString = '';

for (let i = str.length - 1; i >= 0; i--) {
novaString += str[i];
}

return novaString;
}

console.log(inverteString('exemplo')); 
// Saída: olpmexe

/* Essa função utiliza um loop for para percorrer a string de trás para frente e concatenar
cada caractere em uma nova string. Essa nova string é retornada como resultado da função.*/