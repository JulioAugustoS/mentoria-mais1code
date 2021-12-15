const alunos = [
  {
    nome: "Guilherme",
    nota1: 1,
    nota2: 5,
    nota3: 4,
  },
  {
    nome: "Jessica",
    nota1: 8,
    nota2: 10,
    nota3: 4,
  },
  {
    nome: "Taiane",
    nota1: 9,
    nota2: 10,
    nota3: 6,
  },
  {
    nome: "Danilo",
    nota1: 8,
    nota2: 7,
    nota3: 9,
  },
];

const calcularMediaAlunos = () => {
  alunos.forEach((aluno) => {
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;

    if (media >= 6) {
      console.log(
        `O Aluno ${aluno.nome} teve a média de ${media.toFixed(
          2
        )} e foi Aprovado`
      );
    } else {
      console.log(
        `O Aluno ${aluno.nome} teve a média de ${media.toFixed(
          2
        )} e foi Reprovado`
      );
    }
  });
};

calcularMediaAlunos();
