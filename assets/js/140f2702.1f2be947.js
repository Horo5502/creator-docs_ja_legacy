"use strict";(self.webpackChunkdocs_ja=self.webpackChunkdocs_ja||[]).push([[341],{4607:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>t});var i=r(4848),s=r(8453);const d={},l="UdonSharp",c={id:"worlds/udon/udonSharp/legacy-docs/UdonSharp",title:"UdonSharp",description:"C# to UdonAssembly \u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc",source:"@site/.docs/worlds/udon/udonSharp/legacy-docs/UdonSharp.md",sourceDirName:"worlds/udon/udonSharp/legacy-docs",slug:"/worlds/udon/udonSharp/legacy-docs/UdonSharp",permalink:"/creator-docs_ja/worlds/udon/udonSharp/legacy-docs/UdonSharp",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b",permalink:"/creator-docs_ja/worlds/udon/udonSharp/legacy-docs/Getting-Started/examples"},next:{title:"Creator Companion",permalink:"/creator-docs_ja/vcc/"}},o={},t=[{value:"C# to UdonAssembly \u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc",id:"c-to-udonassembly-\u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc",level:2},{value:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308bC#\u306e\u6a5f\u80fd",id:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308bc\u306e\u6a5f\u80fd",level:2},{value:"\u901a\u5e38\u306eUnity C#\u3068\u306e\u9055\u3044",id:"\u901a\u5e38\u306eunity-c\u3068\u306e\u9055\u3044",level:2},{value:"U#\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059Udon\u306e\u30d0\u30b0",id:"u\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059udon\u306e\u30d0\u30b0",level:2},{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u5fc5\u8981\u306a\u3082\u306e",id:"\u5fc5\u8981\u306a\u3082\u306e",level:3},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"Project\u30bf\u30d6\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u4f5c\u6210",id:"project\u30bf\u30d6\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u4f5c\u6210",level:4},{value:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f8b",id:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f8b",level:3},{value:"\u56de\u8ee2\u3059\u308b\u30ad\u30e5\u30fc\u30d6",id:"\u56de\u8ee2\u3059\u308b\u30ad\u30e5\u30fc\u30d6",level:4},{value:"\u4ed6\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b",id:"\u4ed6\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b",level:3},{value:"\u30af\u30ec\u30b8\u30c3\u30c8",id:"\u30af\u30ec\u30b8\u30c3\u30c8",level:2}];function h(n){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"udonsharp",children:"UdonSharp"})}),"\n",(0,i.jsx)(e.h2,{id:"c-to-udonassembly-\u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc",children:"C# to UdonAssembly \u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc"}),"\n",(0,i.jsx)(e.p,{children:"UdonSharp\u306fC#\u3092Udon\u30a2\u30bb\u30f3\u30d6\u30ea\u30fc\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\u3067\u3059\u3002UdonSharp\u306f\u73fe\u5728C#\u8a00\u8a9e\u4ed5\u69d8\u306e\u3069\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3082\u6e96\u62e0\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u672a\u5b9f\u88c5\u306e\u3082\u306e\u3084\u52d5\u4f5c\u3057\u306a\u3044\u3082\u306e\u304c\u591a\u304f\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308bc\u306e\u6a5f\u80fd",children:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308bC#\u306e\u6a5f\u80fd"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5236\u5fa1\u69cb\u6587"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"if"})," ",(0,i.jsx)(e.code,{children:"else"})," ",(0,i.jsx)(e.code,{children:"while"})," ",(0,i.jsx)(e.code,{children:"for"})," ",(0,i.jsx)(e.code,{children:"do"})," ",(0,i.jsx)(e.code,{children:"foreach"})," ",(0,i.jsx)(e.code,{children:"switch"})," ",(0,i.jsx)(e.code,{children:"return"})," ",(0,i.jsx)(e.code,{children:"break"})," ",(0,i.jsx)(e.code,{children:"continue"})," ",(0,i.jsx)(e.code,{children:"ternary operator (condition ? true : false)"})," ",(0,i.jsx)(e.code,{children:"??"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u660e\u793a\u7684&\u6697\u9ed9\u7684\u578b\u5909\u63db"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u914d\u5217\u3068\u914d\u5217\u30a4\u30f3\u30c7\u30af\u30b5\u30fc"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u3059\u3079\u3066\u306e\u7d44\u307f\u8fbc\u307f\u306e\u7b97\u8853\u8a08\u7b97"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6761\u4ef6\u5f0f\u306e\u77ed\u7d61\u8a55\u4fa1"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4f8b: ",(0,i.jsx)(e.code,{children:"(true || CheckIfTrue())"}),"\u3068\u3059\u308b\u3068CheckIfTrue()\u306f\u5b9f\u884c\u3055\u308c\u307e\u305b\u3093"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"typeof()"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Extern methods with out or ref parameters (such as many variants of ",(0,i.jsx)(e.code,{children:"Physics.Raycast()"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["User defined methods with parameters and return values, supports out/ref, extension methods, and ",(0,i.jsx)(e.code,{children:"params"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"User defined properties"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Static user methods"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"UdonSharpBehaviour inheritence, virtual methods, etc."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Unity/Udon event callbacks with arguments. For instance, registering a OnPlayerJoined event with a VRCPlayerApi argument is valid."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"String interpolation"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Field initializers"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Jagged arrays"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Referencing other custom UdonSharpBehaviour classes, accessing fields, and calling methods on them"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Recursive method calls are supported via the ",(0,i.jsx)(e.code,{children:"[RecursiveMethod]"})," attribute"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u901a\u5e38\u306eunity-c\u3068\u306e\u9055\u3044",children:"\u901a\u5e38\u306eUnity C#\u3068\u306e\u9055\u3044"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["UdonSharp\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210\u3092\u697d\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u3067\u306f",(0,i.jsx)(e.code,{children:"MonoBehaviour"}),"\u306e\u4ee3\u308f\u308a\u306b",(0,i.jsx)(e.code,{children:"UdonSharpBehaviour"}),"\u3092\u7d99\u627f\u3057\u3066\u304f\u3060\u3055\u3044"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"GetComponent<UdonBehaviour>()"}),"\u3092\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u73fe\u6642\u70b9\u3067\u306f",(0,i.jsx)(e.code,{children:"(UdonBehaviour)GetComponent(typeof(UdonBehaviour))"}),"\u3092\u4ee3\u308f\u308a\u306b\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306f\u3001UdonBehaviour\u306b\u6c4e\u7528\u306eget\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u307e\u3060\u516c\u958b\u3055\u308c\u3066\u3044\u306a\u3044\u304b\u3089\u3067\u3059\u3002\u4ed6\u306eUnity\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u306f",(0,i.jsx)(e.code,{children:"GetComponent<T>()"}),"\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["Udon\u306f\u73fe\u5728\u3001\u914d\u5217 ",(0,i.jsx)(e.code,{children:"[]"})," \u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u304a\u308a\u3001\u305d\u306e\u305f\u3081\u73fe\u6642\u70b9\u3067\u306fUdonSharp\u3082\u914d\u5217\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3069\u3053\u304b\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067",(0,i.jsx)(e.code,{children:"List<T>"}),"\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u304c\u3001\u4eca\u306f\u307e\u3060\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u521d\u671f\u5316\u5f0f\u306f\u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u306b\u8a55\u4fa1\u3055\u308c\u307e\u3059\u3002\u30b7\u30fc\u30f3\u5185\u306e\u4ed6\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u4f9d\u5b58\u3059\u308b\u521d\u671f\u5316\u5f0f\u306f\u3001Start\u306e\u4e2d\u306b\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"UdonSynced"}),"\u5c5e\u6027\u3092\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u4ed8\u4e0e\u3059\u308b\u3053\u3068\u3067\u3001\u540c\u671f\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u6570\u5024\u306e\u30ad\u30e3\u30b9\u30c8\u306f\u3001UdonVM\u306e\u5236\u9650\u306e\u5f71\u97ff\u3067\u30aa\u30fc\u30d0\u30fc\u30d5\u30ed\u30fc\u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["The internal type of variables returned by ",(0,i.jsx)(e.code,{children:".GetType()"})," will not always match what you may expect since U# abstracts some types in order to make them work in Udon. For instance, any jagged array type will return a type of ",(0,i.jsx)(e.code,{children:"object[]"})," instead of something like ",(0,i.jsx)(e.code,{children:"int[][]"})," for a 2D int jagged array."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"u\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059udon\u306e\u30d0\u30b0",children:"U#\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059Udon\u306e\u30d0\u30b0"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Mutating methods on structs do not modify the struct (this can be seen on things like calling Normalize() on a Vector3) ",(0,i.jsx)(e.a,{href:"https://vrchat.canny.io/vrchat-udon-closed-alpha-bugs/p/raysetorigin-and-raysetdirection-not-working",children:"https://vrchat.canny.io/vrchat-udon-closed-alpha-bugs/p/raysetorigin-and-raysetdirection-not-working"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,i.jsx)(e.h3,{id:"\u5fc5\u8981\u306a\u3082\u306e",children:"\u5fc5\u8981\u306a\u3082\u306e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Unity 2019.4.31f1"}),"\n",(0,i.jsxs)(e.li,{children:["(\u8a33\u6ce8: ",(0,i.jsx)(e.a,{href:"https://vrchat.com/home/download",children:"VCC"}),")"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"(\u8a33\u6ce8: \u4e0b\u8a182\u3064\u306f\u73fe\u5728\u3067\u306fVCC\u304c\u81ea\u52d5\u3067\u7528\u610f\u3059\u308b\u305f\u3081\u3001\u5fc5\u8981\u306a\u3057)"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://vrchat.com/home/download",children:"VRCSDK3 + UdonSDK"})}),"\n",(0,i.jsxs)(e.li,{children:["\u6700\u65b0\u306e",(0,i.jsx)(e.a,{href:"https://github.com/vrchat-community/UdonSharp/releases/latest",children:"Udonsharp"})]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/worlds/udon/getting-started-with-udon",children:"\u306f\u3058\u3081\u3066\u306eUdon"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002\u3053\u3053\u306b\u306fUdon\u306e\u57fa\u672c\u7684\u306a\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u304c\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:'(\u8a33\u6ce8: \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u65b0\u898f\u4f5c\u6210\u6642\u3001"World"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3059\u308c\u3070\u81ea\u52d5\u3067Udon\u3068UdonSharp\u3082\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u305f\u3081\u3001\u4e0b\u8a182\u3064\u306f\u73fe\u5728\u3067\u306f\u884c\u3046\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002)'}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u4e0a\u8a18\u306e\u30da\u30fc\u30b8\u306b\u5f93\u3063\u3066VRCSDK3\u306e\u6700\u65b0\u7248\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u6700\u65b0\u306eUdonSharp\u3092",(0,i.jsx)(e.a,{href:"https://github.com/vrchat-community/UdonSharp/releases/latest",children:"\u3053\u3061\u3089"}),"\u304b\u3089\u53d6\u5f97\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u30b7\u30fc\u30f3\u5185\u3067\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u65b0\u898f\u4f5c\u6210"}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Udon Behaviour"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0"]}),"\n",(0,i.jsx)(e.li,{children:'"New Program"\u30dc\u30bf\u30f3\u306e\u4e0b\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001"Udon C# Program Asset"\u3092\u9078\u629e'}),"\n",(0,i.jsx)(e.li,{children:"(\u8a33\u6ce8: \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u65b0\u898f\u4f5c\u6210\u3057\u305f\u5834\u5408\u3001\u5148\u306b\u30b7\u30fc\u30f3\u3092\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059)"}),"\n",(0,i.jsx)(e.li,{children:'"New Program"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3002UdonSharp\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u30a2\u30bb\u30c3\u30c8\u304c\u65b0\u898f\u4f5c\u6210\u3055\u308c\u307e\u3059'}),"\n",(0,i.jsx)(e.li,{children:'"Create Script"\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4fdd\u5b58\u5834\u6240\u3068\u540d\u524d\u3092\u5165\u529b'}),"\n",(0,i.jsxs)(e.li,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u306b\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u81ea\u52d5\u3067\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u3059\u3050\u306b\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u59cb\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u3066\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3092\u306f\u3058\u3081\u307e\u3057\u3087\u3046\u3002",(0,i.jsx)(e.br,{}),"\n","(\u8a33\u6ce8: \u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u6642\u306b\u958b\u304b\u308c\u308b\u30a8\u30c7\u30a3\u30bf\u306fPreferences\u304b\u3089\u5909\u66f4\u3067\u304d\u307e\u3059)"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"project\u30bf\u30d6\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u4f5c\u6210",children:"Project\u30bf\u30d6\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u4f5c\u6210"}),"\n",(0,i.jsx)(e.p,{children:"UdonBehaviour\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u3053\u306e\u3088\u3046\u306b\u3057\u3066\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Project\u30bf\u30d6\u5185\u3067\u53f3\u30af\u30ea\u30c3\u30af"}),"\n",(0,i.jsx)(e.li,{children:"\u30e1\u30cb\u30e5\u30fc\u5185\u3067Create > U# script"}),"\n",(0,i.jsx)(e.li,{children:"U# script\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30d5\u30a1\u30a4\u30eb\u4f5c\u6210\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u307e\u3059"}),"\n",(0,i.jsx)(e.li,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u540d\u524d\u3092\u5165\u529b\u3057\u3001\u4fdd\u5b58"}),"\n",(0,i.jsx)(e.li,{children:".cs\u30b9\u30af\u30ea\u30d7\u30c8\u30d5\u30a1\u30a4\u30eb\u3068\u305d\u308c\u306b\u7d10\u3065\u304fUdonSharp program asset\u304c\u540c\u3058\u30d5\u30a9\u30eb\u30c0\u5185\u306b\u4f5c\u6210\u3055\u308c\u307e\u3057\u305f"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f8b",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f8b"}),"\n",(0,i.jsx)(e.h4,{id:"\u56de\u8ee2\u3059\u308b\u30ad\u30e5\u30fc\u30d6",children:"\u56de\u8ee2\u3059\u308b\u30ad\u30e5\u30fc\u30d6"}),"\n",(0,i.jsx)(e.p,{children:"\u30a2\u30bf\u30c3\u30c1\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6bce\u79d290\u5ea6\u56de\u8ee2\u3055\u305b\u308b\u30b9\u30af\u30ea\u30d7\u30c8"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cs",children:"using UnityEngine;\r\nusing UdonSharp;\r\n\r\npublic class RotatingCubeBehaviour : UdonSharpBehaviour\r\n{\r\n    private void Update()\r\n    {\r\n        transform.Rotate(Vector3.up, 90f * Time.deltaTime);\r\n    }\r\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u4ed6\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b",children:"\u4ed6\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b"}),"\n",(0,i.jsxs)(e.p,{children:["\u305d\u306e\u4ed6\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b\u306b\u95a2\u3057\u3066\u306f\u3001",(0,i.jsx)(e.a,{href:"/worlds/udonsharp/Getting-Started/examples",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b"}),"\u3084\u3001U#\u5185\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b\u304c\u5165\u3063\u305f\u30d5\u30a9\u30eb\u30c0\u3001",(0,i.jsx)(e.a,{href:"/worlds/udonsharp/Getting-Started/community-resources",children:"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u8cc7\u6599"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u30af\u30ec\u30b8\u30c3\u30c8",children:"\u30af\u30ec\u30b8\u30c3\u30c8"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["UdonSharp\u306e\u6539\u5584\u306b\u8ca2\u732e\u3057\u305f\u4eba\u3005\u306b\u3064\u3044\u3066\u306f",(0,i.jsx)(e.a,{href:"https://github.com/vrchat-community/UdonSharp/blob/master/CONTRIBUTORS.md",children:"CONTRIBUTORS.md"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",(0,i.jsx)(e.a,{href:"https://github.com/pardeike/Harmony",children:"Harmony"}),"\u306fUdonsharp\u306e\u30a8\u30c7\u30a3\u30bf\u30fc\u4f53\u9a13\u306e\u5411\u4e0a\u306b\u8ca2\u732e\u3057\u307e\u3057\u305f\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:""}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://discord.gg/Ub2n8ZA",children:(0,i.jsx)(e.img,{src:"https://img.shields.io/badge/Discord-Merlin%27s%20Discord%20Server-blueviolet?logo=discord",alt:"Discord"})})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>c});var i=r(6540);const s={},d=i.createContext(s);function l(n){const e=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);