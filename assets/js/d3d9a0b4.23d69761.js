"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2938],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>y});var n=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=n.createContext({}),u=function(e){var r=n.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(a),y=t,d=b["".concat(p,".").concat(y)]||b[y]||i[y]||o;return a?n.createElement(d,s(s({ref:r},c),{},{components:a})):n.createElement(d,s({ref:r},c))}));function y(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,s=new Array(o);s[0]=b;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},79399:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),t=(a(67294),a(3905));const o={id:"babylond_query_params_subspace",sidebar_label:"babylond query params subspace",hide_table_of_contents:!0},s="babylond query params subspace",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_params/babylond_query_params_subspace",id:"cli/babylond/BabylondQuery/Babylond_query_params/babylond_query_params_subspace",title:"babylond query params subspace",description:"Querying for raw parameters by subspace and key.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_params/Babylond_query_params_subspace.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_params",slug:"/cli/babylond/BabylondQuery/Babylond_query_params/babylond_query_params_subspace",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_params/babylond_query_params_subspace",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_params/Babylond_query_params_subspace.md",tags:[],version:"current",frontMatter:{id:"babylond_query_params_subspace",sidebar_label:"babylond query params subspace",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query params",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_params"},next:{title:"babylond query slashing",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_slashing"}},p={},u=[{value:"query params subspace command",id:"query-params-subspace-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],c={toc:u};function i(e){let{components:r,...a}=e;return(0,t.kt)("wrapper",(0,n.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"babylond-query-params-subspace"},"babylond query params subspace"),(0,t.kt)("p",null,"Querying for raw parameters by subspace and key."),(0,t.kt)("h2",{id:"query-params-subspace-command"},"query params subspace command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"babylond query params subspace [subspace] [key] [flags]\n")),(0,t.kt)("h2",{id:"options"},"Options"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for subspace\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,t.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}i.isMDXComponent=!0}}]);