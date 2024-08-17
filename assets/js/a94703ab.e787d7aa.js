"use strict";(self.webpackChunkdocs_ja=self.webpackChunkdocs_ja||[]).push([[48],{1377:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(6540),o=n(4164),s=n(1003),i=n(7559),l=n(4718),c=n(609),r=n(1312),d=n(3104),u=n(5062);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var b=n(4848);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),s=(0,a.useRef)(!1),{startScroll:i,cancelScroll:l}=(0,d.gk)();return(0,d.Mq)(((e,n)=>{let{scrollY:a}=e;const i=n?.scrollY;i&&(s.current?s.current=!1:a>=i?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((e=>{e.location.hash&&(s.current=!0,o(!1))})),{shown:n,scrollToTop:()=>i(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,r.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",i.G.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(3109),x=n(6347),j=n(4581),A=n(6342),f=n(3465);function v(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const _={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function S(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,r.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",_.collapseSidebarButton),onClick:t,children:(0,b.jsx)(v,{className:_.collapseSidebarButtonIcon})})}var g=n(5041),C=n(9532);const k=Symbol("EmptyContext"),I=a.createContext(k);function T(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),s=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.jsx)(I.Provider,{value:s,children:t})}var N=n(1422),B=n(9169),y=n(8774),L=n(2303);function w(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.jsx)("button",{"aria-label":t?(0,r.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,r.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function E(e){let{item:t,onItemClick:n,activePath:s,level:c,index:r,...d}=e;const{items:u,label:m,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,A.p)(),f=function(e){const t=(0,L.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),v=(0,l.w8)(t,s),_=(0,B.ys)(x,s),{collapsed:S,setCollapsed:g}=(0,N.u)({initialState:()=>!!h&&(!v&&t.collapsed)}),{expandedItem:T,setExpandedItem:E}=function(){const e=(0,a.useContext)(I);if(e===k)throw new C.dV("DocSidebarItemsExpandedStateProvider");return e}(),M=function(e){void 0===e&&(e=!S),E(e?null:r),g(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const s=(0,C.ZC)(t);(0,a.useEffect)((()=>{t&&!s&&n&&o(!1)}),[t,s,n,o])}({isActive:v,collapsed:S,updateCollapsed:M}),(0,a.useEffect)((()=>{h&&null!=T&&T!==r&&j&&g(!0)}),[h,T,r,g,j]),(0,b.jsxs)("li",{className:(0,o.A)(i.G.docs.docSidebarItemCategory,i.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":S},p),children:[(0,b.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_}),children:[(0,b.jsx)(y.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":v}),onClick:h?e=>{n?.(t),x?M(!1):(e.preventDefault(),M())}:()=>{n?.(t)},"aria-current":_?"page":void 0,role:h&&!x?"button":void 0,"aria-expanded":h&&!x?!S:void 0,href:h?f??"#":f,...d,children:m}),x&&h&&(0,b.jsx)(w,{collapsed:S,categoryLabel:m,onClick:e=>{e.preventDefault(),M()}})]}),(0,b.jsx)(N.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:S,children:(0,b.jsx)(U,{items:u,tabIndex:S?-1:0,onItemClick:n,activePath:s,level:c+1})})]})}var M=n(6654),H=n(3186);const W={menuExternalLink:"menuExternalLink_NmtK"};function G(e){let{item:t,onItemClick:n,activePath:a,level:s,index:c,...r}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,p=(0,l.w8)(t,a),x=(0,M.A)(d);return(0,b.jsx)("li",{className:(0,o.A)(i.G.docs.docSidebarItemLink,i.G.docs.docSidebarItemLinkLevel(s),"menu__list-item",m),children:(0,b.jsxs)(y.A,{className:(0,o.A)("menu__link",!x&&W.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...r,children:[u,!x&&(0,b.jsx)(H.A,{})]})},u)}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function P(e){let{item:t,level:n,index:a}=e;const{value:s,defaultStyle:l,className:c}=t;return(0,b.jsx)("li",{className:(0,o.A)(i.G.docs.docSidebarItemLink,i.G.docs.docSidebarItemLinkLevel(n),l&&[R.menuHtmlItem,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:s}},a)}function D(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(E,{item:t,...n});case"html":return(0,b.jsx)(P,{item:t,...n});default:return(0,b.jsx)(G,{item:t,...n})}}function K(e){let{items:t,...n}=e;const a=(0,l.Y)(t,n.activePath);return(0,b.jsx)(T,{children:a.map(((e,t)=>(0,b.jsx)(D,{item:e,index:t,...n},t)))})}const U=(0,a.memo)(K),V={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function F(e){let{path:t,sidebar:n,className:s}=e;const l=function(){const{isActive:e}=(0,g.M)(),[t,n]=(0,a.useState)(e);return(0,d.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,r.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",V.menu,l&&V.menuWithAnnouncementBar,s),children:(0,b.jsx)("ul",{className:(0,o.A)(i.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(U,{items:n,activePath:t,level:1})})})}const Y="sidebar_njMd",z="sidebarWithHideableNavbar_wUlq",q="sidebarHidden_VK0M",O="sidebarLogo_isFc";function J(e){let{path:t,sidebar:n,onCollapse:a,isHidden:s}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:l}}}=(0,A.p)();return(0,b.jsxs)("div",{className:(0,o.A)(Y,i&&z,s&&q),children:[i&&(0,b.jsx)(f.A,{tabIndex:-1,className:O}),(0,b.jsx)(F,{path:t,sidebar:n}),l&&(0,b.jsx)(S,{onClick:a})]})}const Q=a.memo(J);var X=n(5600),Z=n(9876);const $=e=>{let{sidebar:t,path:n}=e;const a=(0,Z.M)();return(0,b.jsx)("ul",{className:(0,o.A)(i.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(U,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ee(e){return(0,b.jsx)(X.GX,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,j.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(Q,{...e}),a&&(0,b.jsx)(te,{...e})]})}const ae={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function oe(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ae.expandButton,title:(0,r.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(v,{className:ae.expandButtonIcon})})}const se={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function ie(e){let{children:t}=e;const n=(0,c.t)();return(0,b.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function le(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:s}=e;const{pathname:l}=(0,x.zy)(),[c,r]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&r(!1),!c&&(0,p.O)()&&r(!0),s((e=>!e))}),[s,c]);return(0,b.jsx)("aside",{className:(0,o.A)(i.G.docs.docSidebarContainer,se.docSidebarContainer,n&&se.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(se.docSidebarContainer)&&n&&r(!0)},children:(0,b.jsx)(ie,{children:(0,b.jsxs)("div",{className:(0,o.A)(se.sidebarViewport,c&&se.sidebarViewportHidden),children:[(0,b.jsx)(ne,{sidebar:t,path:l,onCollapse:d,isHidden:c}),c&&(0,b.jsx)(oe,{toggleSidebar:d})]})})})}const ce={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function re(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.t)();return(0,b.jsx)("main",{className:(0,o.A)(ce.docMainContainer,(t||!a)&&ce.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",ce.docItemWrapper,t&&ce.docItemWrapperEnhanced),children:n})})}const de={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ue(e){let{children:t}=e;const n=(0,c.t)(),[o,s]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:de.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:de.docRoot,children:[n&&(0,b.jsx)(le,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:s}),(0,b.jsx)(re,{hiddenSidebarContainer:o,children:t})]})]})}var me=n(5955);function be(e){const t=(0,l.B5)(e);if(!t)return(0,b.jsx)(me.A,{});const{docElement:n,sidebarName:a,sidebarItems:r}=t;return(0,b.jsx)(s.e3,{className:(0,o.A)(i.G.page.docsDocPage),children:(0,b.jsx)(c.V,{name:a,items:r,children:(0,b.jsx)(ue,{children:n})})})}},5955:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4164),o=(n(1312),n(1107)),s=n(4848);function i(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(o.A,{as:"h1",className:"hero__title",children:"Page Not Found"}),(0,s.jsx)("p",{children:"\u304a\u63a2\u3057\u306e\u30da\u30fc\u30b8\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002"}),(0,s.jsxs)("p",{children:["\u30ea\u30f3\u30af\u304c\u5207\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u306e\u30da\u30fc\u30b8\u306f\u307e\u3060\u7ffb\u8a33\u3055\u308c\u3066\u3044\u306a\u3044\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002",(0,s.jsx)("br",{}),"\u6050\u308c\u5165\u308a\u307e\u3059\u304c",(0,s.jsx)("a",{href:"https://creators.vrchat.com/",children:"\u82f1\u8a9e\u7248"}),"\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),(0,s.jsx)("img",{src:n(3525).A}),(0,s.jsxs)("p",{children:["Image Credit: SAWARATSUKI",(0,s.jsx)("br",{}),(0,s.jsx)("a",{href:"https://github.com/SAWARATSUKI/KawaiiLogos",children:"https://github.com/SAWARATSUKI/KawaiiLogos"})]})]})})})}},3525:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/NotFound-399dfcbe32ea24644a214dcab648a10b.png"}}]);