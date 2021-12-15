const alunos = [];

const adicionarAluno = () => {
  const nome = document.getElementById("aluno").value;
  const nota1 = document.getElementById("nota1").value;
  const nota2 = document.getElementById("nota2").value;
  const nota3 = document.getElementById("nota3").value;

  const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
  let resultado = "";

  if (media >= 6) {
    resultado = "Aprovado";
  } else {
    resultado = "Reprovado";
  }

  alunos.push({
    nome,
    media: parseFloat(media).toFixed(2),
    resultado,
  });

  document.getElementById("aluno").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";

  exibirAluno(alunos);
};

const exibirAluno = (listaAlunos) => {
  listaAlunos.map((aluno) => {
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode(
      `Nome do Aluno: ${aluno.nome}\nMédia: ${aluno.media}\nResultado: ${aluno.resultado}`
    );

    divNova.appendChild(conteudoNovo);

    var divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova, divAtual);
  });
};
