const REGALOS_ENLACES = [
  "https://i.postimg.cc/W3fLzgKd/pastel.gif",
  "https://i.postimg.cc/W3fLzgKd/pastel.gif",
  "https://i.postimg.cc/W3fLzgKd/pastel.gif",
  "https://i.postimg.cc/W3fLzgKd/pastel.gif",
  "https://i.postimg.cc/W3fLzgKd/pastel.gif",
];

class Regalo {
  constructor(contenedorElemento, regaloSrc) {
    this.contenedorElemento = contenedorElemento;
    this.abrirRegalo = this.abrirRegalo.bind(this);
    this.regaloSrc = regaloSrc;
    this.image = document.createElement("img");
    this.image.src = "https://i.postimg.cc/xTDpR6K0/regalo.png";
    this.image.width = "200";
    this.image.addEventListener("click", this.abrirRegalo);
    this.contenedorElemento.append(this.image);
  }
  abrirRegalo(event) {
    this.image.src = this.regaloSrc;
    this.image.removeEventListener("click", this.abrirRegalo);
    document.dispatchEvent(new CustomEvent("regaloAbierto"));
  }
}


class Aplicacion {
  constructor(contenedorRegalos, contenedorTitulo) {
    this.contenedorRegalos = contenedorRegalos;
    this.contenedorTitulo = contenedorTitulo;
    this.regaloAbierto = this.regaloAbierto.bind(this);
    this.regalos = [];
    this.contador;
    this.cargarContenedorRegalo();
  }
  cargarContenedorRegalo() {
    for (const enlace of REGALOS_ENLACES) {
      const regalo = new Regalo(this.contenedorRegalos, enlace);
      this.regalos.push(regalo);
      this.contador = 0;
      document.addEventListener("RegaloAbierto", this.regaloAbierto);
    }
  }
  regaloAbierto() {
    this.contador++;
    if (this.contador == 5) {
      this.contenedorTitulo.textContent = "Lograste abrir todos los regalos";
    }
  }
}

const contenedorRegalos = document.querySelector("#regalo");
const contenedorTitulo = document.querySelector("h1");
const app = new Aplicacion(contenedorRegalos, contenedorTitulo);
