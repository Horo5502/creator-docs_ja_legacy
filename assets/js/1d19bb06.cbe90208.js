"use strict";(self.webpackChunkdocs_ja=self.webpackChunkdocs_ja||[]).push([[778],{4697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(5893),r=n(1151);const i={title:"\u30e9\u30f3\u30bf\u30a4\u30e0\u4f8b\u5916\u306e\u30c7\u30d0\u30c3\u30b0"},c=void 0,d={id:"worlds/udonsharp/Extra/runtime-exception-debugging",title:"\u30e9\u30f3\u30bf\u30a4\u30e0\u4f8b\u5916\u306e\u30c7\u30d0\u30c3\u30b0",description:"\u81ea\u5206\u304c\u66f8\u3044\u305f\u30d7\u30ed\u30b0\u30e9\u30e0\u304c\u3001\u30b2\u30fc\u30e0\u5185\u3067\u3057\u304b\u30c7\u30d0\u30c3\u30b0\u3067\u304d\u306a\u3044\u3053\u3068\u306b\u6c17\u3065\u304f\u3053\u3068\u304c\u3042\u308b\u3067\u3057\u3087\u3046\u3002\u305d\u306e\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f8b\u5916\u3092\u6349\u3048\u3001\u7406\u89e3\u3057\u3084\u3059\u304f\u3059\u308b\u305f\u3081\u306b\u3001U#\u306b\u306fVRChat\u306e\u51fa\u529b\u30ed\u30b0\u304b\u3089\u4f8b\u5916\u3092\u63a2\u3059\u30e9\u30f3\u30bf\u30a4\u30e0\u4f8b\u5916\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc\u306f\u3001\u4f8b\u5916\u3092\u8d77\u3053\u3057\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u3068\u884c\u3092\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30ed\u30b0\u306b\u51fa\u529b\u3057\u307e\u3059\u3002",source:"@site/docs/worlds/udonsharp/Extra/runtime-exception-debugging.md",sourceDirName:"worlds/udonsharp/Extra",slug:"/worlds/udonsharp/Extra/runtime-exception-debugging",permalink:"/creator-docs_ja/worlds/udonsharp/Extra/runtime-exception-debugging",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1707325724,formattedLastUpdatedAt:"2024\u5e742\u67087\u65e5",frontMatter:{title:"\u30e9\u30f3\u30bf\u30a4\u30e0\u4f8b\u5916\u306e\u30c7\u30d0\u30c3\u30b0"},sidebar:"tutorialSidebar",previous:{title:"VRChat API",permalink:"/creator-docs_ja/worlds/udonsharp/Documentation/vrchat-api"},next:{title:"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30fc\u8cc7\u6599",permalink:"/creator-docs_ja/worlds/udonsharp/Getting-Started/community-resources"}},a={},o=[{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u624b\u9806",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u624b\u9806",level:3},{value:"\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:4},{value:"VRChat\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"vrchat\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:4}];function l(e){const t={br:"br",code:"code",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"\u81ea\u5206\u304c\u66f8\u3044\u305f\u30d7\u30ed\u30b0\u30e9\u30e0\u304c\u3001\u30b2\u30fc\u30e0\u5185\u3067\u3057\u304b\u30c7\u30d0\u30c3\u30b0\u3067\u304d\u306a\u3044\u3053\u3068\u306b\u6c17\u3065\u304f\u3053\u3068\u304c\u3042\u308b\u3067\u3057\u3087\u3046\u3002\u305d\u306e\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f8b\u5916\u3092\u6349\u3048\u3001\u7406\u89e3\u3057\u3084\u3059\u304f\u3059\u308b\u305f\u3081\u306b\u3001U#\u306b\u306fVRChat\u306e\u51fa\u529b\u30ed\u30b0\u304b\u3089\u4f8b\u5916\u3092\u63a2\u3059\u30e9\u30f3\u30bf\u30a4\u30e0\u4f8b\u5916\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc\u306f\u3001\u4f8b\u5916\u3092\u8d77\u3053\u3057\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u3068\u884c\u3092\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30ed\u30b0\u306b\u51fa\u529b\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u624b\u9806",children:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u624b\u9806"}),"\n",(0,s.jsx)(t.h4,{id:"\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u3066\u3001Project settings\u30e1\u30cb\u30e5\u30fc\u3092\u958b\u304f"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Project Settings",src:n(2975).Z+"",width:"175",height:"300"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:['"Udon Sharp"\u5185\u306e',(0,s.jsx)(t.code,{children:"Listen for client exceptions"}),"(\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u4f8b\u5916\u3092\u30ea\u30c3\u30b9\u30f3\u3059\u308b)\u3092\u30aa\u30f3\u306b\u3059\u308b"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Listen for Client Exceptions",src:n(7551).Z+"",width:"485",height:"300"})}),"\n",(0,s.jsx)(t.h4,{id:"vrchat\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"VRChat\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Steam\u30e9\u30a4\u30d6\u30e9\u30ea\u5185\u306eVRChat\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001",(0,s.jsx)(t.code,{children:"Properties..."}),"(",(0,s.jsx)(t.code,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3..."}),")\u3092\u30af\u30ea\u30c3\u30af"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Steam VRChat Properties",src:n(9331).Z+"",width:"421",height:"272"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Set Launch Options"}),"\u3092\u30af\u30ea\u30c3\u30af",(0,s.jsx)(t.br,{}),"\n","(\u8a33\u6ce8: \u73fe\u5728\u3067\u306fSteam\u306eUI\u304c\u5909\u308f\u3063\u3066\u3044\u308b\u305f\u3081\u3001",(0,s.jsx)(t.code,{children:"\u4e0a\u7d1a\u30e6\u30fc\u30b6\u30fc\u306f\u8d77\u52d5\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u4fee\u6b63\u3092\u5165\u529b\u3067\u304d\u307e\u3059"}),"\u306e\u6b04\u306b\u4ee5\u4e0b\u306e\u5f15\u6570\u3092\u76f4\u63a5\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002)"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Set Launch Options",src:n(766).Z+"",width:"319",height:"300"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["\u8d77\u52d5\u30aa\u30d7\u30b7\u30e7\u30f3\u306b",(0,s.jsx)(t.code,{children:"--enable-udon-debug-logging"}),"\u3092\u8ffd\u52a0\u3057\u3066\u3001OK\u3092\u30af\u30ea\u30c3\u30af"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Steam Launch Args",src:n(9825).Z+"",width:"560",height:"266"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:["\u4e00\u5ea6\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30a8\u30c7\u30a3\u30bf\u30fc\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u305f\u3089\u3001\u3042\u3068\u306f\u30b2\u30fc\u30e0\u3092\u8d77\u52d5\u3057\u3066\u30ef\u30fc\u30eb\u30c9\u306b\u5165\u308b\u3060\u3051\u3067\u3059\u3002\u30ef\u30fc\u30eb\u30c9\u5185\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u306f\u5168\u3066\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u51fa\u529b\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002",(0,s.jsx)(t.br,{}),"\n","\u3053\u308c\u306f\u3001\u30a8\u30e9\u30fc\u304c\u3069\u306e\u3088\u3046\u306a\u3082\u306e\u304b\u3092\u793a\u3059\u4e00\u4f8b\u3067\u3059\u3002\u30a8\u30e9\u30fc\u306e\u7a2e\u985e\u3084\u4f8b\u5916\u3092\u8d77\u3053\u3057\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3053\u306e\u753b\u50cf\u3068\u306f\u7570\u306a\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Error in Console",src:n(8619).Z+"",width:"1453",height:"168"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2975:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/red-1-e4116cbb9dd70115cf8d8854bf4a4db5.png"},7551:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/red-2-167657c74b0a08a78e83b48cc1c2f372.png"},9331:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/red-3-5a1da40f607c3715439a8117059e49ac.png"},766:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/red-4-4e9868ef5c3481a94ad710aedeb249c4.png"},9825:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/red-5-9872c6bbe562efdf34649c167bad46f8.png"},8619:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/red-6-890680cd46df002c531dc4422acceef8.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>c});var s=n(7294);const r={},i=s.createContext(r);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);