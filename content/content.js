var content = `
<li onclick="copy(this)" class="fb-icon ic-l ic-dark"><a>fb-icon</a></li>
    <li onclick="copy(this)" class="wechat-icon ic-l ic-dark"><a>wechat-icon</a></li>
          <li onclick="copy(this)" class="messenger-icon ic-l ic-dark"><a>messenger-icon</a></li>
        <li onclick="copy(this)" class="twitter-icon ic-l ic-dark"><a>twitter-icon</a></li>
    <li onclick="copy(this)" class="wa-icon ic-l ic-dark"><a>wa-icon</a></li>
    <li onclick="copy(this)" class="twitterx-icon ic-l ic-dark"><a>twitterx-icon</a></li>
        <li onclick="copy(this)" class="line-icon ic-l ic-dark"><a>line-icon</a></li>
        <li onclick="copy(this)" class="ps1-icon ic-l ic-dark"><a>ps1-icon</a></li>
         <li onclick="copy(this)" class="google-icon ic-l ic-dark"><a>google-icon</a></li>
      <li onclick="copy(this)" class="blender-icon ic-l ic-dark"><a>blender-icon </a></li>
      <li onclick="copy(this)" class="steam-icon ic-l ic-dark"><a>steam-icon</a></li>
            <li onclick="copy(this)" class="libreoffice-icon ic-l ic-dark"><a>libreoffice-icon</a></li>
      <li onclick="copy(this)" class="microsoftoffice-icon ic-l ic-dark"><a>microsoftoffice-icon</a></li>
      <li onclick="copy(this)" class="apacheoffice-icon ic-l ic-dark"><a>apacheoffice-icon</a></li>
        <li onclick="copy(this)" class="firefox-icon ic-l ic-dark"><a>firefox-icon </a></li>
      <li onclick="copy(this)" class="tor-icon ic-l ic-dark"><a>tor-icon</a></li>
            <li onclick="copy(this)" class="chrome-icon ic-l ic-dark"><a>chrome-icon </a></li>
      <li onclick="copy(this)" class="psvita-icon ic-l ic-dark"><a>psvita-icon</a></li>
      <li onclick="copy(this)" class="ps2-icon ic-l ic-dark"><a>ps2-icon</a></li>
      <li onclick="copy(this)" class="ps3-icon ic-l ic-dark"><a>ps3-icon</a></li>
      <li onclick="copy(this)" class="ps4-icon ic-l ic-dark"><a>ps4-icon</a></li>
      <li onclick="copy(this)" class="ps5-icon ic-l ic-dark"><a>ps5-icon</a></li>
      <li onclick="copy(this)" class="wearos-icon ic-l ic-dark"><a>wearos-icon</a></li>
        <li onclick="copy(this)" class="html-icon ic-l ic-dark"><a>html-icon</a></li>
    <li onclick="copy(this)" class="css-icon ic-l ic-dark"><a>css-icon</a></li>
    <li onclick="copy(this)" class="js-icon ic-l ic-dark"><a>js-icon</a></li>
        <li onclick="copy(this)" class="nodejs-icon ic-l ic-dark"><a>nodejs-icon</a></li>
    <li onclick="copy(this)" class="npm-icon ic-l ic-dark"><a>npm-icon</a></li>
    <li onclick="copy(this)" class="vue-icon ic-l ic-dark"><a>vue-icon</a></li>
    <li onclick="copy(this)" class="angular-icon ic-l ic-dark"><a>angular-icon</a></li>
    <li onclick="copy(this)" class="ts-icon ic-l ic-dark"><a>ts-icon</a></li>
    <li onclick="copy(this)" class="json-icon ic-l ic-dark"><a>json-icon</a></li>
    <li onclick="copy(this)" class="nextjs-icon ic-l ic-dark"><a>nextjs-icon</a></li>
    <li onclick="copy(this)" class="tailwind-icon ic-l ic-dark"><a>tailwind-icon</a></li>
        <li onclick="copy(this)" class="nuxtjs-icon ic-l ic-dark"><a>nuxtjs-icon</a></li>
    <li onclick="copy(this)" class="react-icon ic-l ic-dark"><a>react-icon</a></li>
    
          <li onclick="copy(this)" class="less-icon ic-l ic-dark"><a>less-icon</a></li>
      <li onclick="copy(this)" class="sass-icon ic-l ic-dark"><a>sass-icon</a></li>
      <li onclick="copy(this)" class="env-icon ic-l ic-dark"><a>env-icon</a></li>
            <li onclick="copy(this)" class="manjaro-icon ic-l ic-dark"><a>manjaro-icon</a></li>
          <li onclick="copy(this)" class="git-icon ic-l ic-dark"><a>git</a></li>
    <li onclick="copy(this)" class="gitlab-icon ic-l ic-dark"><a>gitlab-icon</a></li>
    <li onclick="copy(this)" class="github-icon ic-l ic-dark"><a>github-icon</a></li>
<li onclick="copy(this)" class="mysql-icon ic-l ic-dark"><a>mysql-icon</a></li>
      <li onclick="copy(this)" class="mariadb-icon ic-l ic-dark"><a>mariadb-icon</a></li>
      <li onclick="copy(this)" class="sqlite-icon ic-l ic-dark"><a>sqlite-icon</a></li>
      <li onclick="copy(this)" class="postgres-icon ic-l ic-dark"><a>postgres-icon</a></li>
      <li onclick="copy(this)" class="md-icon ic-l ic-dark"><a>md-icon</a></li>
      <li onclick="copy(this)" class="apache-icon ic-l ic-dark"><a>apache-icon</a></li>
  <li onclick="copy(this)" class="gpay-icon ic-l ic-dark"><a>gpay-icon</a></li>
      <li onclick="copy(this)" class="paypal-icon ic-l ic-dark"><a>paypal-icon</a></li>
        <li onclick="copy(this)" class="svg-icon ic-l ic-dark"><a>svg-icon</a></li>
            <li onclick="copy(this)" class="googleplay-icon ic-l ic-dark"><a>googleplay-icon</a></li>
            <li onclick="copy(this)" class="yt-icon ic-l ic-dark"><a>yt-icon</a></li>
      <li onclick="copy(this)" class="ytmusic-icon ic-l ic-dark"><a>ytmusic-icon</a></li>
      `;
document.getElementById("konten1").innerHTML = content;

function show() {
  document.getElementById("konten1").style.display = "block";
  document.getElementById("maaf1").style.display = "block";
  document.getElementById("maaf").style.display = "none";
  document.getElementById("swipe").style.display = "none";
}
function back() {
  document.getElementById("konten1").style.display = "none";
  document.getElementById("maaf").style.display = "block";
  document.getElementById("maaf1").style.display = "none";
  document.getElementById("swipe").style.display = "block";
}
