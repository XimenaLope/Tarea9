function saludar(saludarFuncion) {
  saludarFuncion();
}
const saludoInternacional = function () {
  console.log("Hola mundo");
};
const saludoMexicano = function () {
  console.log("Que hay de nuevo!");
};

saludar(saludoInternacional);
saludar(saludoMexicano);
