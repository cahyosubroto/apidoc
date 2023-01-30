"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[4927],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>s});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function c(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?c(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),b=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},d=function(e){var n=b(e.components);return t.createElement(l.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=b(o),s=r,p=u["".concat(l,".").concat(s)]||u[s]||y[s]||c;return o?t.createElement(p,i(i({ref:n},d),{},{components:o})):t.createElement(p,i({ref:n},d))}));function s(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=o.length,i=new Array(c);i[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var b=2;b<c;b++)i[b]=o[b];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},40619:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>a,toc:()=>b});var t=o(87462),r=(o(67294),o(3905));const c={id:"Babylond_query_ibc_connection",sidebar_label:"babylond query ibc connection",hide_table_of_contents:!0},i="babylond query ibc connection",a={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection",id:"cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection",title:"babylond query ibc connection",description:"Querying subcommands for the IBC connection module.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_ibc",slug:"/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection.md",tags:[],version:"current",frontMatter:{id:"Babylond_query_ibc_connection",sidebar_label:"babylond query ibc connection",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query ibc client status",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_status"},next:{title:"babylond query ibc connection connections",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection/Babylond_query_ibc_connection_connections"}},l={},b=[{value:"query ibc connection command",id:"query-ibc-connection-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],d={toc:b};function y(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-query-ibc-connection"},"babylond query ibc connection"),(0,r.kt)("p",null,"Querying subcommands for the IBC connection module."),(0,r.kt)("h2",{id:"query-ibc-connection-command"},"query ibc connection command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond query ibc connection [command]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-h, --help   help for connection\n")),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);