/*! For license information please see scripts-bundled.574155cd229deb1654b1.js.LICENSE */
!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){document.querySelector("#save").addEventListener("click",(function(t){t.preventDefault();var e=document.querySelector("#teams"),n=Array.from(e.childNodes),o=[];n.forEach((function(t){t.textContent.includes("\n")||o.push(t.textContent)}));var r=new FormData;r.append("tabell",o);var i={method:"POST",body:r},a=document.querySelector("#message");fetch(".",i).then((function(t){return t.json()})).then((function(t){a.innerHTML="Din kupong har blitt lagret",a.style.opacity=1,setTimeout((function(){a.style.opacity=0}),4e3)}))}))},function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){r(t,e,n[e])}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.r(e);function s(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var c=s(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),u=s(/Edge/i),d=s(/firefox/i),h=s(/safari/i)&&!s(/chrome/i)&&!s(/android/i),f=s(/iP(ad|od|hone)/i),p=s(/chrome/i)&&s(/android/i),g={capture:!1,passive:!1};function v(t,e,n){t.addEventListener(e,n,!c&&g)}function m(t,e,n){t.removeEventListener(e,n,!c&&g)}function b(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function y(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function w(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&b(t,e):b(t,e))||o&&t===n)return t;if(t===n)break}while(t=y(t))}return null}var E,_=/\s+/g;function S(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(_," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(_," ")}}function D(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function T(t,e){var n="";if("string"==typeof t)n=t;else do{var o=D(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix;return r&&new r(n)}function C(t,e,n){if(t){var o=t.getElementsByTagName(e),r=0,i=o.length;if(n)for(;r<i;r++)n(o[r],r);return o}return[]}function x(){return c?document.documentElement:document.scrollingElement}function O(t,e,n,o,r){if(t.getBoundingClientRect||t===window){var i,a,l,s,u,d,h;if(t!==window&&t!==x()?(a=(i=t.getBoundingClientRect()).top,l=i.left,s=i.bottom,u=i.right,d=i.height,h=i.width):(a=0,l=0,s=window.innerHeight,u=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(r=r||t.parentNode,!c))do{if(r&&r.getBoundingClientRect&&("none"!==D(r,"transform")||n&&"static"!==D(r,"position"))){var f=r.getBoundingClientRect();a-=f.top+parseInt(D(r,"border-top-width")),l-=f.left+parseInt(D(r,"border-left-width")),s=a+i.height,u=l+i.width;break}}while(r=r.parentNode);if(o&&t!==window){var p=T(r||t),g=p&&p.a,v=p&&p.d;p&&(s=(a/=v)+(d/=v),u=(l/=g)+(h/=g))}return{top:a,left:l,bottom:s,right:u,width:h,height:d}}}function M(t,e,n){for(var o=k(t,!0),r=O(t)[e];o;){var i=O(o)[n];if(!("top"===n||"left"===n?r>=i:r<=i))return o;if(o===x())break;o=k(o,!1)}return!1}function I(t,e,n){for(var o=0,r=0,i=t.children;r<i.length;){if("none"!==i[r].style.display&&i[r]!==Rt.ghost&&i[r]!==Rt.dragged&&w(i[r],n.draggable,t,!1)){if(o===e)return i[r];o++}r++}return null}function P(t,e){for(var n=t.lastElementChild;n&&(n===Rt.ghost||"none"===D(n,"display")||e&&!b(n,e));)n=n.previousElementSibling;return n||null}function N(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Rt.clone||e&&!b(t,e)||n++;return n}function A(t){var e=0,n=0,o=x();if(t)do{var r=T(t),i=r.a,a=r.d;e+=t.scrollLeft*i,n+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,n]}function k(t,e){if(!t||!t.getBoundingClientRect)return x();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var r=D(n);if(n.clientWidth<n.scrollWidth&&("auto"==r.overflowX||"scroll"==r.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==r.overflowY||"scroll"==r.overflowY)){if(!n.getBoundingClientRect||n===document.body)return x();if(o||e)return n;o=!0}}}while(n=n.parentNode);return x()}function X(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function Y(t,e){return function(){if(!E){var n=arguments,o=this;1===n.length?t.call(o,n[0]):t.apply(o,n),E=setTimeout((function(){E=void 0}),e)}}}function R(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function B(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}var F="Sortable"+(new Date).getTime();function j(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==D(t,"display")&&t!==Rt.ghost){e.push({target:t,rect:O(t)});var n=a({},e[e.length-1].rect);if(t.thisAnimationDuration){var o=T(t,!0);o&&(n.top-=o.f,n.left-=o.e)}t.fromRect=n}}))},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(e,{target:t}),1)},animateAll:function(n){var o=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof n&&n());var r=!1,i=0;e.forEach((function(t){var e=0,n=t.target,a=n.fromRect,l=O(n),s=n.prevFromRect,c=n.prevToRect,u=t.rect,d=T(n,!0);d&&(l.top-=d.f,l.left-=d.e),n.toRect=l,n.thisAnimationDuration&&X(s,l)&&!X(a,l)&&(u.top-l.top)/(u.left-l.left)==(a.top-l.top)/(a.left-l.left)&&(e=function(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}(u,s,c,o.options)),X(l,a)||(n.prevFromRect=a,n.prevToRect=l,e||(e=o.options.animation),o.animate(n,u,l,e)),e&&(r=!0,i=Math.max(i,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout((function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null}),e),n.thisAnimationDuration=e)})),clearTimeout(t),r?t=setTimeout((function(){"function"==typeof n&&n()}),i):"function"==typeof n&&n(),e=[]},animate:function(t,e,n,o){if(o){D(t,"transition",""),D(t,"transform","");var r=T(this.el),i=r&&r.a,a=r&&r.d,l=(e.left-n.left)/(i||1),s=(e.top-n.top)/(a||1);t.animatingX=!!l,t.animatingY=!!s,D(t,"transform","translate3d("+l+"px,"+s+"px,0)"),function(t){t.offsetWidth}(t),D(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),D(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){D(t,"transition",""),D(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),o)}}}}var H=[],L={initializeByDefault:!0},W={mount:function(t){for(var e in L)!L.hasOwnProperty(e)||e in t||(t[e]=L[e]);H.push(t)},pluginEvent:function(t,e,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var r=t+"Global";H.forEach((function(o){e[o.pluginName]&&(e[o.pluginName][r]&&e[o.pluginName][r](a({sortable:e},n)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](a({sortable:e},n)))}))},initializePlugins:function(t,e,n,o){for(var r in H.forEach((function(o){var r=o.pluginName;if(t.options[r]||o.initializeByDefault){var a=new o(t,e,t.options);a.sortable=t,a.options=t.options,t[r]=a,i(n,a.defaults)}})),t.options)if(t.options.hasOwnProperty(r)){var a=this.modifyOption(t,r,t.options[r]);void 0!==a&&(t.options[r]=a)}},getEventProperties:function(t,e){var n={};return H.forEach((function(o){"function"==typeof o.eventProperties&&i(n,o.eventProperties.call(e[o.pluginName],t))})),n},modifyOption:function(t,e,n){var o;return H.forEach((function(r){t[r.pluginName]&&r.optionListeners&&"function"==typeof r.optionListeners[e]&&(o=r.optionListeners[e].call(t[r.pluginName],n))})),o}};function z(t){var e=t.sortable,n=t.rootEl,o=t.name,r=t.targetEl,i=t.cloneEl,l=t.toEl,s=t.fromEl,d=t.oldIndex,h=t.newIndex,f=t.oldDraggableIndex,p=t.newDraggableIndex,g=t.originalEvent,v=t.putSortable,m=t.extraEventProperties;if(e=e||n&&n[F]){var b,y=e.options,w="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||c||u?(b=document.createEvent("Event")).initEvent(o,!0,!0):b=new CustomEvent(o,{bubbles:!0,cancelable:!0}),b.to=l||n,b.from=s||n,b.item=r||n,b.clone=i,b.oldIndex=d,b.newIndex=h,b.oldDraggableIndex=f,b.newDraggableIndex=p,b.originalEvent=g,b.pullMode=v?v.lastPutMode:void 0;var E=a({},m,W.getEventProperties(o,e));for(var _ in E)b[_]=E[_];n&&n.dispatchEvent(b),y[w]&&y[w].call(e,b)}}var q=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.evt,r=l(n,["evt"]);W.pluginEvent.bind(Rt)(t,e,a({dragEl:U,parentEl:V,ghostEl:Z,rootEl:K,nextEl:Q,lastDownEl:$,cloneEl:J,cloneHidden:tt,dragStarted:ft,putSortable:at,activeSortable:Rt.active,originalEvent:o,oldIndex:et,oldDraggableIndex:ot,newIndex:nt,newDraggableIndex:rt,hideGhostForTarget:At,unhideGhostForTarget:kt,cloneNowHidden:function(){tt=!0},cloneNowShown:function(){tt=!1},dispatchSortableEvent:function(t){G({sortable:e,name:t,originalEvent:o})}},r))};function G(t){z(a({putSortable:at,cloneEl:J,targetEl:U,rootEl:K,oldIndex:et,oldDraggableIndex:ot,newIndex:nt,newDraggableIndex:rt},t))}var U,V,Z,K,Q,$,J,tt,et,nt,ot,rt,it,at,lt,st,ct,ut,dt,ht,ft,pt,gt,vt,mt,bt=!1,yt=!1,wt=[],Et=!1,_t=!1,St=[],Dt=!1,Tt=[],Ct="undefined"!=typeof document,xt=f,Ot=u||c?"cssFloat":"float",Mt=Ct&&!p&&!f&&"draggable"in document.createElement("div"),It=function(){if(Ct){if(c)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Pt=function(t,e){var n=D(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=I(t,0,e),i=I(t,1,e),a=r&&D(r),l=i&&D(i),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+O(r).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+O(i).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right";return!i||"both"!==l.clear&&l.clear!==u?"horizontal":"vertical"}return r&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||s>=o&&"none"===n[Ot]||i&&"none"===n[Ot]&&s+c>o)?"vertical":"horizontal"},Nt=function(t){function e(t,n){return function(o,r,i,a){var l=o.options.group.name&&r.options.group.name&&o.options.group.name===r.options.group.name;if(null==t&&(n||l))return!0;if(null==t||!1===t)return!1;if(n&&"clone"===t)return t;if("function"==typeof t)return e(t(o,r,i,a),n)(o,r,i,a);var s=(n?o:r).options.group.name;return!0===t||"string"==typeof t&&t===s||t.join&&t.indexOf(s)>-1}}var n={},r=t.group;r&&"object"==o(r)||(r={name:r}),n.name=r.name,n.checkPull=e(r.pull,!0),n.checkPut=e(r.put),n.revertClone=r.revertClone,t.group=n},At=function(){!It&&Z&&D(Z,"display","none")},kt=function(){!It&&Z&&D(Z,"display","")};Ct&&document.addEventListener("click",(function(t){if(yt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),yt=!1,!1}),!0);var Xt=function(t){if(U){var e=function(t,e){var n;return wt.some((function(o){if(!P(o)){var r=O(o),i=o[F].options.emptyInsertThreshold,a=t>=r.left-i&&t<=r.right+i,l=e>=r.top-i&&e<=r.bottom+i;return i&&a&&l?n=o:void 0}})),n}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[F]._onDragOver(n)}}},Yt=function(t){U&&U.parentNode[F]._isOutsideThisEl(t.target)};function Rt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=i({},e),t[F]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Pt(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Rt.supportPointer&&"PointerEvent"in window,emptyInsertThreshold:5};for(var o in W.initializePlugins(this,t,n),n)!(o in e)&&(e[o]=n[o]);for(var r in Nt(e),this)"_"===r.charAt(0)&&"function"==typeof this[r]&&(this[r]=this[r].bind(this));this.nativeDraggable=!e.forceFallback&&Mt,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?v(t,"pointerdown",this._onTapStart):(v(t,"mousedown",this._onTapStart),v(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(v(t,"dragover",this),v(t,"dragenter",this)),wt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),i(this,j())}function Bt(t,e,n,o,r,i,a,l){var s,d,h=t[F],f=h.options.onMove;return!window.CustomEvent||c||u?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=r||e,s.relatedRect=i||O(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),f&&(d=f.call(h,s,a)),d}function Ft(t){t.draggable=!1}function jt(){Dt=!1}function Ht(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function Lt(t){return setTimeout(t,0)}function Wt(t){return clearTimeout(t)}Rt.prototype={constructor:Rt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(pt=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,U):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,n=this.el,o=this.options,r=o.preventOnFilter,i=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,l=(a||t).target,s=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,c=o.filter;if(function(t){Tt.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&Tt.push(o)}}(n),!U&&!(/mousedown|pointerdown/.test(i)&&0!==t.button||o.disabled||s.isContentEditable||(l=w(l,o.draggable,n,!1))&&l.animated||$===l)){if(et=N(l),ot=N(l,o.draggable),"function"==typeof c){if(c.call(this,t,l,this))return G({sortable:e,rootEl:s,name:"filter",targetEl:l,toEl:n,fromEl:n}),q("filter",e,{evt:t}),void(r&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(o){if(o=w(s,o.trim(),n,!1))return G({sortable:e,rootEl:o,name:"filter",targetEl:l,fromEl:n,toEl:n}),q("filter",e,{evt:t}),!0}))))return void(r&&t.cancelable&&t.preventDefault());o.handle&&!w(s,o.handle,n,!1)||this._prepareDragStart(t,a,l)}}},_prepareDragStart:function(t,e,n){var o,r=this,i=r.el,a=r.options,l=i.ownerDocument;if(n&&!U&&n.parentNode===i){var s=O(n);if(K=i,V=(U=n).parentNode,Q=U.nextSibling,$=n,it=a.group,Rt.dragged=U,lt={target:U,clientX:(e||t).clientX,clientY:(e||t).clientY},dt=lt.clientX-s.left,ht=lt.clientY-s.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,U.style["will-change"]="all",o=function(){q("delayEnded",r,{evt:t}),Rt.eventCanceled?r._onDrop():(r._disableDelayedDragEvents(),!d&&r.nativeDraggable&&(U.draggable=!0),r._triggerDragStart(t,e),G({sortable:r,name:"choose",originalEvent:t}),S(U,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){C(U,t.trim(),Ft)})),v(l,"dragover",Xt),v(l,"mousemove",Xt),v(l,"touchmove",Xt),v(l,"mouseup",r._onDrop),v(l,"touchend",r._onDrop),v(l,"touchcancel",r._onDrop),d&&this.nativeDraggable&&(this.options.touchStartThreshold=4,U.draggable=!0),q("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(u||c))o();else{if(Rt.eventCanceled)return void this._onDrop();v(l,"mouseup",r._disableDelayedDrag),v(l,"touchend",r._disableDelayedDrag),v(l,"touchcancel",r._disableDelayedDrag),v(l,"mousemove",r._delayedDragTouchMoveHandler),v(l,"touchmove",r._delayedDragTouchMoveHandler),a.supportPointer&&v(l,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){U&&Ft(U),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;m(t,"mouseup",this._disableDelayedDrag),m(t,"touchend",this._disableDelayedDrag),m(t,"touchcancel",this._disableDelayedDrag),m(t,"mousemove",this._delayedDragTouchMoveHandler),m(t,"touchmove",this._delayedDragTouchMoveHandler),m(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?v(document,"pointermove",this._onTouchMove):v(document,e?"touchmove":"mousemove",this._onTouchMove):(v(U,"dragend",this),v(K,"dragstart",this._onDragStart));try{document.selection?Lt((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(bt=!1,K&&U){q("dragStarted",this,{evt:e}),this.nativeDraggable&&v(document,"dragover",Yt);var n=this.options;!t&&S(U,n.dragClass,!1),S(U,n.ghostClass,!0),Rt.active=this,t&&this._appendGhost(),G({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(st){this._lastX=st.clientX,this._lastY=st.clientY,At();for(var t=document.elementFromPoint(st.clientX,st.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(st.clientX,st.clientY))!==e;)e=t;if(U.parentNode[F]._isOutsideThisEl(t),e)do{if(e[F]){if(e[F]._onDragOver({clientX:st.clientX,clientY:st.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);kt()}},_onTouchMove:function(t){if(lt){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,r=t.touches?t.touches[0]:t,i=Z&&T(Z),a=Z&&i&&i.a,l=Z&&i&&i.d,s=xt&&mt&&A(mt),c=(r.clientX-lt.clientX+o.x)/(a||1)+(s?s[0]-St[0]:0)/(a||1),u=(r.clientY-lt.clientY+o.y)/(l||1)+(s?s[1]-St[1]:0)/(l||1);if(!Rt.active&&!bt){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(Z){i?(i.e+=c-(ct||0),i.f+=u-(ut||0)):i={a:1,b:0,c:0,d:1,e:c,f:u};var d="matrix(".concat(i.a,",").concat(i.b,",").concat(i.c,",").concat(i.d,",").concat(i.e,",").concat(i.f,")");D(Z,"webkitTransform",d),D(Z,"mozTransform",d),D(Z,"msTransform",d),D(Z,"transform",d),ct=c,ut=u,st=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Z){var t=this.options.fallbackOnBody?document.body:K,e=O(U,!0,xt,!0,t),n=this.options;if(xt){for(mt=t;"static"===D(mt,"position")&&"none"===D(mt,"transform")&&mt!==document;)mt=mt.parentNode;mt!==document.body&&mt!==document.documentElement?(mt===document&&(mt=x()),e.top+=mt.scrollTop,e.left+=mt.scrollLeft):mt=x(),St=A(mt)}S(Z=U.cloneNode(!0),n.ghostClass,!1),S(Z,n.fallbackClass,!0),S(Z,n.dragClass,!0),D(Z,"transition",""),D(Z,"transform",""),D(Z,"box-sizing","border-box"),D(Z,"margin",0),D(Z,"top",e.top),D(Z,"left",e.left),D(Z,"width",e.width),D(Z,"height",e.height),D(Z,"opacity","0.8"),D(Z,"position",xt?"absolute":"fixed"),D(Z,"zIndex","100000"),D(Z,"pointerEvents","none"),Rt.ghost=Z,t.appendChild(Z),D(Z,"transform-origin",dt/parseInt(Z.style.width)*100+"% "+ht/parseInt(Z.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,r=n.options;q("dragStart",this,{evt:t}),Rt.eventCanceled?this._onDrop():(q("setupClone",this),Rt.eventCanceled||((J=B(U)).draggable=!1,J.style["will-change"]="",this._hideClone(),S(J,this.options.chosenClass,!1),Rt.clone=J),n.cloneId=Lt((function(){q("clone",n),Rt.eventCanceled||(n.options.removeCloneOnHide||K.insertBefore(J,U),n._hideClone(),G({sortable:n,name:"clone"}))})),!e&&S(U,r.dragClass,!0),e?(yt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(m(document,"mouseup",n._onDrop),m(document,"touchend",n._onDrop),m(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",r.setData&&r.setData.call(n,o,U)),v(document,"drop",n),D(U,"transform","translateZ(0)")),bt=!0,n._dragStartId=Lt(n._dragStarted.bind(n,e,t)),v(document,"selectstart",n),ft=!0,h&&D(document.body,"user-select","none"))},_onDragOver:function(t){var e,n,o,r,i=this.el,l=t.target,s=this.options,c=s.group,u=Rt.active,d=it===c,h=s.sort,f=at||u,p=this,g=!1;if(!Dt){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),l=w(l,s.draggable,i,!0),Y("dragOver"),Rt.eventCanceled)return g;if(U.contains(t.target)||l.animated&&l.animatingX&&l.animatingY||p._ignoreWhileAnimating===l)return j(!1);if(yt=!1,u&&!s.disabled&&(d?h||(o=!K.contains(U)):at===this||(this.lastPutMode=it.checkPull(this,u,U,t))&&c.checkPut(this,u,U,t))){if(r="vertical"===this._getDirection(t,l),e=O(U),Y("dragOverValid"),Rt.eventCanceled)return g;if(o)return V=K,B(),this._hideClone(),Y("revert"),Rt.eventCanceled||(Q?K.insertBefore(U,Q):K.appendChild(U)),j(!0);var v=P(i,s.draggable);if(!v||function(t,e,n){var o=O(P(n.el,n.options.draggable));return e?t.clientX>o.right+10||t.clientX<=o.right&&t.clientY>o.bottom&&t.clientX>=o.left:t.clientX>o.right&&t.clientY>o.top||t.clientX<=o.right&&t.clientY>o.bottom+10}(t,r,this)&&!v.animated){if(v===U)return j(!1);if(v&&i===t.target&&(l=v),l&&(n=O(l)),!1!==Bt(K,i,U,e,l,n,t,!!l))return B(),i.appendChild(U),V=i,H(),j(!0)}else if(l.parentNode===i){n=O(l);var m,b,y,E=U.parentNode!==i,_=!function(t,e,n){var o=n?t.left:t.top,r=n?t.right:t.bottom,i=n?t.width:t.height,a=n?e.left:e.top,l=n?e.right:e.bottom,s=n?e.width:e.height;return o===a||r===l||o+i/2===a+s/2}(U.animated&&U.toRect||e,l.animated&&l.toRect||n,r),T=r?"top":"left",C=M(l,"top","top")||M(U,"top","top"),x=C?C.scrollTop:void 0;if(pt!==l&&(b=n[T],Et=!1,_t=!_&&s.invertSwap||E),0!==(m=function(t,e,n,o,r,i,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,h=!1;if(!a)if(l&&vt<c*r){if(!Et&&(1===gt?s>u+c*i/2:s<d-c*i/2)&&(Et=!0),Et)h=!0;else if(1===gt?s<u+vt:s>d-vt)return-gt}else if(s>u+c*(1-r)/2&&s<d-c*(1-r)/2)return function(t){return N(U)<N(t)?1:-1}(e);if((h=h||a)&&(s<u+c*i/2||s>d-c*i/2))return s>u+c/2?1:-1;return 0}(t,l,n,r,_?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,_t,pt===l))){var I=N(U);do{I-=m,y=V.children[I]}while(y&&("none"===D(y,"display")||y===Z))}if(0===m||y===l)return j(!1);pt=l,gt=m;var A=l.nextElementSibling,k=!1,X=Bt(K,i,U,e,l,n,t,k=1===m);if(!1!==X)return 1!==X&&-1!==X||(k=1===X),Dt=!0,setTimeout(jt,30),B(),k&&!A?i.appendChild(U):l.parentNode.insertBefore(U,k?A:l),C&&R(C,0,x-C.scrollTop),V=U.parentNode,void 0===b||_t||(vt=Math.abs(b-O(l)[T])),H(),j(!0)}if(i.contains(U))return j(!1)}return!1}function Y(s,c){q(s,p,a({evt:t,isOwner:d,axis:r?"vertical":"horizontal",revert:o,dragRect:e,targetRect:n,canSort:h,fromSortable:f,target:l,completed:j,onMove:function(n,o){return Bt(K,i,U,e,n,O(n),t,o)},changed:H},c))}function B(){Y("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function j(e){return Y("dragOverCompleted",{insertion:e}),e&&(d?u._hideClone():u._showClone(p),p!==f&&(S(U,at?at.options.ghostClass:u.options.ghostClass,!1),S(U,s.ghostClass,!0)),at!==p&&p!==Rt.active?at=p:p===Rt.active&&at&&(at=null),f===p&&(p._ignoreWhileAnimating=l),p.animateAll((function(){Y("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(l===U&&!U.animated||l===i&&!l.animated)&&(pt=null),s.dragoverBubble||t.rootEl||l===document||(U.parentNode[F]._isOutsideThisEl(t.target),!e&&Xt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),g=!0}function H(){nt=N(U),rt=N(U,s.draggable),G({sortable:p,name:"change",toEl:i,newIndex:nt,newDraggableIndex:rt,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){m(document,"mousemove",this._onTouchMove),m(document,"touchmove",this._onTouchMove),m(document,"pointermove",this._onTouchMove),m(document,"dragover",Xt),m(document,"mousemove",Xt),m(document,"touchmove",Xt)},_offUpEvents:function(){var t=this.el.ownerDocument;m(t,"mouseup",this._onDrop),m(t,"touchend",this._onDrop),m(t,"pointerup",this._onDrop),m(t,"touchcancel",this._onDrop),m(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;nt=N(U),rt=N(U,n.draggable),q("drop",this,{evt:t}),V=U&&U.parentNode,nt=N(U),rt=N(U,n.draggable),Rt.eventCanceled?this._nulling():(bt=!1,_t=!1,Et=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Wt(this.cloneId),Wt(this._dragStartId),this.nativeDraggable&&(m(document,"drop",this),m(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),h&&D(document.body,"user-select",""),t&&(ft&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),(K===V||at&&"clone"!==at.lastPutMode)&&J&&J.parentNode&&J.parentNode.removeChild(J),U&&(this.nativeDraggable&&m(U,"dragend",this),Ft(U),U.style["will-change"]="",ft&&!bt&&S(U,at?at.options.ghostClass:this.options.ghostClass,!1),S(U,this.options.chosenClass,!1),G({sortable:this,name:"unchoose",toEl:V,newIndex:null,newDraggableIndex:null,originalEvent:t}),K!==V?(nt>=0&&(G({rootEl:V,name:"add",toEl:V,fromEl:K,originalEvent:t}),G({sortable:this,name:"remove",toEl:V,originalEvent:t}),G({rootEl:V,name:"sort",toEl:V,fromEl:K,originalEvent:t}),G({sortable:this,name:"sort",toEl:V,originalEvent:t})),at&&at.save()):nt!==et&&nt>=0&&(G({sortable:this,name:"update",toEl:V,originalEvent:t}),G({sortable:this,name:"sort",toEl:V,originalEvent:t})),Rt.active&&(null!=nt&&-1!==nt||(nt=et,rt=ot),G({sortable:this,name:"end",toEl:V,originalEvent:t}),this.save()))),this._nulling())},_nulling:function(){q("nulling",this),K=U=V=Z=Q=J=$=tt=lt=st=ft=nt=rt=et=ot=pt=gt=at=it=Rt.dragged=Rt.ghost=Rt.clone=Rt.active=null,Tt.forEach((function(t){t.checked=!0})),Tt.length=ct=ut=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":U&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,r=n.length,i=this.options;o<r;o++)w(t=n[o],i.draggable,this.el,!1)&&e.push(t.getAttribute(i.dataIdAttr)||Ht(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach((function(t,o){var r=n.children[o];w(r,this.options.draggable,n,!1)&&(e[t]=r)}),this),t.forEach((function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))}))},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return w(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=W.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Nt(n)},destroy:function(){q("destroy",this);var t=this.el;t[F]=null,m(t,"mousedown",this._onTapStart),m(t,"touchstart",this._onTapStart),m(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(m(t,"dragover",this),m(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),wt.splice(wt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!tt){if(q("hideClone",this),Rt.eventCanceled)return;D(J,"display","none"),this.options.removeCloneOnHide&&J.parentNode&&J.parentNode.removeChild(J),tt=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(tt){if(q("showClone",this),Rt.eventCanceled)return;K.contains(U)&&!this.options.group.revertClone?K.insertBefore(J,U):Q?K.insertBefore(J,Q):K.appendChild(J),this.options.group.revertClone&&this.animate(U,J),D(J,"display",""),tt=!1}}else this._hideClone()}},Ct&&v(document,"touchmove",(function(t){(Rt.active||bt)&&t.cancelable&&t.preventDefault()})),Rt.utils={on:v,off:m,css:D,find:C,is:function(t,e){return!!w(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:Y,closest:w,toggleClass:S,clone:B,index:N,nextTick:Lt,cancelNextTick:Wt,detectDirection:Pt,getChild:I},Rt.get=function(t){return t[F]},Rt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Rt.utils=a({},Rt.utils,t.utils)),W.mount(t)}))},Rt.create=function(t,e){return new Rt(t,e)},Rt.version="1.10.1";var zt,qt,Gt,Ut,Vt,Zt,Kt=[],Qt=!1;function $t(){Kt.forEach((function(t){clearInterval(t.pid)})),Kt=[]}function Jt(){clearInterval(Zt)}var te=Y((function(t,e,n,o){if(e.scroll){var r,i=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=e.scrollSensitivity,s=e.scrollSpeed,c=x(),u=!1;qt!==n&&(qt=n,$t(),zt=e.scroll,r=e.scrollFn,!0===zt&&(zt=k(n,!0)));var d=0,h=zt;do{var f=h,p=O(f),g=p.top,v=p.bottom,m=p.left,b=p.right,y=p.width,w=p.height,E=void 0,_=void 0,S=f.scrollWidth,T=f.scrollHeight,C=D(f),M=f.scrollLeft,I=f.scrollTop;f===c?(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),_=w<T&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),_=w<T&&("auto"===C.overflowY||"scroll"===C.overflowY));var P=E&&(Math.abs(b-i)<=l&&M+y<S)-(Math.abs(m-i)<=l&&!!M),N=_&&(Math.abs(v-a)<=l&&I+w<T)-(Math.abs(g-a)<=l&&!!I);if(!Kt[d])for(var A=0;A<=d;A++)Kt[A]||(Kt[A]={});Kt[d].vx==P&&Kt[d].vy==N&&Kt[d].el===f||(Kt[d].el=f,Kt[d].vx=P,Kt[d].vy=N,clearInterval(Kt[d].pid),0==P&&0==N||(u=!0,Kt[d].pid=setInterval(function(){o&&0===this.layer&&Rt.active._onTouchMove(Vt);var e=Kt[this.layer].vy?Kt[this.layer].vy*s:0,n=Kt[this.layer].vx?Kt[this.layer].vx*s:0;"function"==typeof r&&"continue"!==r.call(Rt.dragged.parentNode[F],n,e,t,Vt,Kt[this.layer].el)||R(Kt[this.layer].el,n,e)}.bind({layer:d}),24))),d++}while(e.bubbleScroll&&h!==c&&(h=k(h,!1)));Qt=u}}),30),ee=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,r=t.activeSortable,i=t.dispatchSortableEvent,a=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var s=n||r;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(c.clientX,c.clientY);l(),s&&!s.el.contains(u)&&(i("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function ne(){}function oe(){}ne.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=I(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:ee},i(ne,{pluginName:"revertOnSpill"}),oe.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:ee},i(oe,{pluginName:"removeOnSpill"});Rt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?v(document,"dragover",this._handleAutoScroll):this.options.supportPointer?v(document,"pointermove",this._handleFallbackAutoScroll):e.touches?v(document,"touchmove",this._handleFallbackAutoScroll):v(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?m(document,"dragover",this._handleAutoScroll):(m(document,"pointermove",this._handleFallbackAutoScroll),m(document,"touchmove",this._handleFallbackAutoScroll),m(document,"mousemove",this._handleFallbackAutoScroll)),Jt(),$t(),clearTimeout(E),E=void 0},nulling:function(){Vt=qt=zt=Qt=Zt=Gt=Ut=null,Kt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var n=this,o=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,i=document.elementFromPoint(o,r);if(Vt=t,e||u||c||h){te(t,this.options,i,e);var a=k(i,!0);!Qt||Zt&&o===Gt&&r===Ut||(Zt&&Jt(),Zt=setInterval((function(){var i=k(document.elementFromPoint(o,r),!0);i!==a&&(a=i,$t()),te(t,n.options,i,e)}),10),Gt=o,Ut=r)}else{if(!this.options.bubbleScroll||k(i,!0)===x())return void $t();te(t,this.options,k(i,!1),!1)}}},i(t,{pluginName:"scroll",initializeByDefault:!0})}),Rt.mount(oe,ne);var re=Rt,ie=document.querySelector("#futureDate").innerHTML,ae=new Date(ie),le=document.getElementById("teams"),se=re.create(le),ce=se.option("disabled"),ue=ae.getTime(),de=setInterval((function(){var t=(new Date).getTime(),e=ue-t;document.getElementById("days").innerText=Math.floor(e/864e5),document.getElementById("hours").innerText=Math.floor(e%864e5/36e5),document.getElementById("minutes").innerText=Math.floor(e%36e5/6e4),document.getElementById("seconds").innerText=Math.floor(e%6e4/1e3),e<0&&(document.querySelector(".teamContainer").style.color="#aaa",se.option("disabled",!ce),clearInterval(de))}),1e3);n(0)}]);
//# sourceMappingURL=scripts-bundled.574155cd229deb1654b1.js.map