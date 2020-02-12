/*! For license information please see 635a1b22.7fd158e5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),s=(a(0),a(113)),o=a(116),c=a(117),l={id:"casting",title:"Casting Media",description:"How to use Assistant Relay Cast"},i={id:"cast/casting",title:"Casting Media",description:"How to use Assistant Relay Cast",source:"@site/docs\\cast\\casting.mdx",permalink:"/assistant-relay/docs/cast/casting",sidebar:"docs",previous:{title:"Search for cast devices",permalink:"/assistant-relay/docs/cast/search"},next:{title:"Stop Casting",permalink:"/assistant-relay/docs/cast/stop"}},b=[{value:"Casting Remote Media",id:"casting-remote-media",children:[]},{value:"Casting Local Media",id:"casting-local-media",children:[]},{value:"Casting Websites",id:"casting-websites",children:[]}],u={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This feature is currently a Work In Progress, and is only available in v3.3b at this time")),Object(s.b)("h2",{id:"casting-remote-media"},"Casting Remote Media"),Object(s.b)("p",null,"It is possible to cast media from ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://ytdl-org.github.io/youtube-dl/supportedsites.html"}),"several hundred")," sites"),Object(s.b)("p",null,"To start casting, send a HTTP POST request to ",Object(s.b)("inlineCode",{parentName:"p"},"/cast")," with the following json-encoded body parameter:"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"Schema",value:"schema"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "device": "192.168.1.11", // IP address or name\n    "source": "https://www.youtube.com/watch?v=6xSxXiHwMrg" // URL to media\n    "type": "remote" // Not needed for remote files\n}\n'))),Object(s.b)(c.a,{value:"schema",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"device: STRING\nsource: STRING\ntype: STRING\n"))),Object(s.b)(c.a,{value:"response",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "success": true\n}\n')))),Object(s.b)("p",null,"Once the media has finished playing, the cast will automatically close"),Object(s.b)("h2",{id:"casting-local-media"},"Casting Local Media"),Object(s.b)("p",null,"Having the ability to cast local media, means that it is now possible to have Assistant Relay trigger a ringing sound when your doorbell is pressed, an alarm if someone\nbreaks into your house, or anything else you could think of."),Object(s.b)("p",null,"At the moment, this is very much a ",Object(s.b)("em",{parentName:"p"},"work in progress"),", and to sample this, we have added a simple doorbell sound effect"),Object(s.b)("p",null,"To cast a local file, send a HTTP POST request to ",Object(s.b)("inlineCode",{parentName:"p"},"/cast")," with the following json-encoded body:"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"Schema",value:"schema"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "device": "192.168.1.11", // Device name or IP\n    "source": "doorbell.mp3" // Name of the file in bin/media/\n    "type": "local"\n}\n'))),Object(s.b)(c.a,{value:"schema",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"device: STRING\nsource: STRING\ntype: STRING\n"))),Object(s.b)(c.a,{value:"response",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),"// No response.... yet\n")))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"NOTE"),":  There is a bug with Smart Speakers and Displays where the cast session stays in progress after local media has been played.  This can be seen by the black screen with the cast icon inside it")),Object(s.b)("h2",{id:"casting-websites"},"Casting Websites"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"CATT")," also allows you to cast websites straight to your Chromecasts or Smart Displays"),Object(s.b)("p",null,"To cast a website, send a HTTP POST request to ",Object(s.b)("inlineCode",{parentName:"p"},"/cast")," with the following json-encoded body:"),Object(s.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"Schema",value:"schema"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "device": "192.168.1.11", // Device name or IP\n    "source": "www.facebook.com"\n    "type": "website"\n}\n'))),Object(s.b)(c.a,{value:"schema",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"device: STRING\nsource: STRING\ntype: STRING\n"))),Object(s.b)(c.a,{value:"response",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),"// No response.... yet\n")))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"NOTE"),":  Smart Displays have no keyboard interface, so a website must provide its own text entry method if needed")))}p.isMDXComponent=!0},112:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===s)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},113:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},u=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||s;return a?r.a.createElement(m,c({ref:t},i,{components:a})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<s;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},116:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(112),o=a.n(s),c=a(84),l=a.n(c);const i=37,b=39;t.a=function(e){const{block:t,children:a,defaultValue:s,values:c}=e,[u,p]=Object(n.useState)(s),d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===e,className:o()("tab-item",l.a.tabItem,{"tab-item--active":u===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case b:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(d,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===u)[0]))}},117:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);