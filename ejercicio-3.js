function cuadrado(n) {
    const resultado = n * n;
    return resultado;
  }
  
  const numeros = [16];
  
  for (const numero of numeros) {
    const numeroCuadrado = cuadrado(numero);
    console.log(`El número ${numero} elevado al cuadrado es: ${numeroCuadrado}`);
  }
  