_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"4f0p":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var a=n("97Jx"),r=n.n(a),o=n("m3Bd"),l=n.n(o),i=(n("ERkP"),n("ZVZ0")),c=(n("l1C2"),{});function b(t){var e=t.components,n=l()(t,["components"]);return Object(i.b)("wrapper",r()({},c,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"FlatButton"),Object(i.b)("h2",null,"Import"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import FlatButton from '@trendmicro/react-styled-ui/FlatButton';\n// or\nimport { FlatButton } from '@trendmicro/react-styled-ui';\n")),Object(i.b)("h2",null,"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"<FlatButton>Flat Button</FlatButton>\n")),Object(i.b)("h3",null,"Variants"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"variant")," prop to change the visual style of the Button. You can set the value to ",Object(i.b)("inlineCode",{parentName:"p"},"solid"),", ",Object(i.b)("inlineCode",{parentName:"p"},"outline"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="2x">\n  <FlatButton variant="solid">Solid Button</FlatButton>\n  <FlatButton variant="outline">Outline Button</FlatButton>\n</Stack>\n')),Object(i.b)("h3",null,"Colors"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"variantColor")," prop to change the color scheme of the Button. ",Object(i.b)("inlineCode",{parentName:"p"},"variantColor")," can be any color key that exist in the ",Object(i.b)("inlineCode",{parentName:"p"},"theme.colors"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack spacing="4x">\n  <Stack direction="row" spacing="2x">\n    <FlatButton variantColor="green">Button</FlatButton>\n    <FlatButton variantColor="green:40">Button</FlatButton>\n  </Stack>\n  <Stack direction="row" spacing="2x">\n    <FlatButton variant="outline" variantColor="green">Button</FlatButton>\n    <FlatButton variant="outline" variantColor="green:40">Button</FlatButton>\n  </Stack>\n</Stack>\n')),Object(i.b)("h3",null,"Sizes"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",Object(i.b)("inlineCode",{parentName:"p"},"Button"),". You can set the value to ",Object(i.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(i.b)("inlineCode",{parentName:"p"},"md"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"lg"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack spacing="4x">\n  <Stack direction="row" spacing="2x" alignItems="center">\n    <FlatButton size="sm">Small</FlatButton>\n    <FlatButton size="md">Medium</FlatButton>\n    <FlatButton size="lg">Large</FlatButton>\n  </Stack>\n  <Stack direction="row" spacing="2x" alignItems="center">\n    <FlatButton variant="outline" size="sm">Small</FlatButton>\n    <FlatButton variant="outline" size="md">Medium</FlatButton>\n    <FlatButton variant="outline" size="lg">Large</FlatButton>\n  </Stack>\n</Stack>\n')),Object(i.b)("h3",null,"States"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack spacing="4x">\n  <Stack direction="row" spacing="2x">\n    <FlatButton>Normal</FlatButton>\n    <FlatButton disabled>Disabled</FlatButton>\n  </Stack>\n  <Stack direction="row" spacing="2x">\n    <FlatButton variant="outline">Normal</FlatButton>\n    <FlatButton variant="outline" disabled>Disabled</FlatButton>\n  </Stack>\n</Stack>\n')),Object(i.b)("h2",null,"Props"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"FlatButton")," composes the ",Object(i.b)("a",{parentName:"p",href:"./buttonbase"},Object(i.b)("inlineCode",{parentName:"a"},"ButtonBase"))," component. You can override the default styles with style props."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"disabled"),Object(i.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", the button will be disabled. This sets ",Object(i.b)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can style this state by passing the ",Object(i.b)("inlineCode",{parentName:"td"},"_disabled")," prop.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"size"),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"},"'md'"),Object(i.b)("td",{parentName:"tr",align:"left"},"The size of the button. One of: ",Object(i.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'lg'"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"variant"),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"},"'solid'"),Object(i.b)("td",{parentName:"tr",align:"left"},"The variant of the button style to use. One of: ",Object(i.b)("inlineCode",{parentName:"td"},"'solid'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'outline'"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"variantColor"),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"},"'gray'"),Object(i.b)("td",{parentName:"tr",align:"left"},"The color of the button. It must be a color key defined in ",Object(i.b)("inlineCode",{parentName:"td"},"theme.colors"),".")))))}b.isMDXComponent=!0},"5WIe":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/flatbutton",function(){return n("4f0p")}])},ZVZ0:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return m}));var a=n("ERkP"),r=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var b=r.a.createContext({}),p=function(t){var e=r.a.useContext(b),n=e;return t&&(n="function"===typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.a.createElement(b.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,b=c(t,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||o;return n?r.a.createElement(m,i(i({ref:e},b),{},{components:n})):r.a.createElement(m,i({ref:e},b))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"===typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"===typeof t?t:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}},[["5WIe",0,2,1]]]);