const texto =
  "Mar del Plata​ es una ciudad ubicada en el sudeste de la provincia de Buenos Aires";
let textoCensurado = null;

/*
    Utilizando una expresion regular, reemplace todas las letras del texto con "X",
    de manera que se muestre por consola:

    "XXX XXX XXXXX​ XX XXX XXXXXX XXXXXXX XX XX XXXXXXX XX XX XXXXXXXXX XX XXXXXX XXXXX"

    Reemplazar este comentario con su codigo.
 */

textoCensurado = texto.replace(/[A-Za-z]/g, "X");

console.log(textoCensurado);
