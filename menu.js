// Menú hamburguesa: al hacer clic en el botón se agrega o quita la clase "abierto" del menú.
// En el CSS, la clase "abierto" es la que hace visible el menú en el celular.
const boton = document.getElementById("boton-menu");
const navegacion = document.getElementById("navegacion");

boton.addEventListener("click", function () {
  navegacion.classList.toggle("abierto");
});

// Al elegir una opción del menú, el menú se cierra.
const enlaces = navegacion.querySelectorAll("a");
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    navegacion.classList.remove("abierto");
  });
});
