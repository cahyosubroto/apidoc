"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[9433],{3905:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},y=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),s=d(r),p=n,b=s["".concat(i,".").concat(p)]||s[p]||c[p]||o;return r?a.createElement(b,u(u({ref:t},y),{},{components:r})):a.createElement(b,u({ref:t},y))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var d=2;d<o;d++)u[d]=r[d];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},82450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={id:"babylond_query_auth_params",sidebar_label:"babylond query auth params",hide_table_of_contents:!0},u="babylond query auth params",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_params",id:"cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_params",title:"babylond query auth params",description:"Querying the current auth parameters.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_params.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_auth",slug:"/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_params",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_params",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_params.md",tags:[],version:"current",frontMatter:{id:"babylond_query_auth_params",sidebar_label:"babylond query auth params",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query auth module-accounts",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_accounts"},next:{title:"babylond query authz",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_authz"}},i={},d=[{value:"query auth params command",id:"query-auth-params-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],y={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"babylond-query-auth-params"},"babylond query auth params"),(0,n.kt)("p",null,"Querying the current auth parameters."),(0,n.kt)("h2",{id:"query-auth-params-command"},"query auth params command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"babylond query auth params [flags]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for params\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,n.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}c.isMDXComponent=!0}}]);