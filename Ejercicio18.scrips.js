function Obtener() {
  fetch("https://i.postimg.cc/s2pKb3Bf/2GU.gif")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      let imagen = document.getElementById("https://i.postimg.cc/s2pKb3Bf/2GU.gif");
      imagen.src = json.image;
      let texto = document.getElementById("contenedorTexto");
      texto.innerHTML = json.answer;
    });
}
let boton = document.getElementById("boton");
boton.addEventListener("click", Obtener);
