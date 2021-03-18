# qrcode-xt 

> fork of qrcodejs

adds fixes and webpack build

### npm

[https://www.npmjs.com/package/qrcode-xt]

### jsdelivr cdn 

[https://cdn.jsdelivr.net/npm/qrcode-xt@1.5.0/dist/qrcode.min.js](https://cdn.jsdelivr.net/npm/qrcode-xt@1.5.0/dist/qrcode.min.js)


```html
<script src="https://cdn.jsdelivr.net/npm/qrcode-xt@1.5.0/dist/qrcode.min.js"></script>
```


```html
<script src="https://cdn.jsdelivr.net/npm/backbone-metamask-bundle@1.0.0/bundle.min.js"></script>
```
## QRCode.js
QRCode.js is javascript library for making QRCode. QRCode.js supports Cross-browser with HTML5 Canvas and table tag in DOM.
QRCode.js has no dependencies.

Project forked by KeeeX Company from davidshimjs/qrcodejs, we fixed Code Length Overflow error, and cleaned up the repository.

## Basic Usages
```html
<div id="qrcode"></div>
<script type="text/javascript">
new QRCode(document.getElementById("qrcode"), "https://github.com/KeeeX/qrcodejs");
</script>
```

or with some options

```html
<div id="qrcode"></div>
<script type="text/javascript">
var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "https://github.com/KeeeX/qrcodejs",
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
</script>
```

and you can use some methods

```javascript
qrcode.clear(); // clear the code.
qrcode.makeCode("https://github.com/KeeeX"); // make another code.
```

### Using with webpack

```javascript
const QRCode = require("@keeex/qrcodejs-kx");
// Use QRCode as usual
```

## Browser Compatibility
IE6~10, Chrome, Firefox, Safari, Opera, Mobile Safari, Android, Windows Mobile, ETC.

## License
MIT License
