function copy(el) {
  let element = document.createElement("textarea");
  element.value = el.textContent;
  element.style.height = "0px";
  element.style.width = "0px";
  element.style.opacity = "0";
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}

document.getElementById("howto").style.display = "none";



var input = document.getElementById("inputcoba");
var out = document.getElementById("output");

function coba() {
  out.innerHTML = input.value;
}
/*
var inputnama = document.getElementById("inputcoba-nama");
var inputukuran = document.getElementById("inputcoba-ukuran");
var inputwarna = document.getElementById("inputcoba-warna");
var outguide = document.getElementById("output-guided");

function cobaGuided() {
  outguide.innerHTML =
    "<div class='" +
    inputnama.value +
    inputukuran.value +
    inputwarna.value +
    "'></div>";
}
*/
