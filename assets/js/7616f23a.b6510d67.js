"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),v=o,m=d["".concat(c,".").concat(v)]||d[v]||p[v]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"overview",sidebar_label:"1. Babylon Overview",hide_table_of_contents:!0},a='1. Babylon Overview <a id="overview"></a>',s={unversionedId:"introduction/overview",id:"introduction/overview",title:'1. Babylon Overview <a id="overview"></a>',description:"Babylon is a PoS (proof-of-stake) blockchain that provides secure Bitcoin timestamps to its transactions. Babylon is built using the Tendermint consensus engine and Cosmos SDK. It leverages cutting-edge cryptographic technologies and advanced Cosmos SDK features to send succinct, verifiable, and adversary-slashing checkpoints of the Babylon chain to BTC as BTC transactions. The BTC timestamps of Babylon checkpoints provide BTC-level security to all Babylon transactions.",source:"@site/docs/introduction/overview.md",sourceDirName:"introduction",slug:"/introduction/overview",permalink:"/docs/introduction/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/overview.md",tags:[],version:"current",frontMatter:{id:"overview",sidebar_label:"1. Babylon Overview",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"2. A Primary Usecase:Securing PoS Chains",permalink:"/docs/introduction/usecase"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-babylon-overview-"},"1. Babylon Overview ",(0,o.kt)("a",{id:"overview"})),(0,o.kt)("p",null,"Babylon is a PoS (proof-of-stake) blockchain that provides secure Bitcoin timestamps to its transactions. Babylon is built using the Tendermint consensus engine and Cosmos SDK. It leverages cutting-edge cryptographic technologies and advanced Cosmos SDK features to send succinct, verifiable, and adversary-slashing checkpoints of the Babylon chain to BTC as BTC transactions. The BTC timestamps of Babylon checkpoints provide BTC-level security to all Babylon transactions."),(0,o.kt)("p",null,"Below is a high-level architecture of the Babylon system. Babylon can be viewed as a checkpoint verifier and aggregator. It verifies and aggregates the checkpoints submitted by its users into ones that BTC can securely timestamp."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?export=view&id=1vbtoSy1ytLvchNTNlZ9E_uCpCYX8otwL",alt:"Alt text"})),(0,o.kt)("p",null,"This primitive enables enormous security-related use cases for the decentralized world. One motivating and primary use case is to bring BTC security to PoS chains."))}p.isMDXComponent=!0}}]);