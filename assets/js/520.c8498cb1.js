(self.webpackChunkdocs_ja=self.webpackChunkdocs_ja||[]).push([[520],{9047:(e,n,t)=>{"use strict";t.d(n,{Z:()=>Z});var s=t(7294),o=t(5893);function c(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=s.Children.toArray(e),t=n.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),c=n.filter((e=>e!==t)),a=t?.props.children;return{mdxAdmonitionTitle:a,rest:c.length>0?(0,o.jsx)(o.Fragment,{children:c}):null}}(e.children),c=e.title??n;return{...e,...c&&{title:c},children:t}}var a=t(512),i=t(5999),r=t(5281);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:s}=e;return(0,o.jsx)("div",{className:(0,a.Z)(r.k.common.admonition,r.k.common.admonitionType(n),l.admonition,t),children:s})}function u(e){let{icon:n,title:t}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function m(e){let{children:n}=e;return n?(0,o.jsx)("div",{className:l.admonitionContent,children:n}):null}function h(e){const{type:n,icon:t,title:s,children:c,className:a}=e;return(0,o.jsxs)(d,{type:n,className:a,children:[(0,o.jsx)(u,{title:s,icon:t}),(0,o.jsx)(m,{children:c})]})}function f(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,o.jsx)(f,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,o.jsx)(h,{...p,...e,className:(0,a.Z)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,o.jsx)(x,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,o.jsx)(h,{...v,...e,className:(0,a.Z)("alert alert--success",e.className),children:e.children})}function j(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,o.jsx)(j,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function C(e){return(0,o.jsx)(h,{...N,...e,className:(0,a.Z)("alert alert--info",e.className),children:e.children})}function k(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const y={icon:(0,o.jsx)(k,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function L(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const B={icon:(0,o.jsx)(L,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const w={icon:(0,o.jsx)(k,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const E={...{note:g,tip:b,info:C,warning:function(e){return(0,o.jsx)(h,{...y,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(h,{...B,...e,className:(0,a.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(g,{title:"secondary",...e}),important:e=>(0,o.jsx)(C,{title:"important",...e}),success:e=>(0,o.jsx)(b,{title:"success",...e}),caution:function(e){return(0,o.jsx)(h,{...w,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})}}};function Z(e){const n=c(e),t=(s=n.type,E[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),E.info));var s;return(0,o.jsx)(t,{...n})}},4774:(e,n,t)=>{"use strict";t.d(n,{Z:()=>re});var s=t(7294),o=t(1151),c=t(5742),a=t(2389),i=t(512),r=t(2949),l=t(6668);function d(){const{prism:e}=(0,l.L)(),{colorMode:n}=(0,r.I)(),t=e.theme,s=e.darkTheme||t;return"dark"===n?s:t}var u=t(5281),m=t(7594),h=t.n(m);const f=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},x={...g,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},v=Object.keys(g);function b(e,n){const t=e.map((e=>{const{start:t,end:s}=x[e];return`(?:${t}\\s*(${n.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${t})\\s*$`)}function j(e,n){let t=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:c}=n;if(c&&p.test(c)){const e=c.match(p).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const n=o[0].className,s=h()(e).filter((e=>e>0)).map((e=>[e-1,[n]]));return{lineClassNames:Object.fromEntries(s),code:t}}if(void 0===s)return{lineClassNames:{},code:t};const a=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],n);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],n);case"html":return b(["js","jsBlock","html"],n);case"python":case"py":case"bash":return b(["bash"],n);case"markdown":case"md":return b(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return b(["tex"],n);case"lua":case"haskell":case"sql":return b(["lua"],n);case"wasm":return b(["wasm"],n);case"vb":case"vba":case"visual-basic":return b(["vb","rem"],n);case"vbnet":return b(["vbnet","rem"],n);case"batch":return b(["rem"],n);case"basic":return b(["rem","f90"],n);case"fsharp":return b(["js","ml"],n);case"ocaml":case"sml":return b(["ml"],n);case"fortran":return b(["f90"],n);case"cobol":return b(["cobol"],n);default:return b(v,n)}}(s,o),i=t.split("\n"),r=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:n,line:t}=e;return[t,n]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:n,block:t}=e;return[t.start,n]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:n,block:t}=e;return[t.end,n]})));for(let h=0;h<i.length;){const e=i[h].match(a);if(!e){h+=1;continue}const n=e.slice(1).find((e=>void 0!==e));l[n]?r[l[n]].range+=`${h},`:d[n]?r[d[n]].start=h:u[n]&&(r[u[n]].range+=`${r[u[n]].start}-${h-1},`),i.splice(h,1)}t=i.join("\n");const m={};return Object.entries(r).forEach((e=>{let[n,{range:t}]=e;h()(t).forEach((e=>{m[e]??=[],m[e].push(n)}))})),{lineClassNames:m,code:t}}const N={codeBlockContainer:"codeBlockContainer_Ckt0"};var C=t(5893);function k(e){let{as:n,...t}=e;const s=function(e){const n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const c=n[s];c&&"string"==typeof o&&(t[c]=o)})),t}(d());return(0,C.jsx)(n,{...t,style:s,className:(0,i.Z)(t.className,N.codeBlockContainer,u.k.common.codeBlock)})}const y={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function L(e){let{children:n,className:t}=e;return(0,C.jsx)(k,{as:"pre",tabIndex:0,className:(0,i.Z)(y.codeBlockStandalone,"thin-scrollbar",t),children:(0,C.jsx)("code",{className:y.codeBlockLines,children:n})})}var B=t(902);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function E(e,n){const[t,o]=(0,s.useState)(),c=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{c()}),[c]),function(e,n,t){void 0===t&&(t=w);const o=(0,B.zX)(n),c=(0,B.Ql)(t);(0,s.useEffect)((()=>{const n=new MutationObserver(o);return e&&n.observe(e,c),()=>n.disconnect()}),[e,o,c])}(t,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(n(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Z=t(2573);const H={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function _(e){let{line:n,classNames:t,showLineNumbers:s,getLineProps:o,getTokenProps:c}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");const a=o({line:n,className:(0,i.Z)(t,s&&H.codeLine)}),r=n.map(((e,n)=>(0,C.jsx)("span",{...c({token:e,key:n})},n)));return(0,C.jsxs)("span",{...a,children:[s?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("span",{className:H.codeLineNumber}),(0,C.jsx)("span",{className:H.codeLineContent,children:r})]}):r,(0,C.jsx)("br",{})]})}var T=t(5999);function A(e){return(0,C.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,C.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function I(e){return(0,C.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,C.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const S={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function M(e){let{code:n,className:t}=e;const[o,c]=(0,s.useState)(!1),a=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,{target:n=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const t=document.createElement("textarea"),s=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);n.append(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}t.remove(),c&&(o.removeAllRanges(),o.addRange(c)),s&&s.focus()}(n),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[n]);return(0,s.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,C.jsx)("button",{type:"button","aria-label":o?(0,T.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,T.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,T.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",t,S.copyButton,o&&S.copyButtonCopied),onClick:r,children:(0,C.jsxs)("span",{className:S.copyButtonIcons,"aria-hidden":"true",children:[(0,C.jsx)(A,{className:S.copyButtonIcon}),(0,C.jsx)(I,{className:S.copyButtonSuccessIcon})]})})}function z(e){return(0,C.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,C.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const R={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function O(e){let{className:n,onClick:t,isEnabled:s}=e;const o=(0,T.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,C.jsx)("button",{type:"button",onClick:t,className:(0,i.Z)("clean-btn",n,s&&R.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,C.jsx)(z,{className:R.wordWrapButtonIcon,"aria-hidden":"true"})})}function $(e){let{children:n,className:t="",metastring:o,title:c,showLineNumbers:a,language:r}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.L)(),h=function(e){return e?.toLowerCase()}(r??function(e){const n=e.split(" ").find((e=>e.startsWith("language-")));return n?.replace(/language-/,"")}(t)??u),p=d(),g=function(){const[e,n]=(0,s.useState)(!1),[t,o]=(0,s.useState)(!1),c=(0,s.useRef)(null),a=(0,s.useCallback)((()=>{const t=c.current.querySelector("code");e?t.removeAttribute("style"):(t.style.whiteSpace="pre-wrap",t.style.overflowWrap="anywhere"),n((e=>!e))}),[c,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:n}=c.current,t=e>n||c.current.querySelector("code").hasAttribute("style");o(t)}),[c]);return E(c,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:t,toggle:a}}(),x=function(e){return e?.match(f)?.groups.title??""}(o)||c,{lineClassNames:v,code:b}=j(n,{metastring:o,language:h,magicComments:m}),N=a??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,C.jsxs)(k,{as:"div",className:(0,i.Z)(t,h&&!t.includes(`language-${h}`)&&`language-${h}`),children:[x&&(0,C.jsx)("div",{className:y.codeBlockTitle,children:x}),(0,C.jsxs)("div",{className:y.codeBlockContent,children:[(0,C.jsx)(Z.y$,{theme:p,code:b,language:h??"text",children:e=>{let{className:n,style:t,tokens:s,getLineProps:o,getTokenProps:c}=e;return(0,C.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,i.Z)(n,y.codeBlock,"thin-scrollbar"),style:t,children:(0,C.jsx)("code",{className:(0,i.Z)(y.codeBlockLines,N&&y.codeBlockLinesWithNumbering),children:s.map(((e,n)=>(0,C.jsx)(_,{line:e,getLineProps:o,getTokenProps:c,classNames:v[n],showLineNumbers:N},n)))})})}}),(0,C.jsxs)("div",{className:y.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,C.jsx)(O,{className:y.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,C.jsx)(M,{className:y.codeButton,code:b})]})]})]})}function V(e){let{children:n,...t}=e;const o=(0,a.Z)(),c=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(n),i="string"==typeof c?$:L;return(0,C.jsx)(i,{...t,children:c},String(o))}function W(e){return(0,C.jsx)("code",{...e})}var P=t(3692);var q=t(8138),D=t(6043);const F={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function U(e){return!!e&&("SUMMARY"===e.tagName||U(e.parentElement))}function G(e,n){return!!e&&(e===n||G(e.parentElement,n))}function J(e){let{summary:n,children:t,...o}=e;(0,q.Z)().collectAnchor(o.id);const c=(0,a.Z)(),r=(0,s.useRef)(null),{collapsed:l,setCollapsed:d}=(0,D.u)({initialState:!o.open}),[u,m]=(0,s.useState)(o.open),h=s.isValidElement(n)?n:(0,C.jsx)("summary",{children:n??"Details"});return(0,C.jsxs)("details",{...o,ref:r,open:u,"data-collapsed":l,className:(0,i.Z)(F.details,c&&F.isBrowser,o.className),onMouseDown:e=>{U(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;U(n)&&G(n,r.current)&&(e.preventDefault(),l?(d(!1),m(!0)):d(!0))},children:[h,(0,C.jsx)(D.z,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,C.jsx)("div",{className:F.collapsibleContent,children:t})})]})}const Y={details:"details_b_Ee"},K="alert alert--info";function Q(e){let{...n}=e;return(0,C.jsx)(J,{...n,className:(0,i.Z)(K,Y.details,n.className)})}function X(e){const n=s.Children.toArray(e.children),t=n.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,C.jsx)(C.Fragment,{children:n.filter((e=>e!==t))});return(0,C.jsx)(Q,{...e,summary:t,children:o})}var ee=t(2503);function ne(e){return(0,C.jsx)(ee.Z,{...e})}const te={containsTaskList:"containsTaskList_mC6p"};function se(e){if(void 0!==e)return(0,i.Z)(e,e?.includes("contains-task-list")&&te.containsTaskList)}const oe={img:"img_ev3q"};var ce=t(9047),ae=t(1875);const ie={Head:c.Z,details:X,Details:X,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,C.jsx)(W,{...e}):(0,C.jsx)(V,{...e})},a:function(e){return(0,C.jsx)(P.Z,{...e})},pre:function(e){return(0,C.jsx)(C.Fragment,{children:e.children})},ul:function(e){return(0,C.jsx)("ul",{...e,className:se(e.className)})},li:function(e){return(0,q.Z)().collectAnchor(e.id),(0,C.jsx)("li",{...e})},img:function(e){return(0,C.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,i.Z)(n,oe.img))});var n},h1:e=>(0,C.jsx)(ne,{as:"h1",...e}),h2:e=>(0,C.jsx)(ne,{as:"h2",...e}),h3:e=>(0,C.jsx)(ne,{as:"h3",...e}),h4:e=>(0,C.jsx)(ne,{as:"h4",...e}),h5:e=>(0,C.jsx)(ne,{as:"h5",...e}),h6:e=>(0,C.jsx)(ne,{as:"h6",...e}),admonition:ce.Z,mermaid:ae.Z};function re(e){let{children:n}=e;return(0,C.jsx)(o.Z,{components:ie,children:n})}},3743:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var s=t(7294),o=t(6668);function c(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):s.push(o)})),s}function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=a({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function i(e){const n=e.getBoundingClientRect();return n.top===n.bottom?i(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>i(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function l(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.L)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=l();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:a}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let o=n;o<=t;o+=1)s.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:c,maxHeadingLevel:a}),l=r(i,{anchorTopOffset:t.current}),d=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}var u=t(3692),m=t(5893);function h(e){let{toc:n,className:t,linkClassName:s,isChild:o}=e;return n.length?(0,m.jsx)("ul",{className:o?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const f=s.memo(h);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:u,...h}=e;const p=(0,o.L)(),g=l??p.tableOfContents.minHeadingLevel,x=u??p.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,s.useMemo)((()=>a({toc:c(n),minHeadingLevel:t,maxHeadingLevel:o})),[n,t,o])}({toc:n,minHeadingLevel:g,maxHeadingLevel:x});return d((0,s.useMemo)((()=>{if(i&&r)return{linkClassName:i,linkActiveClassName:r,minHeadingLevel:g,maxHeadingLevel:x}}),[i,r,g,x])),(0,m.jsx)(f,{toc:v,className:t,linkClassName:i,...h})}},9407:(e,n,t)=>{"use strict";t.d(n,{Z:()=>l});t(7294);var s=t(512),o=t(3743);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var a=t(5893);const i="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function l(e){let{className:n,...t}=e;return(0,a.jsx)("div",{className:(0,s.Z)(c.tableOfContents,"thin-scrollbar",n),children:(0,a.jsx)(o.Z,{...t,linkClassName:i,linkActiveClassName:r})})}},2212:(e,n,t)=>{"use strict";t.d(n,{Z:()=>h});t(7294);var s=t(512),o=t(5999),c=t(5742),a=t(5893);function i(){return(0,a.jsx)(o.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,a.jsx)(o.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,a.jsx)(c.Z,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5281),u=t(9047);function m(e){let{className:n}=e;return(0,a.jsx)(u.Z,{type:"caution",title:(0,a.jsx)(i,{}),className:(0,s.Z)(n,d.k.common.unlistedBanner),children:(0,a.jsx)(r,{})})}function h(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{}),(0,a.jsx)(m,{...e})]})}},7594:(e,n)=>{function t(e){let n,t=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))t.push(parseInt(s,10));else if(n=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,c]=n;if(s&&c){s=parseInt(s),c=parseInt(c);const e=s<c?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(c+=e);for(let n=s;n!==c;n+=e)t.push(n)}}return t}n.default=t,e.exports=t},1151:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i,a:()=>a});var s=t(7294);const o={},c=s.createContext(o);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);