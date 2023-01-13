"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2324],{97192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var i=a(87462),n=(a(67294),a(3905)),s=a(26389),o=a(94891),r=a(75190),l=a(47507),p=a(24310),d=a(63303),h=(a(75035),a(85162));const c={id:"list-headers",title:"ListHeaders queries the headers of a chain in Babylon's view, with pagination support",description:"ListHeaders queries the headers of a chain in Babylon's view, with pagination support",sidebar_label:"ListHeaders queries the headers of a chain in Babylon's view, with pagination support",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"ListHeaders",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{headers:{type:"array",items:{type:"object",properties:{chain_id:{type:"string",title:"chain_id is the unique ID of the chain"},hash:{type:"string",format:"byte",title:"hash is the hash of this header"},height:{type:"string",format:"uint64",title:"height is the height of this header on CZ ledger\n(hash, height) jointly provides the position of the header on CZ ledger"},babylon_header:{title:"babylon_header is the header of the babylon block that includes this CZ header",type:"object",properties:{version:{title:"basic block info",type:"object",properties:{block:{type:"string",format:"uint64"},app:{type:"string",format:"uint64"}},description:"Consensus captures the consensus rules for processing a block in the blockchain,\nincluding all blockchain data structures and the rules of the application's\nstate transition machine."},chain_id:{type:"string"},height:{type:"string",format:"int64"},time:{type:"string",format:"date-time"},last_block_id:{title:"prev block info",type:"object",properties:{hash:{type:"string",format:"byte"},part_set_header:{type:"object",properties:{total:{type:"integer",format:"int64"},hash:{type:"string",format:"byte"}},title:"PartsetHeader"}}},last_commit_hash:{type:"string",format:"byte",title:"hashes of block data"},data_hash:{type:"string",format:"byte"},validators_hash:{type:"string",format:"byte",title:"hashes from the app output from the prev block"},next_validators_hash:{type:"string",format:"byte"},consensus_hash:{type:"string",format:"byte"},app_hash:{type:"string",format:"byte"},last_results_hash:{type:"string",format:"byte"},evidence_hash:{type:"string",format:"byte",title:"consensus info"},proposer_address:{type:"string",format:"byte"}},description:"Header defines the structure of a Tendermint block header."},babylon_epoch:{type:"string",format:"uint64",title:"epoch is the epoch number of this header on Babylon ledger"},babylon_tx_hash:{type:"string",format:"byte",title:"babylon_tx_hash is the hash of the tx that includes this header\n(babylon_block_height, babylon_tx_hash) jointly provides the position of the header on Babylon ledger"}},title:"IndexedHeader is the metadata of a CZ header"},title:"headers is the list of headers"},pagination:{title:"pagination defines the pagination in the response",type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}},description:"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest.\n\n message SomeResponse {\n         repeated Bar results = 1;\n         PageResponse page = 2;\n }"}},description:"QueryListHeadersResponse is response type for the Query/ListHeaders RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n\n Example 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\n Example 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := anypb.New(foo)\n     if err != nil {\n       ...\n     }\n     ...\n     foo := &pb.Foo{}\n     if err := any.UnmarshalTo(foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\n\nJSON\n====\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"chain_id",in:"path",required:!0,schema:{type:"string"}},{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Query"],description:"ListHeaders queries the headers of a chain in Babylon's view, with pagination support",method:"get",path:"/babylon/zoneconcierge/v1/headers/{chain_id}",info:{title:"Babylon - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"ListHeaders queries the headers of a chain in Babylon's view, with pagination support",description:{type:"text/plain"},url:{path:["babylon","zoneconcierge","v1","headers",":chain_id"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"chain_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/grpcrestapi/babylon-grpc-gateway-docs",custom_edit_url:null},m=void 0,u={unversionedId:"api/grpcrestapi/list-headers",id:"api/grpcrestapi/list-headers",title:"ListHeaders queries the headers of a chain in Babylon's view, with pagination support",description:"ListHeaders queries the headers of a chain in Babylon's view, with pagination support",source:"@site/docs/api/grpcrestapi/list-headers.api.mdx",sourceDirName:"api/grpcrestapi",slug:"/api/grpcrestapi/list-headers",permalink:"/apidoc/docs/api/grpcrestapi/list-headers",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-headers",title:"ListHeaders queries the headers of a chain in Babylon's view, with pagination support",description:"ListHeaders queries the headers of a chain in Babylon's view, with pagination support",sidebar_label:"ListHeaders queries the headers of a chain in Babylon's view, with pagination support",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"ListHeaders",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{headers:{type:"array",items:{type:"object",properties:{chain_id:{type:"string",title:"chain_id is the unique ID of the chain"},hash:{type:"string",format:"byte",title:"hash is the hash of this header"},height:{type:"string",format:"uint64",title:"height is the height of this header on CZ ledger\n(hash, height) jointly provides the position of the header on CZ ledger"},babylon_header:{title:"babylon_header is the header of the babylon block that includes this CZ header",type:"object",properties:{version:{title:"basic block info",type:"object",properties:{block:{type:"string",format:"uint64"},app:{type:"string",format:"uint64"}},description:"Consensus captures the consensus rules for processing a block in the blockchain,\nincluding all blockchain data structures and the rules of the application's\nstate transition machine."},chain_id:{type:"string"},height:{type:"string",format:"int64"},time:{type:"string",format:"date-time"},last_block_id:{title:"prev block info",type:"object",properties:{hash:{type:"string",format:"byte"},part_set_header:{type:"object",properties:{total:{type:"integer",format:"int64"},hash:{type:"string",format:"byte"}},title:"PartsetHeader"}}},last_commit_hash:{type:"string",format:"byte",title:"hashes of block data"},data_hash:{type:"string",format:"byte"},validators_hash:{type:"string",format:"byte",title:"hashes from the app output from the prev block"},next_validators_hash:{type:"string",format:"byte"},consensus_hash:{type:"string",format:"byte"},app_hash:{type:"string",format:"byte"},last_results_hash:{type:"string",format:"byte"},evidence_hash:{type:"string",format:"byte",title:"consensus info"},proposer_address:{type:"string",format:"byte"}},description:"Header defines the structure of a Tendermint block header."},babylon_epoch:{type:"string",format:"uint64",title:"epoch is the epoch number of this header on Babylon ledger"},babylon_tx_hash:{type:"string",format:"byte",title:"babylon_tx_hash is the hash of the tx that includes this header\n(babylon_block_height, babylon_tx_hash) jointly provides the position of the header on Babylon ledger"}},title:"IndexedHeader is the metadata of a CZ header"},title:"headers is the list of headers"},pagination:{title:"pagination defines the pagination in the response",type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}},description:"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest.\n\n message SomeResponse {\n         repeated Bar results = 1;\n         PageResponse page = 2;\n }"}},description:"QueryListHeadersResponse is response type for the Query/ListHeaders RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n\n Example 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\n Example 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := anypb.New(foo)\n     if err != nil {\n       ...\n     }\n     ...\n     foo := &pb.Foo{}\n     if err := any.UnmarshalTo(foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\n\nJSON\n====\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"chain_id",in:"path",required:!0,schema:{type:"string"}},{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Query"],description:"ListHeaders queries the headers of a chain in Babylon's view, with pagination support",method:"get",path:"/babylon/zoneconcierge/v1/headers/{chain_id}",info:{title:"Babylon - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"ListHeaders queries the headers of a chain in Babylon's view, with pagination support",description:{type:"text/plain"},url:{path:["babylon","zoneconcierge","v1","headers",":chain_id"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"chain_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/grpcrestapi/babylon-grpc-gateway-docs",custom_edit_url:null}},y={},f=[{value:"ListHeaders queries the headers of a chain in Babylon&#39;s view, with pagination support",id:"listheaders-queries-the-headers-of-a-chain-in-babylons-view-with-pagination-support",level:2}],g={toc:f};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"listheaders-queries-the-headers-of-a-chain-in-babylons-view-with-pagination-support"},"ListHeaders queries the headers of a chain in Babylon's view, with pagination support"),(0,n.kt)("p",null,"ListHeaders queries the headers of a chain in Babylon's view, with pagination support"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"chain_id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"A successful response.")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"headers"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"chain_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"chain_id is the unique ID of the chain",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"height",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uint64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"babylon_header"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Header defines the structure of a Tendermint block header.")),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"version"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Consensus captures the consensus rules for processing a block in the blockchain,\nincluding all blockchain data structures and the rules of the application's\nstate transition machine.")),(0,n.kt)(p.Z,{collapsible:!1,name:"block",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uint64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"app",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uint64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!1,name:"chain_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"height",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"time",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"last_block_id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"part_set_header"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"total",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(p.Z,{collapsible:!1,name:"last_commit_hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"data_hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"validators_hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"next_validators_hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"consensus_hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"app_hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"last_results_hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"evidence_hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"proposer_address",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!1,name:"babylon_epoch",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uint64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"babylon_tx_hash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"pagination"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest."),(0,n.kt)("p",null," message SomeResponse {\nrepeated Bar results = 1;\nPageResponse page = 2;\n}")),(0,n.kt)(p.Z,{collapsible:!1,name:"next_key",required:!1,deprecated:void 0,schemaDescription:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results.",schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"total",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uint64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "headers": [\n    {\n      "chain_id": "string",\n      "hash": "string",\n      "height": "string",\n      "babylon_header": {\n        "version": {\n          "block": "string",\n          "app": "string"\n        },\n        "chain_id": "string",\n        "height": "string",\n        "time": "2023-01-13",\n        "last_block_id": {\n          "hash": "string",\n          "part_set_header": {\n            "total": 0,\n            "hash": "string"\n          }\n        },\n        "last_commit_hash": "string",\n        "data_hash": "string",\n        "validators_hash": "string",\n        "next_validators_hash": "string",\n        "consensus_hash": "string",\n        "app_hash": "string",\n        "last_results_hash": "string",\n        "evidence_hash": "string",\n        "proposer_address": "string"\n      },\n      "babylon_epoch": "string",\n      "babylon_tx_hash": "string"\n    }\n  ],\n  "pagination": {\n    "next_key": "string",\n    "total": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"An unexpected error response.")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(h.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"details"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,deprecated:void 0,schemaDescription:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.',schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"Must be a valid serialized protocol buffer of the above specified type.",schemaName:"byte",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(h.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);