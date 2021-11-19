(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{219:function(l,t,e){var content=e(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[l.i,content,""]]),content.locals&&(l.exports=content.locals);(0,e(69).default)("bad8e090",content,!0,{sourceMap:!1})},220:function(l,t,e){"use strict";e.r(t);e(26),e(67);var v={data:function(){return{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///38ACfsD/QVDRcoAAAAASUVORK5CYII=",hexagon:null}},mounted:function(){var image=new Image;image.src="/hexagon.png",this.hexagon=image;var l=this.$refs.outputCanvas.getContext("2d");image.onload=function(){l.drawImage(image,0,0,250,250)}},methods:{imageChange:function(l){var t=this,e=this,v=l.target.files||l.dataTransfer.files;if(v.length){var n=v[0],r=new FileReader;r.onload=function(l){e.image=l.target.result,t.generateImage()},r.readAsDataURL(n)}},generateImage:function(){var l=this.$refs.outputCanvas.getContext("2d");l.globalCompositeOperation="source-over",l.drawImage(this.hexagon,0,0,250,250),l.globalCompositeOperation="source-in";var image=new Image;image.onload=function(){l.drawImage(image,0,0,250,250)},image.src=this.image},downloadImage:function(){var l=this.$refs.outputCanvas.toDataURL("image/png").replace("image/png","image/octet-stream"),link=document.createElement("a");link.download="nft-avatar.png",link.href=l,link.click()}}},n=e(51),component=Object(n.a)(v,(function(){var l=this,t=l.$createElement,e=l._self._c||t;return e("div",{staticClass:"flex flex-col md:flex-row items-center justify-center"},[e("div",{staticClass:"flex flex-col justify-center items-center px-4"},[e("p",{staticClass:"text-yellow-400 font-semibold text-xl mb-2"},[l._v("upload")]),l._v(" "),e("div",{staticClass:"border border-dashed border-yellow-300 p-5 md:mx-8 text-white rounded-md w-96 backdrop-filter backdrop-blur-md"},[e("div",{staticClass:"container flex flex-col items-center"},[e("img",{ref:"uploadPreview",staticClass:"w-32 h-32 object-contain mb-4 rounded-full",attrs:{src:l.image}}),l._v(" "),e("input",{ref:"uploadFile",staticClass:"flex flex-row items-center justify-center",attrs:{type:"file",accept:"image/*"},on:{change:l.imageChange}})])])]),l._v(" "),e("div",{staticClass:"flex flex-col justify-center items-center px-4 mt-8 md:mt-0"},[e("p",{staticClass:"text-yellow-400 font-semibold text-xl mb-2"},[l._v("output")]),l._v(" "),e("div",{staticClass:"border border-dashed border-yellow-300 p-5 md:mx-8 text-white rounded-md w-96 backdrop-filter backdrop-blur-md"},[e("div",{staticClass:"container flex flex-col items-center"},[e("canvas",{ref:"outputCanvas",staticClass:"mb-4 w-32 h-32",attrs:{width:"250",height:"250"}}),l._v(" "),e("a",{ref:"downloadButton",staticClass:"border-yellow-300 border-2 rounded-lg py-1 px-2 duration-200 hover:bg-yellow-300 hover:text-black font-semibold cursor-pointer",on:{click:l.downloadImage}},[l._v("Download Image")])])])])])}),[],!1,null,null,null);t.default=component.exports},221:function(l,t,e){"use strict";e(219)},222:function(l,t,e){var v=e(68)((function(i){return i[1]}));v.push([l.i,"/*purgecss start ignore*/\nbody{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='560' preserveAspectRatio='none'%3E%3Cg mask='url(%26quot;%23SvgjsMask1097%26quot;)' fill='none'%3E%3Cpath fill='rgba(21, 32, 43, 1)' d='M0 0h1440v560H0z'/%3E%3Cpath d='M31.04-.56l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm0 468l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm67.55-234l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm33.78 58.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm-33.78 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm33.78 58.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm33.77-175.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm33.78 58.5l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm-33.78 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm33.78 58.5l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm-33.78 175.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm101.33-526.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm-33.77 58.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm33.77 175.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm0 117l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm0 117l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm67.55-468l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm-33.77 58.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm33.77 292.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm-33.77 58.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm33.77 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zM368.8-.56l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm67.55 0l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm33.78 175.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm0 234l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm-33.78 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm67.55-468l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm33.78 58.5l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm0 234l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zM571.46-.56l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm0 234l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm101.32-58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm-33.77 58.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm33.77 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm-33.77 58.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm0 234l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm67.55-585l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm33.77 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm-33.77 409.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm67.55-468l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm33.78 292.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm0 117l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zM841.66-.56l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm0 234l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm101.33-175.5l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm-33.78 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm0 234l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm0 117l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm33.78 58.5l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zM976.77-.56l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm33.77 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm0 117l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm0 234l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm67.55-117l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm-33.77 58.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm33.77 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm-33.77 175.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm67.55-585l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm33.78 175.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm-33.78 58.5l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm33.78 58.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm0 117l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm67.55-351l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm0 117l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm-33.78 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm0 234l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm33.78 58.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm67.55-468l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm-33.78 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm33.78 175.5l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm-33.78 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm67.56-351l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm33.77 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm0 234l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm67.55 117l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm-33.77 58.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm33.77 58.5l33.78 19.5v39l-33.78 19.5-33.77-19.5v-39zm33.78-409.5l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm0 117l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39zm33.78 175.5l33.77 19.5v39l-33.77 19.5-33.78-19.5v-39zm-33.78 58.5l33.78 19.5v39l-33.78 19.5-33.78-19.5v-39z' stroke='url(%23SvgjsLinearGradient1098)' stroke-width='2'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient x1='220.032' y1='-220.024' x2='1219.968' y2='780.024' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1098'%3E%3Cstop stop-color='%230e2a47' offset='0'/%3E%3Cstop stop-color='rgba(0, 69, 158, 1)' offset='1'/%3E%3C/linearGradient%3E%3Cmask id='SvgjsMask1097'%3E%3Cpath fill='%23fff' d='M0 0h1440v560H0z'/%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E\");\n  background-repeat:no-repeat;\n  background-size:cover;\n  background-attachment:fixed;\n  font-family:\"Roboto\",sans-serif\n}\n\n/*purgecss end ignore*/",""]),v.locals={},l.exports=v},223:function(l,t,e){"use strict";e.r(t);var v=e(2).a.extend({}),n=(e(221),e(51)),component=Object(n.a)(v,(function(){var l=this,t=l.$createElement,e=l._self._c||t;return e("div",[e("div",{staticClass:"mb-8"},[e("div",{staticClass:"max-w-5xl mx-auto mt-14"},[l._m(0),l._v(" "),e("ImageEditor")],1)])])}),[function(){var l=this,t=l.$createElement,e=l._self._c||t;return e("div",{staticClass:"text-white text-center my-8"},[e("h1",{staticClass:"font-bold text-4xl"},[l._v("Fake Twitter NFT Avatar")]),l._v(" "),e("p",{staticClass:"font-semibold text-xl"},[l._v("Give your profile picture a hexagonal shape!")]),l._v(" "),e("p",{staticClass:"text-md mt-1"},[l._v("\n          Open source on "),e("a",{staticClass:"text-blue-500 hover:text-blue-600 transition duration-50",attrs:{href:"https://github.com/tandpfun/nft-avatar",target:"_blank"}},[l._v("GitHub")]),l._v(". Made by\n          "),e("a",{staticClass:"text-blue-500 hover:text-blue-600 transition duration-50",attrs:{href:"https://twitter.com/cdngdev",target:"_blank"}},[l._v("@cdngdev")]),l._v(".\n        ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ImageEditor:e(220).default})}}]);