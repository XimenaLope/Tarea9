document.querySelectorAll("li.plan").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let seleccionado = document.getElementById("Spam");
    seleccionado.textContent = e.target.dataset.plan + " " + e.target.dataset.id;
  });
});
