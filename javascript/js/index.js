const dataNascimento = "30/11/2010";

const eMaiorDeIdade = (data) => {
  const ano = new Date().getFullYear();
  const mes = new Date().getMonth() + 1;
  const dia = new Date().getDate();

  const diaAniversario = data.split("/")[0];
  const mesAniversario = data.split("/")[1];
  const anoAniversario = data.split("/")[2];

  const idade = ano - Number(anoAniversario);

  if (idade < 18) {
    return "O usuário tem " + idade + " anos de idade";
  }

  if (mes < Number(mesAniversario)) {
    return `O usuário tem ${idade} anos de idade`;
  }

  if (dia > Number(diaAniversario)) {
    return `O usuário tem ${idade} anos de idade`;
  }

  return `O usuário tem ${idade} anos de idade`;
};

console.log(eMaiorDeIdade(dataNascimento));
