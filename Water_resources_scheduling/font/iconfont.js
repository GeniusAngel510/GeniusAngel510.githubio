(function(window){var svgSprite='<svg><symbol id="icon-xiazai" viewBox="0 0 1024 1024"><path d="M767.784 432.707H574.758V48.628H447.744l-0.996 384.577H256.72l255.285 384.549z" fill="#0097E2" ></path><path d="M895.795 623.729v257.033H126.706V623.729H0v384.89h1024v-384.89z" fill="#0097E2" ></path></symbol><symbol id="icon-dayin" viewBox="0 0 1024 1024"><path d="M314.181818 670.254545h393.309091v79.127273h-393.309091v-79.127273z m0 116.363637h276.945455v79.127273h-276.945455v-79.127273z m619.054546-474.763637h-65.163637v-221.090909c0-51.2-41.890909-90.763636-90.763636-90.763636h-528.290909c-51.2 0-90.763636 41.890909-90.763637 90.763636v221.090909h-65.163636c-51.2 0-90.763636 41.890909-90.763636 90.763637v293.236363c0 51.2 41.890909 90.763636 90.763636 90.763637h65.163636v146.618182c0 51.2 41.890909 90.763636 90.763637 90.763636h528.290909c51.2 0 90.763636-41.890909 90.763636-90.763636v-146.618182h65.163637c51.2 0 90.763636-41.890909 90.763636-90.763637v-293.236363c0-48.872727-41.890909-90.763636-90.763636-90.763637z m-698.181819-195.490909c0-20.945455 16.290909-39.563636 39.563637-39.563636h472.436363c20.945455 0 39.563636 16.290909 39.563637 39.563636v195.490909h-549.236364v-195.490909z m551.563637 788.945455c0 20.945455-16.290909 39.563636-39.563637 39.563636h-474.763636c-20.945455 0-39.563636-16.290909-39.563636-39.563636v-314.181818h551.563636v314.181818z m60.509091-393.309091c-32.581818 0-58.181818-25.6-58.181818-58.181818s25.6-58.181818 58.181818-58.181818 58.181818 25.6 58.181818 58.181818-25.6 58.181818-58.181818 58.181818z" fill="#179FF4" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)