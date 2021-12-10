// Algoritimo 3
// Ler um array de alunos com suas respectivas
// notas e retornar se cada aluno foi
// Aprovado, Reprovado ou Aprovado com Louvor
// caso a nota for 10

// Objetos {}
// forEach, map, filter, reduce, for

const alunos = [
  {
    nome: "João",
    nota: 9.8,
  },
  {
    nome: "Maria",
    nota: 10,
  },
  {
    nome: "Pedro",
    nota: 2,
  },
];

const calcularNotas = () => {
  alunos.forEach((aluno) => {
    if (aluno.nota < 7) {
      return console.log(`${aluno.nome} foi reprovado`);
    }

    if (aluno.nota >= 7 && aluno.nota < 10) {
      return console.log(`${aluno.nome} foi aprovado`);
    }

    if (aluno.nota === 10) {
      return console.log(`${aluno.nome} foi aprovado com louvor`);
    }
  });
};

calcularNotas();
