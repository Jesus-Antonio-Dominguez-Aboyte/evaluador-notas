//variables
nota = 100;
//pedir la nota al usuario
nota = prompt("ingrese la nota");
//funciones para evaluar la nota
if (nota >= 101) {
  console.log("no existe esa nota");
} else if (nota >= 100) {
  //mensaje
  console.log("excelente");
} else if (nota >= 80) {
  console.log("bien");
} else if (nota >= 61 || nota >= 74) {
  console.log("de pansaso suficiente");
} else if (nota <= 60 && nota >= 0) {
  console.log("tienes que recursar la materia reprobaste");
}
