"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[5034],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),b=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=b(e.components);return o.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=b(t),f=r,s=u["".concat(i,".").concat(f)]||u[f]||p[f]||a;return t?o.createElement(s,c(c({ref:n},d),{},{components:t})):o.createElement(s,c({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<a;b++)c[b]=t[b];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>b});var o=t(87462),r=(t(67294),t(3905));const a={id:"babylondconfig",sidebar_label:"babylond config",hide_table_of_contents:!0},c="babylond config",l={unversionedId:"cli/babylond/babylondconfig",id:"cli/babylond/babylondconfig",title:"babylond config",description:"Create or query an application CLI configuration file.",source:"@site/docs/cli/babylond/babylondconfig.md",sourceDirName:"cli/babylond",slug:"/cli/babylond/babylondconfig",permalink:"/apidoc/docs/cli/babylond/babylondconfig",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/babylondconfig.md",tags:[],version:"current",frontMatter:{id:"babylondconfig",sidebar_label:"babylond config",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond collect-gentxs",permalink:"/apidoc/docs/cli/babylond/babylondcollectgentxs"},next:{title:"babylond create-bls-key",permalink:"/apidoc/docs/cli/babylond/babylondcreatebls"}},i={},b=[{value:"config command",id:"config-command",level:2}],d={toc:b};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-config"},"babylond config"),(0,r.kt)("p",null,"Create or query an application CLI configuration file."),(0,r.kt)("h2",{id:"config-command"},"config command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond config\n")),(0,r.kt)("p",null,"It would return the CLI configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n        "chain-id": "",\n        "keyring-backend": "os",\n        "output": "text",\n        "node": "tcp://localhost:26657",\n        "broadcast-mode": "sync"\n}\n')))}p.isMDXComponent=!0}}]);