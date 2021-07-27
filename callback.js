/*
    Completar el siguiente segmento de codigo utilizando el concepto de callback para
    que los mensajes se muestren de manera correcta (1,2,3,4)

    Solo puedes modificar o eliminar los comentarios marcados con "TODO" como crea necesario.
*/

console.log(1);

function esperar2segundos(alTerminar) {
  console.log(2);
  setTimeout(() => {
    console.log(3);
    alTerminar();
  }, 2000);
}

function alTerminar() {
  console.log(4);
}

esperar2segundos(alTerminar);
