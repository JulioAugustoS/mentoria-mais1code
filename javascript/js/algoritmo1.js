// Algoritimo 1
// Faça um algoritmo que lê uma temperatura
// em Fahrenheit e calcula a temperatura
// correspondente em Celsius. Ao final o
// programa deve exibir as duas temperaturas.

// User a fórmula: C = (5 * (F - 32) / 9)

const temperaturaAtual = prompt("Digite a temperatura atual em Fahrenheit: ");

const converterParaCelsius = () => {
  const tempEmCelsius = (5 * (temperaturaAtual - 32)) / 9;

  console.log(`A temperatura em Fahrenheit é: ${temperaturaAtual}F`);
  console.log(`A temperatura em Celsius é: ${tempEmCelsius}C`);
};

converterParaCelsius();
