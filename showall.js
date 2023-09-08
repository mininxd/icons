var content = ` <div onclick="copy(this)" class="fb-icon ic-l ic-dark">fb-icon</div>
    <div onclick="copy(this)" class="wechat-icon ic-l ic-dark">wechat-icon</div>
          <div onclick="copy(this)" class="messenger-icon ic-l ic-dark">messenger-icon</div>
        <div onclick="copy(this)" class="twitter-icon ic-l ic-dark">
      twitter-icon
    </div>
    <div onclick="copy(this)" class="wa-icon ic-l ic-dark">wa-icon</div>
    
    <div onclick="copy(this)" class="twitterx-icon ic-l ic-dark">
      twitterx-icon
    </div>
        <div onclick="copy(this)" class="line-icon ic-l ic-dark">line-icon</div>
        <div onclick="copy(this)" class="ps1-icon ic-l ic-dark">ps1-icon</div>
         <div onclick="copy(this)" class="google-icon ic-l ic-dark">
        google-icon
      </div>
      <div onclick="copy(this)" class="blender-icon ic-l ic-dark">blender-icon </div>
      <div onclick="copy(this)" class="steam-icon ic-l ic-dark">steam-icon</div>
            <div onclick="copy(this)" class="libreoffice-icon ic-l ic-dark">
        libreoffice-icon
      </div>
      <div onclick="copy(this)" class="microsoftoffice-icon ic-l ic-dark">
        microsoftoffice-icon
      </div>
      <div onclick="copy(this)" class="apacheoffice-icon ic-l ic-dark">
        apacheoffice-icon
      </div>
        <div onclick="copy(this)" class="firefox-icon ic-l ic-dark">firefox-icon </div>
      <div onclick="copy(this)" class="tor-icon ic-l ic-dark">tor-icon</div>
            <div onclick="copy(this)" class="chrome-icon ic-l ic-dark">chrome-icon </div>
      <div onclick="copy(this)" class="psvita-icon ic-l ic-dark">psvita-icon</div>
      <div onclick="copy(this)" class="ps2-icon ic-l ic-dark">ps2-icon</div>
      <div onclick="copy(this)" class="ps3-icon ic-l ic-dark">ps3-icon</div>
      <div onclick="copy(this)" class="ps4-icon ic-l ic-dark">ps4-icon</div>
      <div onclick="copy(this)" class="ps5-icon ic-l ic-dark">ps5-icon</div>
      <div onclick="copy(this)" class="wearos-icon ic-l ic-dark">
        wearos-icon
      </div>
        <div onclick="copy(this)" class="html-icon ic-l ic-dark">html-icon</div>
    <div onclick="copy(this)" class="css-icon ic-l ic-dark">css-icon</div>
    <div onclick="copy(this)" class="js-icon ic-l ic-dark">js-icon</div>
        <div onclick="copy(this)" class="nodejs-icon ic-l ic-dark">nodejs-icon</div>
    <div onclick="copy(this)" class="npm-icon ic-l ic-dark">npm-icon</div>
    <div onclick="copy(this)" class="vue-icon ic-l ic-dark">vue-icon</div>
    <div onclick="copy(this)" class="angular-icon ic-l ic-dark">angular-icon</div>
    <div onclick="copy(this)" class="ts-icon ic-l ic-dark">ts-icon</div>
    <div onclick="copy(this)" class="json-icon ic-l ic-dark">json-icon</div>
    <div onclick="copy(this)" class="nextjs-icon ic-l ic-dark">nextjs-icon</div>
    <div onclick="copy(this)" class="tailwind-icon ic-l ic-dark">tailwind-icon</div>
        <div onclick="copy(this)" class="nuxtjs-icon ic-l ic-dark">nuxtjs-icon</div>
    <div onclick="copy(this)" class="react-icon ic-l ic-dark">react-icon</div>
    
          <div onclick="copy(this)" class="less-icon ic-l ic-dark">less-icon</div>
      <div onclick="copy(this)" class="sass-icon ic-l ic-dark">sass-icon</div>
      <div onclick="copy(this)" class="env-icon ic-l ic-dark">env-icon</div>
            <div onclick="copy(this)" class="manjaro-icon ic-l ic-dark">
        manjaro-icon
      </div>
          <div onclick="copy(this)" class="git-icon ic-l ic-dark">git</div>
    <div onclick="copy(this)" class="gitlab-icon ic-l ic-dark">gitlab-icon</div>
    <div onclick="copy(this)" class="github-icon ic-l ic-dark">github-icon</div>
<div onclick="copy(this)" class="mysql-icon ic-l ic-dark">mysql-icon</div>
      <div onclick="copy(this)" class="mariadb-icon ic-l ic-dark">
        mariadb-icon
      </div>
      <div onclick="copy(this)" class="sqlite-icon ic-l ic-dark">
        sqlite-icon
      </div>
      <div onclick="copy(this)" class="postgres-icon ic-l ic-dark">
        postgres-icon
      </div>
      <div onclick="copy(this)" class="md-icon ic-l ic-dark">md-icon</div>
      <div onclick="copy(this)" class="apache-icon ic-l ic-dark">
        apache-icon
      </div>
  <div onclick="copy(this)" class="gpay-icon ic-l ic-dark">gpay-icon</div>
      <div onclick="copy(this)" class="paypal-icon ic-l ic-dark">
        paypal-icon
      </div>
        <div onclick="copy(this)" class="svg-icon ic-l ic-dark">svg-icon</div>
            <div onclick="copy(this)" class="googleplay-icon ic-l ic-dark">
        googleplay-icon
      </div>
            <div onclick="copy(this)" class="yt-icon ic-l ic-dark">yt-icon</div>
      <div onclick="copy(this)" class="ytmusic-icon ic-l ic-dark">
        ytmusic-icon
      </div>
      `;
document.getElementById("allcontent").innerHTML = content;

function show() {
  document.getElementById("allcontent").style.display = "block";
  document.getElementById("maaf1").style.display = "block";
  document.getElementById("maaf").style.display = "none";
  document.getElementById("swipe").style.display = "none";
}
function back() {
  document.getElementById("allcontent").style.display = "none";
  document.getElementById("maaf").style.display = "block";
  document.getElementById("maaf1").style.display = "none";
  document.getElementById("swipe").style.display = "block";
}
