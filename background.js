const formats={ //The first few bytes in each respective header
    png: "iVBORw0KGgo=",
    jpeg: "/9g=",
    gif: "R0lG",
    "svg+xml": "PA=="
};
const defaultFormat="png";

const bytesToBase64=byteArray=>
    btoa(byteArray.reduce((a,e)=>a+String.fromCharCode(e),""))

const getFormat=byteArray=>{
    for(let format in formats){
        let header=formats[format];
        
        if(bytesToBase64(byteArray.slice(0,atob(header).length))==header){
            return format;
        }
    }
    return defaultFormat;
};

browser.contextMenus.create({
    id: "copy-image-as-base64",
    title: "Copy image as base64",
    contexts: ["image"]
});

browser.contextMenus.onClicked.addListener(async (info,tab)=>{
    if(info.menuItemId!="copy-image-as-base64"){
        return;
    }

    let response=await fetch(info.srcUrl,{
        method:"GET",
        mode:"cors",
        cache:"default"
    });
    let arrayBuffer=await response.arrayBuffer();
    let bytes=[].slice.call(new Uint8Array(arrayBuffer));
    let base64=`data:image/${getFormat(bytes)};base64,`+bytesToBase64(bytes);

    navigator.clipboard.writeText(base64);

    return base64;
});