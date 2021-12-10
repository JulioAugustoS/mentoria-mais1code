const pessoas = [
  {
    nome: "Pedro",
    idade: 20,
    altura: 1.85,
    peso: 80,
  },
  {
    nome: "João",
    idade: 10,
    altura: 1.1,
    peso: 50,
  },
  {
    nome: "Paula",
    idade: 12,
    altura: 1.85,
    peso: 55,
  },
  {
    nome: "Artur",
    idade: 89,
    altura: 1.7,
    peso: 95,
  },
];

const adicionarPessoa = () => {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;

  pessoas.push({
    nome,
    idade: Number(idade),
    altura: parseFloat(altura),
    peso: Number(peso),
  });

  console.log(pessoas);

  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("peso").value = "";
};
