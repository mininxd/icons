# MININXD ICONS
#### Sekumpulan icon gratis dan ringan (lightweight)
### [Baca Dokumentasi](https://twitter.com/rikschennink/)

---

### Cara submit icons buatanmu sendiri
##### Step 1 :
Upload logo kamu [disini](https://github.com/MininxD/icons/tree/main/icons/community_icons)

##### Step 2 :
tambahkan baris CSS baru [disini](https://github.com/MininxD/icons/blob/main/css/community.css)
berikut adalah contoh kode CSS yang bisa kamu tambahkan
```css
.youricon-icon {
  background-size: cover;
  background-color: white;
  -webkit-mask: url("/icons/youricon.svg") no-repeat center;
  mask: url("/icons/youricon.svg") no-repeat center;
}
```

###### Step 3 :

Tambahkan tag HTML pada kode javascript [disini](https://github.com/MininxD/icons/edit/main/src/community.js)
```html
<li 
   onclick="copy(this)"
   class="yourlogo-icon ic-l ic-dark">
<a>yourlogo-icon</a>
</li>
```
