parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";document.addEventListener("click",function(t){var e=document.querySelector(".spider"),i=document.querySelector(".wall");if(t.target===i){var d=e.getBoundingClientRect(),h=i.getBoundingClientRect(),n=parseInt(getComputedStyle(i).getPropertyValue("border-top-width")),l=t.clientX-h.left-n,r=t.clientY-h.top-n-d.width/2,o=l-d.height/2;r<0?r=0:r>h.height-n-d.height-n&&(r=h.height-n-d.height-n),o<0?o=0:o>h.width-n-d.width-n&&(o=h.width-n-d.width-n),e.style.top=r+"px",e.style.left=o+"px"}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.8de34325.js.map