var content = `
<div style="display: none" id="howto" class="howto"><hr>
   <b><h2>Dokumentasi </h2></b>
    <h3>Import kode</h3>
    Taruh kode ini dalam <code>&lt;head&gt;</code><br><br>
    <code onclick="copy(this)" class="code"
      >&lt;script async src="https://icons.mininxd.my.id/src/icons.js"&gt;&lt;/script&gt;
    </code>
    <br><br>
    web framework ini membutuhkan jQuery, kalau kamu sudah ada abaikan, jika belum copy kode berikut
    <br><code onclick="copy(this)" class="code"
      ><br>&lt;script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossorigin="anonymous"&gt;&lt;/script&gt;</code>
    <hr />
    <h3>Contoh Kode</h3>
    <code onclick="copy(this)" class="code"
      >&lt;div class="NAMA-IKON UKURAN ATRIBUT-WARNA"&gt;&lt;/div&gt;</code
    >
    <br /><br />

    &lt;div class="fb-icon ic-s ic-dark"&gt;&lt;/div&gt;<br />
    <div class="fb-icon ic-s ic-dark"></div>
    <br />
    &lt;div class="fb-icon ic-m ic-info"&gt;&lt;/div&gt;<br />
    <div class="fb-icon ic-m ic-info"></div>

    <hr />
    <h3>Ubah ukuran </h3>
    Ukuran yang tersedia <ul>
    <li><code>ic-xs</code> | Extra Small</li>
    <li><code>ic-s</code> &nbsp; | Small</li>
    <li><code>ic-m</code> &nbsp; | Medium</li>
    <li><code>ic-l</code> &nbsp; | Large</li>
    <li><code>ic-xl</code> | Extra Large</li>
    </ul> <br>
<div class="js-icon ic-xs ic-dark"></div>
<div class="js-icon ic-s ic-dark"></div>
<div class="js-icon ic-m ic-dark"></div>
<div style="margin:0;" class="js-icon ic-lg ic-dark"></div>
<div class="js-icon ic-xl ic-dark"></div>

<hr>
<h3>Ubah Warna</h3>
Warna yang tersedia,
<ul>
	<li><code>ic-light</code> &nbsp; &nbsp; | &nbsp;putih (default)	</li>
	<li><code>ic-dark</code> &nbsp; &nbsp; &nbsp; | &nbsp;gelap	</li>
	<li><code>ic-warning</code>&nbsp;| &nbsp;kuning	</li>
	<li><code>ic-danger</code> &nbsp; | &nbsp;merah	</li>
	<li><code>ic-info</code> &nbsp; &nbsp; &nbsp; | &nbsp;biru	</li>
	<li><code>ic-success</code> | &nbsp;hijau	</li>
</ul><br>
<div class="js-icon ic-m ic-light"></div>
<div class="js-icon ic-m ic-dark"></div>
<div class="js-icon ic-m ic-warning"></div>
<div class="js-icon ic-m ic-danger"></div>
<div class="js-icon ic-m ic-info"></div>
<div class="js-icon ic-m ic-success"></div>
<i><h3 class="maaf">// Codename terinspirasi dari bootstrap.</h3></i>
<hr>

<h3>Custom CSS</h3>
Berikut CSS kustom yang bisa kamu pakai :
<ul>
	<li><code>Width</code> | Untuk ubah panjang ikon</li>
	<li><code>Height</code> | Untuk ubah lebar/tinggi ikon</li>
	<li><code>background</code> | Untuk ubah warna ikon</li>
</ul>
<h4>Contoh CSS :</h4>
 .kustom {<br>
&nbsp; width: 50px;<br>
&nbsp; height: 50px;<br>
&nbsp; background: #5B3088; <span class="comment"> &nbsp /*ini warna ungu*/</span><br>
 }<br>

<style>
	.kustom {
		width: 50px;
		height: 50px;
		background: #5B3088;
	}
</style>
<br>
<h4>Kode div:</h4>
&lt;div class="js-icon kustom"&gt;&lt;/div&gt;
<div class="js-icon kustom"></div>

<hr>

<!--
<h3>Uji Coba :</h3>
<input placeholder="<div class='js-icon ic-xl ic-warning'></div>" id="inputcoba">
<div class="pos-end">
<button onclick="coba()" class="btn-coba">Test</button></div>
<br>
<span id="output"></span>
<br>

<h4>Dengan Guide :</h4>
<p>Masukan nama ikon :</p>
<input placeholder="contoh: js-icon" id="inputcoba-nama"><br>
<p>Masukan ukuran :</p>
<input placeholder="contoh: ic-xl" id="inputcoba-ukuran"><br>
<p>Masukan warna :</p><input placeholder="contoh: ic-warning" id="inputcoba-warna"><br>
<button onclick="cobaGuided()" class="btn-coba">Test</button><br>
<span id="output-guided"></span> -->


<br><br><br>
  </div>`;

document.getElementById("docs").innerHTML = content;

function showdocs() {
  document.getElementById("howto").style.display = "block";
  document.getElementById("hidedocs-btn").style.display = "block";
  document.getElementById("showdocs-btn").style.display = "none";
  document.getElementById("konten-isi").style.display = "none";
}
function hidedocs() {
  document.getElementById("howto").style.display = "none";
  document.getElementById("hidedocs-btn").style.display = "none";
  document.getElementById("showdocs-btn").style.display = "block";
  document.getElementById("konten-isi").style.display = "block";
}
