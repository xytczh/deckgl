!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";(function(e){var o=n(1);e._deckGLWidget=e._deckGLWidget||{};const r=e._deckGLWidget;function c(e,t,n){n.df&&(n.data=HTMLWidgets.dataframeToD3(n.data));for(let e of Object.keys(n)){const t=n[e];t.dataAccessor&&(n[e]=Object(o.a)(e,t.dataAccessor))}return function(e,t){if(!t.getTooltip)return;console.log(t.getTooltip);const n=e.props.container+"-tooltip";document.getElementById(n).innerHTML=t.getTooltip,t.onHover=(({object:e,x:t,y:n})=>{e?console.log(e.points.length):console.log("nothing to do")})}(e,n),new deck[t](n)}t.a=function(e,t,n){const o={};let i=null;return o.renderValue=(t=>{console.log("widget data",t),console.log("deck.gl version: "+deck.version),"undefined"!=typeof mapboxgl&&console.log("mapbox-gl version: "+mapboxgl.version);const n=r[e.id]={};(i=n.deckGL=function(e,t){return t.container=e,new deck.DeckGL(t)}(e.id,t.deckGLProperties))._deckGLWidget={sources:{}},function(e){const t=document.createElement("div");t.id=e.id+"-tooltip",t.className="tooltip",e.appendChild(t)}(e);const o=n.layers=t.layerDefs.map(e=>c(i,e.className,e.properties));i.setProps({layers:o})}),o.resize=((e,t)=>{}),o.getDeckGL=(()=>i),o}}).call(this,n(3))},function(e,t,n){"use strict";t.a=function(e,t){if(console.log(e,"make data accessor"),"string"==typeof t){const n=t;return e.includes("Color")?e=>"string"==typeof e[n]?function(e){return e=e.substring(1),[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4),16)]}(e[n]):e[n]:e=>e[n]}return e=>t.map(t=>e[t])}},function(e,t,n){"use strict";n.r(t);var o=n(0);HTMLWidgets.widget({name:"deckgl",type:"output",factory:o.a})},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);