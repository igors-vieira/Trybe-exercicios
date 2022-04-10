const {sum, myRemove, myFizzBuzz, encode, decode, techList} = require('./script');

describe ('sum()', () => {
test('soma de valores retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
});
test('soma de valores retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
});
});

describe ('myRemove()', () => {
    test('se myRemove contain o valor ([1, 2, 3, 4], 3)', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })
    test('se myRemove Não contain o valor ([1, 2, 3, 4])', () => {
        expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4], undefined)
    })
    test('se myRemove Não contain o valor ([1, 2, 3, 4])', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
});

describe ('myFizzBuzz', () => {
    it('se os valor são divisiveis por 3 e 5 ', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz')
    })
    it('se os valor são divisiveis por 3', () => {
        expect(myFizzBuzz(9)).toEqual('fizz')
    })
    it('se os valor são divisiveis por 5 ', () => {
        expect(myFizzBuzz(20)).toEqual('buzz')
    })
    it('se os valor Não são divisiveis por 3 e 5 ', () => {
        expect(myFizzBuzz(7)).toEqual(7)
    })
    it('se os valor são divisiveis por 3 e 5 ', () => {
        expect(myFizzBuzz("")).toBeFalsy()
    })
})

describe ('encode', () =>{
    it('se os valores são funcões', () => {
        expect(typeof encode == 'function').toBeTruthy()
    })
    it('se  a, e, i, o, u. e Convertido em 1,2,3,4 e 5', () => {
        expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5')
    })
    it('verificação se trybe e trocado por tryb2', () => {
        expect(encode('trybe')).toBe('tryb2')
    })
    it('verificação se parametros e igual ao resultado final', () => {
        expect(encode('qwrty')).toBe('qwrty')
    })
})

describe ('decode', () =>{
    it('se os valores são funcões', () => {
        expect(typeof decode == 'function').toBeTruthy()
    })
    it('se  a, e, i, o, u. e Convertido em 1,2,3,4 e 5', () => {
        expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u')
    })
    it('verificação se trybe e trocado por tryb2', () => {
        expect(decode('tryb2')).toBe('trybe')
    })
    it('verificação se parametros e igual ao resultado final', () => {
        expect(decode('qwrty')).toBe('qwrty')
    })
})

describe('Testa a função techList', () => {
    it('Testa se a função techList é definida', () => {
      expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
      expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
      expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
        {
          tech: 'CSS',
          name: 'Lucas'
        },
        {
          tech: 'HTML',
          name: 'Lucas'
        },
        {
          tech: 'JavaScript',
          name: 'Lucas'
        },
        {
          tech: 'Jest',
          name: 'Lucas'
        },
        {
          tech: 'React',
          name: 'Lucas'
        }
      ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
      expect(techList([], 'Lucas')).toBe('Vazio!');
    });
  });