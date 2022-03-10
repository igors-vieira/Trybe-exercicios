// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.
let soma = 0;
for (let index = 1; index <= 50; index++) {
  soma += index;
}
console.log("a soma de 1 a 50 é: " + soma);

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let count = 0;
for (let index = 2; index <= 150; index++) {
  if (index % 3 === 0) {
      count += 1;
  }
}
if(count === 50){
    console.log("Mensagem Secreta")
}else {
    console.log("a quantidade de numeros divisiveis por 3 e" + count);
}

//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".
let Player1 = "tesoura";
let Player2 = "papel";
if (Player1 === "tesoura" && Player2 === "pepel"){
    console.log("Player1 won")  
}else if ()

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.
