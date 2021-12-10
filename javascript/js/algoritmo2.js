// Algoritimo 2
// Determinar se um número é par ou ímpar

const numero = prompt("Digite um número");

const parOuImpar = () => {
  if (numero % 2 === 0) {
    console.log(`O número ${numero} é par`);
  } else {
    console.log(`O número ${numero} é ímpar`);
  }
};

parOuImpar();

// + = Soma
// - = Subtração
// * = Multiplicação
// / = Divisão
// % = Resto da divisão
