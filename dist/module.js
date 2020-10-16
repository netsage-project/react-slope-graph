define(["@grafana/data","react"],(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=2)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),a=r.n(o);r.d(t,"plugin",(function(){return u}));var u=new n.PanelPlugin((function(e){e.options;var t=e.data,r=(e.width,e.height,function(e,t){console.log("react num pairs:"+t),console.log("react data:"),console.log(e);var r=e.series[0].fields,n=[];for(i in r[0].values.buffer)temp=[r[0].values.buffer[i],r[1].values.buffer[i],r[2].values.buffer[i]],n.push(temp);console.log("transformed data"),console.log(n);var o=n.sort((function(e,t){return t[2]-e[2]})),a=o.slice(0,Math.min(t,o.length)),u=[],l=[],s=0;for(i in a){var f=a[i][0],c=!1;for(j in a[i].coords=[{x:0,value:a[i][2]},{x:1}],u)if(u[j]==f){c=!0,l.push(parseInt(j)),a[i].coords[0].y=parseInt(j);break}c||(u.push(f),l.push(s),a[i].coords[0].y=s,s++)}var d=[],p=[];for(i in s=0,a){var g=a[i][1],b=!1;for(j in d)if(d[j]==g){b=!0,p.push(parseInt(j)),a[i].coords[1].y=parseInt(j);break}b||(d.push(g),p.push(s),a[i].coords[1].y=s,s++)}var m=["rgba(196, 199, 254, 0.6)","rgba(171, 176, 253, 0.6)","rgba(146, 152, 248, 0.6)","rgba(122, 130, 246, 0.6)","rgba(106, 115, 245, 0.6)","rgba(85, 95, 244, 0.6)","rgba(56, 67, 241, 0.6)","rgba(23, 36, 238, 0.6)","rgba(2, 14, 202, 0.6)","rgba(3, 12, 158, 0.6)"],v=a[0][2];for(i in console.log("max val: "+v),a){var h=Math.ceil(a[i][2]/v*10);h>0&&h--,a[i].coords[0].color=m[h],a[i].coords[0].source=a[i][0],a[i].coords[0].dest=a[i][1]}return console.log(a),{srcOrgs:u,destOrgs:d,topPairs:a}}(t));return console.log(r),a.a.createElement("div",null,"React Panel")})).setPanelOptions((function(e){return e.addTextInput({path:"text",name:"Simple text option",description:"Description of panel option",defaultValue:"Default value of text input option"}).addBooleanSwitch({path:"showSeriesCount",name:"Show series counter",defaultValue:!1}).addRadio({path:"seriesCountSize",defaultValue:"sm",name:"Series counter size",settings:{options:[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}]},showIf:function(e){return e.showSeriesCount}}).addNumberInput({path:"numLines",name:"Number of Lines to Display",defaultValue:10}).addTextInput({path:"leftHeader",name:"Left Column Header",defaultValue:"Left Title"}).addTextInput({path:"rightHeader",name:"Right Column Header",defaultValue:"Right Title"})}))}])}));
//# sourceMappingURL=module.js.map