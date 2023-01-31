"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[7788],{3905:(e,o,r)=>{r.d(o,{Zo:()=>s,kt:()=>c});var n=r(67294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function p(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),d=function(e){var o=n.useContext(i),r=o;return e&&(r="function"==typeof e?e(o):l(l({},o),e)),r},s=function(e){var o=d(e.components);return n.createElement(i.Provider,{value:o},e.children)},y={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(r),c=t,b=u["".concat(i,".").concat(c)]||u[c]||y[c]||a;return r?n.createElement(b,l(l({ref:o},s),{},{components:r})):n.createElement(b,l({ref:o},s))}));function c(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var i in o)hasOwnProperty.call(o,i)&&(p[i]=o[i]);p.originalType=e,p.mdxType="string"==typeof e?e:t,l[1]=p;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},29628:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var n=r(87462),t=(r(67294),r(3905));const a={id:"babylond_query_gov_proposer",sidebar_label:"babylond query gov proposer",hide_table_of_contents:!0},l="babylond query gov proposer",p={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_proposer",id:"cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_proposer",title:"babylond query gov proposer",description:"Querying details for all the proposals that match the specified filters.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_gov/Babylond_query_gov_proposer.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_gov",slug:"/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_proposer",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_proposer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_gov/Babylond_query_gov_proposer.md",tags:[],version:"current",frontMatter:{id:"babylond_query_gov_proposer",sidebar_label:"babylond query gov proposer",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query gov proposal",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_proposal"},next:{title:"babylond query gov tally",permalink:"/apidoc/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_tally"}},i={},d=[{value:"query gov proposer command",id:"query-gov-proposer-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],s={toc:d};function y(e){let{components:o,...r}=e;return(0,t.kt)("wrapper",(0,n.Z)({},s,r,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"babylond-query-gov-proposer"},"babylond query gov proposer"),(0,t.kt)("p",null,"Querying details for all the proposals that match the specified filters."),(0,t.kt)("h2",{id:"query-gov-proposer-command"},"query gov proposer command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"babylond query gov proposer [proposal-id] [flags]\n")),(0,t.kt)("h3",{id:"example-command"},"Example Command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"$ babylond query gov proposer 1\n")),(0,t.kt)("h2",{id:"options"},"Options"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for proposer\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,t.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);