"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[9071],{52868:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>y,frontMatter:()=>m,metadata:()=>u,toc:()=>k});var r=i(87462),a=(i(67294),i(3905)),c=i(26389),n=i(94891),s=i(75190),o=i(47507),p=i(24310),l=i(63303),h=(i(75035),i(85162));const m={id:"btc-checkpoint-height",title:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",description:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",sidebar_label:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"BtcCheckpointHeight",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{earliest_btc_block_number:{type:"string",format:"uint64",title:"Earliest btc block number containing given raw checkpoint"}},title:"QueryCurrentEpochResponse is response type for the Query/CurrentEpoch RPC method"}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"epoch_num",description:"Number of epoch for which the earliest checkpointing btc height is requested",in:"path",required:!0,schema:{type:"string",format:"uint64"}}],tags:["Query"],description:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",method:"get",path:"/babylon/btccheckpoint/v1/{epoch_num}",info:{title:"Babylon - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",description:{type:"text/plain"},url:{path:["babylon","btccheckpoint","v1",":epoch_num"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Number of epoch for which the earliest checkpointing btc height is requested",type:"text/plain"},type:"any",value:"",key:"epoch_num"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/grpcrestapi/babylon-grpc-gateway-docs",custom_edit_url:null},d=void 0,u={unversionedId:"api/grpcrestapi/btc-checkpoint-height",id:"api/grpcrestapi/btc-checkpoint-height",title:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",description:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",source:"@site/docs/api/grpcrestapi/btc-checkpoint-height.api.mdx",sourceDirName:"api/grpcrestapi",slug:"/api/grpcrestapi/btc-checkpoint-height",permalink:"/apidoc/docs/api/grpcrestapi/btc-checkpoint-height",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"btc-checkpoint-height",title:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",description:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",sidebar_label:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"BtcCheckpointHeight",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{earliest_btc_block_number:{type:"string",format:"uint64",title:"Earliest btc block number containing given raw checkpoint"}},title:"QueryCurrentEpochResponse is response type for the Query/CurrentEpoch RPC method"}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"epoch_num",description:"Number of epoch for which the earliest checkpointing btc height is requested",in:"path",required:!0,schema:{type:"string",format:"uint64"}}],tags:["Query"],description:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",method:"get",path:"/babylon/btccheckpoint/v1/{epoch_num}",info:{title:"Babylon - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",description:{type:"text/plain"},url:{path:["babylon","btccheckpoint","v1",":epoch_num"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Number of epoch for which the earliest checkpointing btc height is requested",type:"text/plain"},type:"any",value:"",key:"epoch_num"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/grpcrestapi/babylon-grpc-gateway-docs",custom_edit_url:null}},g={},k=[{value:"BtcCheckpointHeight returns earliest block height for given rawcheckpoint",id:"btccheckpointheight-returns-earliest-block-height-for-given-rawcheckpoint",level:2}],b={toc:k};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"btccheckpointheight-returns-earliest-block-height-for-given-rawcheckpoint"},"BtcCheckpointHeight returns earliest block height for given rawcheckpoint"),(0,a.kt)("p",null,"BtcCheckpointHeight returns earliest block height for given rawcheckpoint"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"epoch_num",description:"Number of epoch for which the earliest checkpointing btc height is requested",in:"path",required:!0,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(c.Z,{mdxType:"ApiTabs"},(0,a.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"A successful response.")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(h.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"earliest_btc_block_number",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uint64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "earliest_btc_block_number": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(h.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"An unexpected error response.")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(h.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,a.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);