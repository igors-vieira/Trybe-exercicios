const sum = (a, b) => {
    if(typeof a !== "number"|| typeof b !== "number"){
        throw new Error('parameters must be numbers')
    }
    return a + b
}

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
    }
}
return newArr;
  }

  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

  function encode(enCode) {
    let code = enCode.split('');
    let code2 = [];
    for (let n = 0; n < code.length; n += 1) {
      if (code[n] === 'a') {
        code2.push(1);
      } else if (code[n] === 'e') {
        code2.push(2);
      } else if (code[n] === 'i') {
        code2.push(3);
      } else if (code[n] === 'o') {
        code2.push(4);
      } else if (code[n] === 'u') {
        code2.push(5);
      } else {
        code2.push(code[n]);
      }
    }
    return code2.join('');
  }

  function decode(deCode) {
    let code = deCode.split('');
    let code2 = [];
    for (let m = 0; m < deCode.length; m += 1) {
      if (code[m] == 1) {
        code2.push('a');
      } else if (code[m] == 2) {
        code2.push('e');
      } else if (code[m] == 3) {
        code2.push('i');
      } else if (code[m] == 4) {
        code2.push('o');
      } else if (code[m] == 5) {
        code2.push('u');
      } else {
        code2.push(code[m]);
      }
    }
    return code2.join('');
  }
  function techList(cafe, name) {
    cafe = cafe.sort();
    let toddy = { cafe, name };
    let tech = null;
    let nescau = [];
    for (let j = 0; j < toddy.cafe.length; j += 1) {
      if (toddy.cafe[0] == toddy.cafe[j]) {
        tech = toddy.cafe[j];
        nescau.push({ name, tech });
      } else if (toddy.cafe[1] == toddy.cafe[j]) {
        tech = toddy.cafe[j];
        nescau.push({ name, tech });
      } else if (toddy.cafe[2] == toddy.cafe[j]) {
        tech = toddy.cafe[j];
        nescau.push({ name, tech });
      } else if (toddy.cafe[3] == toddy.cafe[j]) {
        tech = toddy.cafe[j];
        nescau.push({ name, tech });
      } else {
        tech = toddy.cafe[j];
        nescau.push({ name, tech });
      }
    }
    if (cafe.length === 0) {
      return 'Vazio!';
    }
    return nescau;
  }
  
  // implemente seus testes aqui
  
  module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList}
