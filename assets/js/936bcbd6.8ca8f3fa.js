"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,h=s["".concat(d,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="UdonSharp",o={unversionedId:"worlds/udon/udonsharp/index",id:"worlds/udon/udonsharp/index",title:"UdonSharp",description:"C to UdonAssembly \u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc",source:"@site/docs/worlds/udon/udonsharp/index.md",sourceDirName:"worlds/udon/udonsharp",slug:"/worlds/udon/udonsharp/",permalink:"/creator-docs_ja/worlds/udon/udonsharp/",draft:!1,editUrl:"https://github.com/Horo5502/creator-docs_ja/docs/worlds/udon/udonsharp/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Player API",permalink:"/creator-docs_ja/worlds/udon/playerapi/"},next:{title:"UdonSharp",permalink:"/creator-docs_ja/worlds/udon/udonsharp/documentation/udonsharp"}},d={},p=[{value:"C# to UdonAssembly \u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc",id:"c-to-udonassembly-\u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc",level:2},{value:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308bC#\u306e\u6a5f\u80fd",id:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308bc\u306e\u6a5f\u80fd",level:2},{value:"\u901a\u5e38\u306eUnity C#\u3068\u306e\u9055\u3044",id:"\u901a\u5e38\u306eunity-c\u3068\u306e\u9055\u3044",level:2},{value:"U#\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059Udon\u306e\u30d0\u30b0",id:"u\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059udon\u306e\u30d0\u30b0",level:2},{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u5fc5\u8981\u306a\u3082\u306e",id:"\u5fc5\u8981\u306a\u3082\u306e",level:3},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"Project\u30bf\u30d6\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u4f5c\u6210",id:"project\u30bf\u30d6\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u4f5c\u6210",level:4},{value:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f8b",id:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f8b",level:3},{value:"\u56de\u8ee2\u3059\u308b\u30ad\u30e5\u30fc\u30d6",id:"\u56de\u8ee2\u3059\u308b\u30ad\u30e5\u30fc\u30d6",level:4},{value:"\u4ed6\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b",id:"\u4ed6\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b",level:3},{value:"\u30af\u30ec\u30b8\u30c3\u30c8",id:"\u30af\u30ec\u30b8\u30c3\u30c8",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"udonsharp"},"UdonSharp"),(0,r.kt)("h2",{id:"c-to-udonassembly-\u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc"},"C# to UdonAssembly \u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc"),(0,r.kt)("p",null,"UdonSharp\u306fC#\u3092Udon\u30a2\u30bb\u30f3\u30d6\u30ea\u30fc\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\u3067\u3059\u3002UdonSharp\u306f\u73fe\u5728C#\u8a00\u8a9e\u4ed5\u69d8\u306e\u3069\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3082\u6e96\u62e0\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u672a\u5b9f\u88c5\u306e\u3082\u306e\u3084\u52d5\u4f5c\u3057\u306a\u3044\u3082\u306e\u304c\u591a\u304f\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308bc\u306e\u6a5f\u80fd"},"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308bC#\u306e\u6a5f\u80fd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5236\u5fa1\u69cb\u6587",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"if")," ",(0,r.kt)("inlineCode",{parentName:"li"},"else")," ",(0,r.kt)("inlineCode",{parentName:"li"},"while")," ",(0,r.kt)("inlineCode",{parentName:"li"},"for")," ",(0,r.kt)("inlineCode",{parentName:"li"},"do")," ",(0,r.kt)("inlineCode",{parentName:"li"},"foreach")," ",(0,r.kt)("inlineCode",{parentName:"li"},"switch")," ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," ",(0,r.kt)("inlineCode",{parentName:"li"},"break")," ",(0,r.kt)("inlineCode",{parentName:"li"},"continue")," ",(0,r.kt)("inlineCode",{parentName:"li"},"ternary operator (condition ? true : false)")," ",(0,r.kt)("inlineCode",{parentName:"li"},"??"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u660e\u793a\u7684&\u6697\u9ed9\u7684\u578b\u5909\u63db"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u5217\u3068\u914d\u5217\u30a4\u30f3\u30c7\u30af\u30b5\u30fc"),(0,r.kt)("li",{parentName:"ul"},"\u3059\u3079\u3066\u306e\u7d44\u307f\u8fbc\u307f\u306e\u7b97\u8853\u8a08\u7b97"),(0,r.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u5f0f\u306e\u77ed\u7d61\u8a55\u4fa1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b: ",(0,r.kt)("inlineCode",{parentName:"li"},"(true || CheckIfTrue())"),"\u3068\u3059\u308b\u3068CheckIfTrue()\u306f\u5b9f\u884c\u3055\u308c\u307e\u305b\u3093"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"typeof()")),(0,r.kt)("li",{parentName:"ul"},"Extern methods with out or ref parameters (such as many variants of ",(0,r.kt)("inlineCode",{parentName:"li"},"Physics.Raycast()"),")"),(0,r.kt)("li",{parentName:"ul"},"User defined methods with parameters and return values, supports out/ref, extension methods, and ",(0,r.kt)("inlineCode",{parentName:"li"},"params")),(0,r.kt)("li",{parentName:"ul"},"User defined properties"),(0,r.kt)("li",{parentName:"ul"},"Static user methods"),(0,r.kt)("li",{parentName:"ul"},"UdonSharpBehaviour inheritence, virtual methods, etc."),(0,r.kt)("li",{parentName:"ul"},"Unity/Udon event callbacks with arguments. For instance, registering a OnPlayerJoined event with a VRCPlayerApi argument is valid."),(0,r.kt)("li",{parentName:"ul"},"String interpolation"),(0,r.kt)("li",{parentName:"ul"},"Field initializers"),(0,r.kt)("li",{parentName:"ul"},"Jagged arrays"),(0,r.kt)("li",{parentName:"ul"},"Referencing other custom UdonSharpBehaviour classes, accessing fields, and calling methods on them"),(0,r.kt)("li",{parentName:"ul"},"Recursive method calls are supported via the ",(0,r.kt)("inlineCode",{parentName:"li"},"[RecursiveMethod]")," attribute")),(0,r.kt)("h2",{id:"\u901a\u5e38\u306eunity-c\u3068\u306e\u9055\u3044"},"\u901a\u5e38\u306eUnity C#\u3068\u306e\u9055\u3044"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UdonSharp\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210\u3092\u697d\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"li"},"MonoBehaviour"),"\u306e\u4ee3\u308f\u308a\u306b",(0,r.kt)("inlineCode",{parentName:"li"},"UdonSharpBehaviour"),"\u3092\u7d99\u627f\u3057\u3066\u304f\u3060\u3055\u3044"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetComponent<UdonBehaviour>()"),"\u3092\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u73fe\u6642\u70b9\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"li"},"(UdonBehaviour)GetComponent(typeof(UdonBehaviour))"),"\u3092\u4ee3\u308f\u308a\u306b\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306f\u3001UdonBehaviour\u306b\u6c4e\u7528\u306eget\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u307e\u3060\u516c\u958b\u3055\u308c\u3066\u3044\u306a\u3044\u304b\u3089\u3067\u3059\u3002\u4ed6\u306eUnity\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u306f",(0,r.kt)("inlineCode",{parentName:"li"},"GetComponent<T>()"),"\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"Udon\u306f\u73fe\u5728\u3001\u914d\u5217 ",(0,r.kt)("inlineCode",{parentName:"li"},"[]")," \u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u304a\u308a\u3001\u305d\u306e\u305f\u3081\u73fe\u6642\u70b9\u3067\u306fUdonSharp\u3082\u914d\u5217\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3069\u3053\u304b\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067",(0,r.kt)("inlineCode",{parentName:"li"},"List<T>"),"\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u304c\u3001\u4eca\u306f\u307e\u3060\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u521d\u671f\u5316\u5f0f\u306f\u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u306b\u8a55\u4fa1\u3055\u308c\u307e\u3059\u3002\u30b7\u30fc\u30f3\u5185\u306e\u4ed6\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u4f9d\u5b58\u3059\u308b\u521d\u671f\u5316\u5f0f\u306f\u3001Start\u306e\u4e2d\u306b\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UdonSynced"),"\u5c5e\u6027\u3092\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u4ed8\u4e0e\u3059\u308b\u3053\u3068\u3067\u3001\u540c\u671f\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u5024\u306e\u30ad\u30e3\u30b9\u30c8\u306f\u3001UdonVM\u306e\u5236\u9650\u306e\u5f71\u97ff\u3067\u30aa\u30fc\u30d0\u30fc\u30d5\u30ed\u30fc\u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"The internal type of variables returned by ",(0,r.kt)("inlineCode",{parentName:"li"},".GetType()")," will not always match what you may expect since U# abstracts some types in order to make them work in Udon. For instance, any jagged array type will return a type of ",(0,r.kt)("inlineCode",{parentName:"li"},"object[]")," instead of something like ",(0,r.kt)("inlineCode",{parentName:"li"},"int[][]")," for a 2D int jagged array.")),(0,r.kt)("h2",{id:"u\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059udon\u306e\u30d0\u30b0"},"U#\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059Udon\u306e\u30d0\u30b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mutating methods on structs do not modify the struct (this can be seen on things like calling Normalize() on a Vector3) ",(0,r.kt)("a",{parentName:"li",href:"https://vrchat.canny.io/vrchat-udon-closed-alpha-bugs/p/raysetorigin-and-raysetdirection-not-working"},"https://vrchat.canny.io/vrchat-udon-closed-alpha-bugs/p/raysetorigin-and-raysetdirection-not-working"))),(0,r.kt)("h2",{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),(0,r.kt)("h3",{id:"\u5fc5\u8981\u306a\u3082\u306e"},"\u5fc5\u8981\u306a\u3082\u306e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unity 2019.4.31f1"),(0,r.kt)("li",{parentName:"ul"},"(\u8a33\u6ce8: ",(0,r.kt)("a",{parentName:"li",href:"https://vrchat.com/home/download"},"VCC"),")")),(0,r.kt)("p",null,"(\u8a33\u6ce8: \u4e0b\u8a182\u3064\u306f\u73fe\u5728\u3067\u306fVCC\u304c\u81ea\u52d5\u3067\u7528\u610f\u3059\u308b\u305f\u3081\u3001\u5fc5\u8981\u306a\u3057)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vrchat.com/home/download"},"VRCSDK3 + UdonSDK")),(0,r.kt)("li",{parentName:"ul"},"\u6700\u65b0\u306e",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vrchat-community/UdonSharp/releases/latest"},"Udonsharp"))),(0,r.kt)("h3",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/worlds/udon/getting-started-with-udon"},"\u306f\u3058\u3081\u3066\u306eUdon"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002\u3053\u3053\u306b\u306fUdon\u306e\u57fa\u672c\u7684\u306a\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u304c\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("p",null,'(\u8a33\u6ce8: \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u65b0\u898f\u4f5c\u6210\u6642\u3001"World"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3059\u308c\u3070\u81ea\u52d5\u3067Udon\u3068UdonSharp\u3082\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u305f\u3081\u3001\u4e0b\u8a182\u3064\u306f\u73fe\u5728\u3067\u306f\u884c\u3046\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002)  '),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4e0a\u8a18\u306e\u30da\u30fc\u30b8\u306b\u5f93\u3063\u3066VRCSDK3\u306e\u6700\u65b0\u7248\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6700\u65b0\u306eUdonSharp\u3092",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vrchat-community/UdonSharp/releases/latest"},"\u3053\u3061\u3089"),"\u304b\u3089\u53d6\u5f97\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3002")),(0,r.kt)("h3",{id:"getting-started"},"Getting started"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u30b7\u30fc\u30f3\u5185\u3067\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u65b0\u898f\u4f5c\u6210"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Udon Behaviour"),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0"),(0,r.kt)("li",{parentName:"ol"},'"New Program"\u30dc\u30bf\u30f3\u306e\u4e0b\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001"Udon C# Program Asset"\u3092\u9078\u629e'),(0,r.kt)("li",{parentName:"ol"},"(\u8a33\u6ce8: \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u65b0\u898f\u4f5c\u6210\u3057\u305f\u5834\u5408\u3001\u5148\u306b\u30b7\u30fc\u30f3\u3092\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059)"),(0,r.kt)("li",{parentName:"ol"},'"New Program"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3002UdonSharp\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u30a2\u30bb\u30c3\u30c8\u304c\u65b0\u898f\u4f5c\u6210\u3055\u308c\u307e\u3059'),(0,r.kt)("li",{parentName:"ol"},'"Create Script"\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4fdd\u5b58\u5834\u6240\u3068\u540d\u524d\u3092\u5165\u529b'),(0,r.kt)("li",{parentName:"ol"},"\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u306b\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u81ea\u52d5\u3067\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u3059\u3050\u306b\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u59cb\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u3066\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3092\u306f\u3058\u3081\u307e\u3057\u3087\u3046\u3002",(0,r.kt)("br",{parentName:"li"}),"(\u8a33\u6ce8: \u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u6642\u306b\u958b\u304b\u308c\u308b\u30a8\u30c7\u30a3\u30bf\u306fPreferences\u304b\u3089\u5909\u66f4\u3067\u304d\u307e\u3059)")),(0,r.kt)("h4",{id:"project\u30bf\u30d6\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u4f5c\u6210"},"Project\u30bf\u30d6\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u4f5c\u6210"),(0,r.kt)("p",null,"UdonBehaviour\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u3053\u306e\u3088\u3046\u306b\u3057\u3066\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Project\u30bf\u30d6\u5185\u3067\u53f3\u30af\u30ea\u30c3\u30af"),(0,r.kt)("li",{parentName:"ol"},"\u30e1\u30cb\u30e5\u30fc\u5185\u3067Create > U# script"),(0,r.kt)("li",{parentName:"ol"},"U# script\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30d5\u30a1\u30a4\u30eb\u4f5c\u6210\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u307e\u3059"),(0,r.kt)("li",{parentName:"ol"},"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u540d\u524d\u3092\u5165\u529b\u3057\u3001\u4fdd\u5b58"),(0,r.kt)("li",{parentName:"ol"},".cs\u30b9\u30af\u30ea\u30d7\u30c8\u30d5\u30a1\u30a4\u30eb\u3068\u305d\u308c\u306b\u7d10\u3065\u304fUdonSharp program asset\u304c\u540c\u3058\u30d5\u30a9\u30eb\u30c0\u5185\u306b\u4f5c\u6210\u3055\u308c\u307e\u3057\u305f")),(0,r.kt)("h3",{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f8b"},"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f8b"),(0,r.kt)("h4",{id:"\u56de\u8ee2\u3059\u308b\u30ad\u30e5\u30fc\u30d6"},"\u56de\u8ee2\u3059\u308b\u30ad\u30e5\u30fc\u30d6"),(0,r.kt)("p",null,"\u30a2\u30bf\u30c3\u30c1\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6bce\u79d290\u5ea6\u56de\u8ee2\u3055\u305b\u308b\u30b9\u30af\u30ea\u30d7\u30c8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using UnityEngine;\nusing UdonSharp;\n\npublic class RotatingCubeBehaviour : UdonSharpBehaviour\n{\n    private void Update()\n    {\n        transform.Rotate(Vector3.up, 90f * Time.deltaTime);\n    }\n}\n")),(0,r.kt)("h3",{id:"\u4ed6\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b"},"\u4ed6\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b"),(0,r.kt)("p",null,"\u305d\u306e\u4ed6\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b\u306b\u95a2\u3057\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/worlds/udon/udonsharp/examples"},"\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b"),"\u3084\u3001U#\u5185\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b\u304c\u5165\u3063\u305f\u30d5\u30a9\u30eb\u30c0\u3001",(0,r.kt)("a",{parentName:"p",href:"/worlds/udon/udonsharp/community-resources"},"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u8cc7\u6599"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u30af\u30ec\u30b8\u30c3\u30c8"},"\u30af\u30ec\u30b8\u30c3\u30c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UdonSharp\u306e\u6539\u5584\u306b\u8ca2\u732e\u3057\u305f\u4eba\u3005\u306b\u3064\u3044\u3066\u306f",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vrchat-community/UdonSharp/blob/master/CONTRIBUTORS.md"},"CONTRIBUTORS.md"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pardeike/Harmony"},"Harmony"),"\u306fUdonsharp\u306e\u30a8\u30c7\u30a3\u30bf\u30fc\u4f53\u9a13\u306e\u5411\u4e0a\u306b\u8ca2\u732e\u3057\u307e\u3057\u305f\u3002")),(0,r.kt)("h1",{id:""}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/Ub2n8ZA"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Discord-Merlin%27s%20Discord%20Server-blueviolet?logo=discord",alt:"Discord"}))))}m.isMDXComponent=!0}}]);