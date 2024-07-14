// ⋆˚✿˖° TIPEO ⋆˚✿˖°
const descripcion = document.querySelector(".descripcion");
const descripcionTextos = [
  "Desarrolladora web",
  "Apasionada por la tecnología",
  "Especializada en la creación de sitios web",
];

let textoActual = 0;
let texto = "";

function borrarTexto() {
  const textoArray = texto.split("");
  let i = textoArray.length - 1;

  const borrarInterval = setInterval(() => {
    texto = textoArray.slice(0, i).join("");
    descripcion.textContent = texto;
    i--;

    if (i < 0) {
      clearInterval(borrarInterval);
      texto = "";
      textoActual = (textoActual + 1) % descripcionTextos.length;
      setTimeout(tipeo, 1000);
    }
  }, 50);
}

function tipeo() {
  const textoArray = descripcionTextos[textoActual].split("");
  let i = 0;

  const tipoInterval = setInterval(() => {
    texto += textoArray[i];
    descripcion.textContent = texto;
    i++;

    if (i >= textoArray.length) {
      clearInterval(tipoInterval);
      setTimeout(borrarTexto, 2000);
    }
  }, 100);
}

tipeo();

// ⋆˚✿˖° SCROLL ⋆˚✿˖°
const scrollButton = document.querySelector(".scroll");

const funcionDeScroll = () => {
  if (window.scrollY > 20) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
};

window.addEventListener("scroll", funcionDeScroll);

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
