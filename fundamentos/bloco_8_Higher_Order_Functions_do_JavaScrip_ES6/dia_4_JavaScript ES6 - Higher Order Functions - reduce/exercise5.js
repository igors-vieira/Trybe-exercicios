const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    return names.reduce((acc, curr) => acc + curr.split('').reduce((acumulator, current) => current === 'a' || current === 'A'? acumulator + 1 : acumulator , 0), 0)
  }
  console.log(containsA());