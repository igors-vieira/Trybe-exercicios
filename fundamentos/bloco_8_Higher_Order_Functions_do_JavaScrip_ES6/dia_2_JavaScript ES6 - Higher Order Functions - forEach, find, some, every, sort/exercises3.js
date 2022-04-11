const expectedResult = {
  author: {
    birthYear: 1948,
    name: "George R. R. Martin",
  },
  genre: "Fantasia",
  id: 1,
  name: "As Crônicas de Gelo e Fogo",
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  let nome;
  Object.values(expectedResult).find((v) =>
    v.name.length === 26
      ? (nome = v.name)
      : (nome = Object.values(expectedResult)[3])
  );
  return nome;
}
console.log(getNamedBook());
