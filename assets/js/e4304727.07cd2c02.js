"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[8456],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>p});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var o=n.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},u=function(e){var o=s(e.components);return n.createElement(d.Provider,{value:o},e.children)},y={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},c=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),p=r,b=c["".concat(d,".").concat(p)]||c[p]||y[p]||a;return t?n.createElement(b,l(l({ref:o},u),{},{components:t})):n.createElement(b,l({ref:o},u))}));function p(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var i={};for(var d in o)hasOwnProperty.call(o,d)&&(i[d]=o[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},57521:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const a={id:"babylond_query_gov_votes",sidebar_label:"babylond query gov votes",hide_table_of_contents:!0},l="babylond query gov votes",i={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_votes",id:"cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_votes",title:"babylond query gov votes",description:"Querying details of all votes of a single proposal by the specified identifier.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_gov/Babylond_query_gov_votes.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_gov",slug:"/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_votes",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_votes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_gov/Babylond_query_gov_votes.md",tags:[],version:"current",frontMatter:{id:"babylond_query_gov_votes",sidebar_label:"babylond query gov votes",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond query gov vote",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_vote"},next:{title:"babylond query ibc",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_ibc"}},d={},s=[{value:"query gov votes command",id:"query-gov-votes-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:s};function y(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-query-gov-votes"},"babylond query gov votes"),(0,r.kt)("p",null,"Querying details of all votes of a single proposal by the specified identifier."),(0,r.kt)("h2",{id:"query-gov-votes-command"},"query gov votes command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond query gov votes [proposal-id] [flags]\n")),(0,r.kt)("h3",{id:"example-command"},"Example Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ babylond query gov votes 1 --page=1 --limit=40\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --count-total       count total number of records in votes to query for\n      --height int        Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help              help for votes\n      --limit uint        pagination limit of votes to query for (default 100)\n      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint       pagination offset of votes to query for\n  -o, --output string     Output format (text|json) (default "text")\n      --page uint         pagination page of votes to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string   pagination page-key of votes to query for\n      --reverse           results are sorted in descending order\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);