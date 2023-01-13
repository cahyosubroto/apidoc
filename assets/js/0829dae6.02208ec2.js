"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[6348],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>s});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),y=u(r),s=a,p=y["".concat(i,".").concat(s)]||y[s]||b[s]||c;return r?t.createElement(p,o(o({ref:n},d),{},{components:r})):t.createElement(p,o({ref:n},d))}));function s(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=y;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<c;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},27276:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var t=r(87462),a=(r(67294),r(3905));const c={id:"Babylond_query_ibc_channel_next-sequence-receive",sidebar_label:"babylond query ibc channel next-sequence-receive",hide_table_of_contents:!0},o="babylond query ibc channel next-sequence-receive",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_next-sequence-receive",id:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_next-sequence-receive",title:"babylond query ibc channel next-sequence-receive",description:"Query the next receive sequence for the specified channel.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_next-sequence-receive.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel",slug:"/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_next-sequence-receive",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_next-sequence-receive",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_next-sequence-receive.md",tags:[],version:"current",frontMatter:{id:"Babylond_query_ibc_channel_next-sequence-receive",sidebar_label:"babylond query ibc channel next-sequence-receive",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query ibc channel end",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_end"},next:{title:"babylond query ibc channel packet-ack",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-ack"}},i={},u=[{value:"query ibc channel next-sequence-receive command",id:"query-ibc-channel-next-sequence-receive-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],d={toc:u};function b(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-ibc-channel-next-sequence-receive"},"babylond query ibc channel next-sequence-receive"),(0,a.kt)("p",null,"Query the next receive sequence for the specified channel."),(0,a.kt)("h2",{id:"query-ibc-channel-next-sequence-receive-command"},"query ibc channel next-sequence-receive command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query ibc channel next-sequence-receive [port-id] [channel-id] [flags]\n")),(0,a.kt)("h3",{id:"example-command"},"Example Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ babylond query ibc channel next-sequence-receive [port-id] [channel-id]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for next-sequence-receive\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n      --prove           show proofs for the query results (default true)\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}b.isMDXComponent=!0}}]);