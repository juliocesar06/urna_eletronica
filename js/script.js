let seuVoto = document.querySelector(".d-1-1 p");
let cargo = document.querySelector(".d-1-2 p");
let descricao = document.querySelector(".d-1-4 p");
let aviso = document.querySelector(".d-2 p");
let lateral = document.querySelector(".d-1-right");
let numeros = document.querySelector(".d-1-3");

let etapaAtual = 0;
let numero = "";

function comecarEtapa() {
  let numeroHtml = "";

  for (let i = 0; i < etapas[etapaAtual].numeros; i++) {
    if (i === 0) {
      numeroHtml += "<div class='numeros pisca'></div>";
    } else {
      numeroHtml += "<div class='numeros' ></div>";
    }
  }

  seuVoto.style.display = "none";
  cargo.innerHTML = etapas[etapaAtual].titulo;
  descricao.innerHTML = "";
  lateral.innerHTML = "";
  aviso.innerHTML = "";
  numeros.innerHTML = numeroHtml;
}
function atualizar() {}

function insert(n) {
  let elnumero = document.querySelector(".numeros.pisca");
  if (elnumero !== null) {
    elnumero.innerHTML = n;
    numero = `${numero}${n}`;
    elnumero.classList.remove("pisca");
    elnumero.nextElementSibling.classList.add("pisca");
  }
}
function branco(n) {
  alert("Voçe clicou no " + n);
}
function corrige(n) {
  alert("Voçe clicou no " + n);
}
function confirma(n) {
  alert("Voçe clicou no " + n);
}
comecarEtapa();
