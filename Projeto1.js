const precoCombustivel = 5.56;
const kmPorLitros = 15;
const distanciaEmKm = 1850;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel; 

console.log (valorGasto.toFixed(2));
