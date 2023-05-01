const REGALOS_ENLACES = [
  "https://i.postimg.cc/W3fLzgKd/pastel.gif",
  "https://i.postimg.cc/W3fLzgKd/pastel.gif",
 "https://i.postimg.cc/W3fLzgKd/pastel.gif",
  "https://i.postimg.cc/W3fLzgKd/pastel.gif",
  "https://i.postimg.cc/W3fLzgKd/pastel.gif",
];

class Regalo {
  constructor(contenedorElemento, regaloSrc, callbackAbierto) {
    this.contenedorElemento = contenedorElemento;
    this.abrirRegalo = this.abrirRegalo.bind(this);
    this.regaloSrc = regaloSrc;
    this.callbackAbierto = callbackAbierto;
    this.image = document.createElement("img");
    this.image.src = "https://i.postimg.cc/xTDpR6K0/regalo.png";
    this.image.width = "220";
    this.image.addEventListener("click", this.abrirRegalo);
    this.contenedorElemento.append(this.image);
  }
  abrirRegalo(event) {
    this.image.src = this.regaloSrc;
    this.image.removeEventListener("click", this.abrirRegalo);
    this.callbackAbierto();
  }
}

class Aplicacion {
  constructor(contenedorRegalos, contenedorTitulo) {
    this.contenedorRegalos = contenedorRegalos;
    this.contenedorTitulo = contenedorTitulo;
    this.regaloAbierto = this.regaloAbierto.bind(this);
    this.regalos = [];
    this.contador = 0;
    this.cargarContenedorRegalo();
  }
  cargarContenedorRegalo() {
    for (const enlace of REGALOS_ENLACES) {
      const regalo = new Regalo(
        this.contenedorRegalos,
        enlace,
        this.regaloAbierto
      );
      this.regalos.push(regalo);
    }
  }
  regaloAbierto() {
    this.contador++;
    if (this.contador == this.regalos.length) {
      this.contenedorTitulo.textContent = "Haz abierto todos los regalos :)";
    }
  }
}

const contenedorRegalos = document.querySelector("#regalo");
const contenedorTitulo = document.querySelector("h1");
const app = new Aplicacion(contenedorRegalos, contenedorTitulo);
