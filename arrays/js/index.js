const numeros = [1, 10, 5, 40, 100, 230];

console.log(numeros);

const filtrarNumeros = numeros.filter(
  (numero) => numero === 10 || numero === 100
);

const buscarNumero = numeros.find((numero) => numero === 230);

if (!buscarNumero) {
  numeros.push(300);
}

console.log(numeros);
