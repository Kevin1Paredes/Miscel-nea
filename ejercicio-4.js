function convertirADolares(euros) {
    const tasaCambio = 1.08;
    const dolares = euros * tasaCambio;
    return dolares;
  }
  
  const cantidadEuros = 82;
  const cantidadDolares = convertirADolares(cantidadEuros);
  
  console.log(`€${cantidadEuros} equivalen a $${cantidadDolares.toFixed(2)}`);
  