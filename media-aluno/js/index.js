// Escreva um algoritimo com JavaScript que calcule a
// média aritmética das 3 notas de um aluno e mostre,
// além do valor da média, uma mensagem de "Aprovado",
// caso a média seja igual ou superior a 6, ou a
// mensagem "reprovado", caso contrário.

// c = (n1 + n2 + n3) / 3

const calcularMedia = () => {
  const nota1 = document.getElementById("nota1").value;
  const nota2 = document.getElementById("nota2").value;
  const nota3 = document.getElementById("nota3").value;

  if (!nota1 || !nota2 || !nota3) {
    return alert("Você precisa informar as notas para calcular a média!");
  }

  const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

  console.log("Média: ", media);
  document.getElementById("resultado-media").innerHTML =
    parseFloat(media).toFixed(2);

  if (media >= 6) {
    console.log("Aprovado");
    document.getElementById("resultado").innerHTML = "Aprovado";
  } else {
    console.log("Reprovado");
    document.getElementById("resultado").innerHTML = "Reprovado";
  }
};

const limpar = () => {
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";

  document.getElementById("resultado-media").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
};
