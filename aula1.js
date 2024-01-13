/* Este é um Programa simples em Java Script que calcula o valor de uma viagem
tendo três variaveis. Sendo elas:
1. Preço do Combustivel;
2. Gasto Médio do Combustivel;
3. Distancia Percorrida em Km da viagem;
*/

const precoCombustivel = 5.56;
const kmPorLitros = 15;
const distanciaEmKm = 1850;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel; 

console.log (valorGasto.toFixed(2));