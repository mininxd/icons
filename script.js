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

  Toastify({
    text: el.textContent,
    duration: 1000,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
      background: "#222",
      border: "0",
      outline: "0",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
/*
document.getElementById("howto").style.display = "none";

var input = document.getElementById("inputcoba");
var out = document.getElementById("output");

function coba() {
  out.innerHTML = input.value;
}

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

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("input");
  filter = input.value.toUpperCase();
  ul = document.getElementById("ic");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
    console.log(a.count);
  }
}

var list = document.getElementById("ic");
var jumlah = list.getElementsByTagName("li");

setInterval(function () {
  document.getElementById("total-icon").innerHTML =
    "<i>Total Icons: " + jumlah.length + "</i>";
}, 1000);

///

setTimeout( function() {
var ul = document.getElementById("acak");
for (var i = ul.children.length; i >= 0; i--) {
  ul.appendChild(ul.children[(Math.random() * i) | 0]);
}
}, 1000)
