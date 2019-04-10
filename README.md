#Firefox - Copy image as Base64
This extension adds an option to the context menu when right-clicking on images to copy them to the clipboard in Base64 format. All images will work, but the primary supported formats are:

 - PNG
 - JPEG
 - GIF
 - SVG (svg+xml)

##Installation
- [Install on addons.mozilla.com](https://addons.mozilla.org/en-GB/firefox/addon/copy-image-as-base64)

##Demo
###Sample image
![Sample image](https://www.gnu.org/graphics/heckert_gnu.small.png)
###As Base64
```
data:image/png;base64,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
```

##Links
- [Github](https://github.com/SydLambert/firefox-img-base64)
- [addons.mozilla.com](https://addons.mozilla.org/en-GB/firefox/addon/copy-image-as-base64)