"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2283],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>b});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),u=s(n),b=o,m=u["".concat(l,".").concat(b)]||u[b]||g[b]||i;return n?a.createElement(m,r(r({ref:e},c),{},{components:n})):a.createElement(m,r({ref:e},c))}));function b(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=u;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=t,d.mdxType="string"==typeof t?t:o,r[1]=d;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56308:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={id:"babylond_tx_staking_edit-validator",sidebar_label:"babylond tx staking edit-validator",hide_table_of_contents:!0},r="babylond tx staking edit-validator",d={unversionedId:"cli/babylond/Babylond_tx/Babylond_tx_staking/babylond_tx_staking_edit-validator",id:"cli/babylond/Babylond_tx/Babylond_tx_staking/babylond_tx_staking_edit-validator",title:"babylond tx staking edit-validator",description:"Edit an existing validator account.",source:"@site/docs/cli/babylond/Babylond_tx/Babylond_tx_staking/Babylond_tx_staking_edit-validator.md",sourceDirName:"cli/babylond/Babylond_tx/Babylond_tx_staking",slug:"/cli/babylond/Babylond_tx/Babylond_tx_staking/babylond_tx_staking_edit-validator",permalink:"/apidoc/docs/cli/babylond/Babylond_tx/Babylond_tx_staking/babylond_tx_staking_edit-validator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/Babylond_tx/Babylond_tx_staking/Babylond_tx_staking_edit-validator.md",tags:[],version:"current",frontMatter:{id:"babylond_tx_staking_edit-validator",sidebar_label:"babylond tx staking edit-validator",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond tx staking delegate",permalink:"/apidoc/docs/cli/babylond/Babylond_tx/Babylond_tx_staking/babylond_tx_staking_delegate"},next:{title:"babylond tx staking redelegate",permalink:"/apidoc/docs/cli/babylond/Babylond_tx/Babylond_tx_staking/babylond_tx_staking_redelegate"}},l={},s=[{value:"tx staking edit-validator command",id:"tx-staking-edit-validator-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],c={toc:s};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-tx-staking-edit-validator"},"babylond tx staking edit-validator"),(0,o.kt)("p",null,"Edit an existing validator account."),(0,o.kt)("h2",{id:"tx-staking-edit-validator-command"},"tx staking edit-validator command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond tx staking edit-validator [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --account-number uint          The account number of the signing account (offline mode only)\n      --aux                          Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string        Transaction broadcasting mode (sync|async|block) (default "sync")\n      --commission-rate string       The new commission rate percentage\n      --details string               The validator\'s (optional) details (default "[do-not-modify]")\n      --dry-run                      ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string           Fee granter grants fees for the transaction\n      --fee-payer string             Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                  Fees to pay along with transaction; eg: 10uatom\n      --from string                  Name or address of private key with which to sign\n      --gas string                   gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float         adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string            Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                         help for edit-validator\n      --identity string              The (optional) identity signature (ex. UPort or Keybase) (default "[do-not-modify]")\n      --keyring-backend string       Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string           The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                       Use a connected Ledger device\n      --min-self-delegation string   The minimum self delegation required on the validator\n      --new-moniker string           The validator\'s name (default "[do-not-modify]")\n      --node string                  <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string                  Note to add a description to the transaction (previously --memo)\n      --offline                      Offline mode (does not allow any online functionality)\n  -o, --output string                Output format (text|json) (default "json")\n      --security-contact string      The validator\'s (optional) security contact email (default "[do-not-modify]")\n  -s, --sequence uint                The sequence number of the signing account (offline mode only)\n      --sign-mode string             Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint          Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                   Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --website string               The validator\'s (optional) website (default "[do-not-modify]")\n  -y, --yes                          Skip tx broadcasting prompt confirmation\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}g.isMDXComponent=!0}}]);