"use strict";(self.webpackChunkcicon_docs=self.webpackChunkcicon_docs||[]).push([[161],{1152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(4848),o=n(8453);const r={sidebar_position:5},c="BasketComponent",a={id:"stages/BasketComponent",title:"BasketComponent",description:"The BasketComponent allows users to select the repair services and products they want for their shoes. The component calculates the total price and triggers a page change to the checkout stage.",source:"@site/docs/stages/BasketComponent.md",sourceDirName:"stages",slug:"/stages/BasketComponent",permalink:"/stages/BasketComponent",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stages/BasketComponent.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ShoeShowcaseComponent",permalink:"/stages/ShoeShowcaseComponent"},next:{title:"CheckoutComponent",permalink:"/stages/CheckoutComponent"}},i={},l=[{value:"Props",id:"props",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Key Functions",id:"key-functions",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"basketcomponent",children:"BasketComponent"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"BasketComponent"})," allows users to select the repair services and products they want for their shoes. The component calculates the total price and triggers a page change to the checkout stage."]}),"\n",(0,s.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"repairServices"}),": Array of available repair services."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"productSuggestions"}),": Array of product suggestions (optional)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"changePage"}),": Function to trigger the page change to the checkout stage."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"const repairServices = [\n  { name: 'Sole Replacement', price: 50 },\n  { name: 'Heel Repair', price: 20 }\n];\nconst productSuggestions = [\n  { name: 'Shoe Polish', price: 5 }\n];\n\n<BasketComponent\n  repairServices={repairServices}\n  productSuggestions={productSuggestions}\n  changePage={(totalAmount, selectedServices, selectedProducts) => { ... }}\n/>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"key-functions",children:"Key Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"handleSelectService"}),": Toggles the selection of a repair service."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"handleSelectProduct"}),": Toggles the selection of a product."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"handleCheckout"}),": Calculates the total price and triggers the page change."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var s=n(6540);const o={},r=s.createContext(o);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);