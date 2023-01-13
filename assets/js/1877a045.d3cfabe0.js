"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[7013],{3905:(e,n,a)=>{a.d(n,{Zo:()=>b,kt:()=>s});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),y=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},b=function(e){var n=y(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=y(a),s=r,h=d["".concat(i,".").concat(s)]||d[s]||u[s]||o;return a?t.createElement(h,l(l({ref:n},b),{},{components:a})):t.createElement(h,l({ref:n},b))}));function s(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var y=2;y<o;y++)l[y]=a[y];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29118:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>y});var t=a(87462),r=(a(67294),a(3905));const o={id:"Babylond_query_ibc_channel_channels",sidebar_label:"babylond query ibc channel channels",hide_table_of_contents:!0},l="babylond query ibc channel channels",c={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_channels",id:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_channels",title:"babylond query ibc channel channels",description:"Querying all the channels from a chain.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_channels.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel",slug:"/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_channels",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_channels",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_channels.md",tags:[],version:"current",frontMatter:{id:"Babylond_query_ibc_channel_channels",sidebar_label:"babylond query ibc channel channels",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query ibc channel",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel"},next:{title:"babylond query ibc channel client-state",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_client-state"}},i={},y=[{value:"query ibc channel channels command",id:"query-ibc-channel-channels-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],b={toc:y};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},b,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-query-ibc-channel-channels"},"babylond query ibc channel channels"),(0,r.kt)("p",null,"Querying all the channels from a chain."),(0,r.kt)("h2",{id:"query-ibc-channel-channels-command"},"query ibc channel channels command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond query ibc channel channels [flags]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --count-total       count total number of records in channels to query for\n      --height int        Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help              help for channels\n      --limit uint        pagination limit of channels to query for (default 100)\n      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint       pagination offset of channels to query for\n  -o, --output string     Output format (text|json) (default "text")\n      --page uint         pagination page of channels to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string   pagination page-key of channels to query for\n      --reverse           results are sorted in descending order\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}u.isMDXComponent=!0}}]);