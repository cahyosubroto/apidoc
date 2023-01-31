"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[9335],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>u});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=c(r),u=a,m=y["".concat(d,".").concat(u)]||y[u]||b[u]||o;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},12187:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const o={id:"Babylond_query_ibc_transfer_denom-hash",sidebar_label:"babylond query ibc-transfer denom-hash",hide_table_of_contents:!0},i="babylond query ibc-transfer denom-hash",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-hash",id:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-hash",title:"babylond query ibc-transfer denom-hash",description:"Querying the denom hash information by the specified denom trace.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-hash.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_ibc",slug:"/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-hash",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-hash",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-hash.md",tags:[],version:"current",frontMatter:{id:"Babylond_query_ibc_transfer_denom-hash",sidebar_label:"babylond query ibc-transfer denom-hash",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query ibc-transfer",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer"},next:{title:"babylond query ibc-transfer denom-trace",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-trace"}},d={},c=[{value:"query ibc-transfer denom-hash command",id:"query-ibc-transfer-denom-hash-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],s={toc:c};function b(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-ibc-transfer-denom-hash"},"babylond query ibc-transfer denom-hash"),(0,a.kt)("p",null,"Querying the denom hash information by the specified denom trace."),(0,a.kt)("h2",{id:"query-ibc-transfer-denom-hash-command"},"query ibc-transfer denom-hash command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query ibc-transfer denom-hash [trace] [flags]\n")),(0,a.kt)("h3",{id:"example-command"},"Example Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ babylond query ibc-transfer denom-hash transfer/channel-0/uatom\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for denom-hash\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}b.isMDXComponent=!0}}]);