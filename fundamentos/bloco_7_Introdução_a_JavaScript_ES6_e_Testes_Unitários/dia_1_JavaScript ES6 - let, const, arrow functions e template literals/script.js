// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

//   const testingScope = (escopo) => {
//       if (escopo === true){
//         let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'
//         console.log(`${ifScope} otimo, fui utilizada no escopo !`);
//       }else{
//         let elseScope = 'Não devo ser utilizada fora meu escopo (else)'
//         console.log(`${elseScope}`);
//       }
//   }
//   testingScope(false);


let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'
let elseScope = 'Não devo ser utilizada fora meu escopo (else)'
const testingScope = (escopo) => escopo ? `${ifScope} otimo, fui utilizada no escopo !` : `${elseScope}`;
console.log(testingScope(true));


  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
    oddsAndEvens.sort((a, b) => a - b)
      console.log(`Os Numeros ${oddsAndEvens} se encotram em ordem crescente`); // será necessário alterar essa linha 😉


  