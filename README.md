# MININXD ICONS
#### Sekumpulan icon gratis dan ringan (lightweight)
### [Baca Dokumentasi](https://icons.mininxd.my.id/)

---

### Cara submit icons buatanmu sendiri
__Step 1 :__

Upload icon kamu [disini](https://github.com/MininxD/icons/tree/main/icons/community_icons)

__Step 2 :__

tambahkan baris CSS baru [disini](https://github.com/MininxD/icons/blob/main/css/community.css), <br>
berikut adalah contoh kode CSS yang bisa kamu tambahkan
```css
.youricon-icon {
  background-size: cover;
  background-color: white;
  -webkit-mask: url("/icons/community_icons/youricon.svg") no-repeat center;
  mask: url("/icons/community_icons/youricon.svg") no-repeat center;
}
```

__Step 3 :__

Tambahkan tag HTML pada kode javascript [disini](https://github.com/MininxD/icons/edit/main/src/community.js)
```html
<li 
   onclick="copy(this)"
   class="youricon-icon ic-l ic-dark">
<a>youricon-icon</a>
</li>
```

---

Setelah selesai kamu bisa pull request, setelah saya ACC kamu langsung bisa pakai icons kamu
```html
<div class="youricon-icon
             ukuran
             atribut-warna">
</div>
```
contoh :
```html
<div class="js-icon
             ic-xl
             ic-light">
</div>
```
informasi selengkapnya seperti ukuran dan atribut warna bisa cek [Disini](https://icons.mininxd.my.id)

---

[![Donate - Saweria](https://img.shields.io/badge/Donate-Saweria-2ea44f?style=for-the-badge)](https://saweria.co/mininxd)
