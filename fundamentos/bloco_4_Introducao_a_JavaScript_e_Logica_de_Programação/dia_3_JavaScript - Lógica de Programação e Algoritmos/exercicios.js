// TAREFA 1 
let num = 10;
let mult = 1;
for (let index = 1; index <= num; index++) {
    mult *= index;
    }
    console.log(mult)

// TAREFA 2
let word = "trybe";
let palavrainvertida = "";
for (let index = word.length - 1; index >= 0 ; index -= 1) {
    palavrainvertida += word[index]  
}
console.log(palavrainvertida)

// TAREFA 3 
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];
for(let count = 0 ; count < array.length; count += 1){
    if(array[count].length > maiorPalavra.length){
        maiorPalavra = array[count];
    }
}console.log(maiorPalavra)
    for(let count = 0 ; count < array.length; count += 1){
    if(array[count].length < maiorPalavra.length){
        menorPalavra = array[count];
    }
}console.log(menorPalavra); 

// TAREFA 4
