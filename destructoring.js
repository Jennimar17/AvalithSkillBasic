const original = {
  a: 1,
  b: 2,
  c: 3,
};
// -------
/*
let sinB = null;
let valorDeC = null;
*/

// let sinB = [original["a"], original["c"]];
// let valorDeC = original["c"];

const { a, c } = original;
sinB = { a, c };
valorDeC = c;

/*
    Utilizando SOLAMENTE destructoring, obtener los siguientes resultados:
    - sinB: Una copia del objeto original sin la clave "b"
    - valorDeC: Obtener el valor de la clave "c". (¡No puede hacer "valorDeC = original.c"!)

    Reemplazar este comentario con su codigo.
 */

console.log(sinB);
console.log(valorDeC);
