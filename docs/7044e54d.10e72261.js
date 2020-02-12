(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(1),a=n(6),r=(n(0),n(113)),i={id:"faq",title:"Frequently Asked Questions",description:"Assistant Relay Frequently Asked Questions"},c={id:"faq/faq",title:"Frequently Asked Questions",description:"Assistant Relay Frequently Asked Questions",source:"@site/docs\\faq\\faq.md",permalink:"/assistant-relay/docs/faq/faq",sidebar:"docs",previous:{title:"WebCore",permalink:"/assistant-relay/docs/integration/webcore"}},s=[{value:'How do I disable "Incoming broadcast from name"?',id:"how-do-i-disable-incoming-broadcast-from-name",children:[]},{value:"How can I cast media?",id:"how-can-i-cast-media",children:[]},{value:"How can I broadcast to specific Google Home devices?",id:"how-can-i-broadcast-to-specific-google-home-devices",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"how-do-i-disable-incoming-broadcast-from-name"},'How do I disable "Incoming broadcast from ',"[name]",'"?'),Object(r.b)("p",null,"Unfortunately you can't.  The best thing to do is send Google some feedback asking them to change it or make it optional.",Object(r.b)("br",{parentName:"p"}),"\n","To do this, open Google Assistant on your phone, and say ",Object(r.b)("inlineCode",{parentName:"p"},"Send Feedback"),".  It'll let you type in your feedback to the product team"),Object(r.b)("h2",{id:"how-can-i-cast-media"},"How can I cast media?"),Object(r.b)("p",null,"This is not something supported by the Google Assistant SDK.  There are apparently other Google Assistant implementations out there that have managed to do this.  I have yet to find them, or get them working.  I've also tried to get this working with Assistant Relay, but have had no such luck so far."),Object(r.b)("p",null,"With that in mind, you can cast Nest Cameras to a Smart Display.  Simply send a command ",Object(r.b)("inlineCode",{parentName:"p"},"cast driveway camera to the kitchen hub")),Object(r.b)("h2",{id:"how-can-i-broadcast-to-specific-google-home-devices"},"How can I broadcast to specific Google Home devices?"),Object(r.b)("p",null,"This functionality is not supported by Google, and as such you have to put a work around in place."),Object(r.b)("p",null,'To do this, you will need to create a new Google account, and then connect the Google Home devices you want to put into a broadcast "group".'),Object(r.b)("p",null,"Once you have this new Google Account, continue the setup as per above and give the OAuth file a name of your choice.  When you then broadcast, pass this name as the user fields"),Object(r.b)("p",null,"For example, if I wanted to broadcast only to my Living Room Home, I would setup a new Google Account and link ONLY my Living Room Home to this account. I'd download the OAuth file and then rename it to ",Object(r.b)("inlineCode",{parentName:"p"},"LivingRoom.json"),".  Then when sending a command to Assistant Relay, I would use the username ",Object(r.b)("inlineCode",{parentName:"p"},"LivingRoom")))}u.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?a.a.createElement(b,c({ref:t},l,{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);