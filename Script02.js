
const studients = [
  {
    name: "João",
    notaFirst: 5,
    notaSecond: 6,
  },
  {
    name: "Maria",
    notaFirst: 2,
    notaSecond: 8,
  },
  {
    name: "Pedro",
    notaFirst: 9,
    notaSecond: 10,
  },
  {
    name: "Ana",
    notaFirst: 8,
    notaSecond: 6,
  },
  {
    name: "Lucas",
    notaFirst: 10,
    notaSecond: 5,
  },
]

const calcAverage = (notaFirst, notaSecond) => {
  return ((notaFirst + notaSecond) / 2).toFixed(2)
}

for (let average of studients) {

  if (calcAverage(average.notaFirst, average.notaSecond) >= 7) {

    alert(`A média do(a) ${average.name} é: ${calcAverage(average.notaFirst, average.notaSecond)}
    Parabéns, ${average.name}! Você foi aprovado(a) no concurso!`)
  } 
  else {
    alert(`A média do(a) ${average.name} é: ${calcAverage(average.notaFirst, average.notaSecond)}
    Não foi dessa vez, ${average.name}! Tente novamente!`)   
  }

}


