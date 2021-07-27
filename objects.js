const originalA = {
  nombre: "Sergio",
  edad: 28,
  preferidos: ["Pizza", "Hamburguesa"],
  madre: {
    nombre: "Sandra",
    edad: 54,
  },
};
const originalB = '{"nombre":"Damian","edad":26}';
// -------
let edadMadre = 0;
let objetoParseado = null;
let existeClaveMadreA = null;
let existeClaveMadreB = null;
let nombreDelMasJoven = null;
let clavesDelObjeto = [];

/*
    A partir de los objetos originales, obtener los siguientes resultados:
    - edadMadre: Edad de la madre
    - objetoParseado: Objeto "originalB" parseado a objeto
    - existeClaveMadreA: Si existe la clave madre en el objeto 'originalA'
    - existeClaveMadreB: Si existe la clave madre en el objeto 'originalB'
    - nombreDelMasJoven: Nombre de la persona mas joven
    - clavesDelObjeto: Que claves contiene el objeto 'originalA'
  
    Reemplazar este comentario con su codigo.
  */

console.log(edadMadre);
console.log(objetoParseado);
console.log(existeClaveMadreA);
console.log(existeClaveMadreB);
console.log(nombreDelMasJoven);
console.log(clavesDelObjeto);
