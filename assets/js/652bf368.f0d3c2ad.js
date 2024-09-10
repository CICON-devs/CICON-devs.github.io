"use strict";(self.webpackChunkcicon_docs=self.webpackChunkcicon_docs||[]).push([[948],{610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(4848),r=t(8453);const i={},c="Cobbler Onboarding Guide",s={id:"guides/cobbler-onboarding",title:"Cobbler Onboarding Guide",description:"The cobbler onboarding flow allows cobblers to set up their Stripe accounts and start accepting payments. This process uses the Stripe API for account creation and onboarding link generation.",source:"@site/docs/guides/cobbler-onboarding.md",sourceDirName:"guides",slug:"/guides/cobbler-onboarding",permalink:"/guides/cobbler-onboarding",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/cobbler-onboarding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/category/guides"},next:{title:"Payment Integration Guide",permalink:"/guides/payment-integration"}},a={},d=[{value:"Flow Overview",id:"flow-overview",level:2},{value:"Key API Endpoints",id:"key-api-endpoints",level:2},{value:"POST /api/stripe/create-account",id:"post-apistripecreate-account",level:3},{value:"POST /api/stripe/generate-account-link",id:"post-apistripegenerate-account-link",level:3},{value:"Frontend Flow",id:"frontend-flow",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"cobbler-onboarding-guide",children:"Cobbler Onboarding Guide"})}),"\n",(0,o.jsx)(n.p,{children:"The cobbler onboarding flow allows cobblers to set up their Stripe accounts and start accepting payments. This process uses the Stripe API for account creation and onboarding link generation."}),"\n",(0,o.jsx)(n.h2,{id:"flow-overview",children:"Flow Overview"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Create Stripe Account"}),": The API creates a new Stripe connected account for the cobbler."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Generate Onboarding Link"}),": An account onboarding link is generated and sent to the cobbler."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Cobbler Completes Onboarding"}),": The cobbler is redirected to Stripe to complete their account setup."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"key-api-endpoints",children:"Key API Endpoints"}),"\n",(0,o.jsx)(n.h3,{id:"post-apistripecreate-account",children:"POST /api/stripe/create-account"}),"\n",(0,o.jsx)(n.p,{children:"Creates a new Stripe connected account for the cobbler."}),"\n",(0,o.jsx)(n.h3,{id:"post-apistripegenerate-account-link",children:"POST /api/stripe/generate-account-link"}),"\n",(0,o.jsx)(n.p,{children:"Generates an onboarding link for the cobbler to complete their Stripe account setup."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-http",children:'POST /api/stripe/generate-account-link\n{\n  "accountId": "stripe_connected_account_number"\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"frontend-flow",children:"Frontend Flow"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"CobblerOnboarding.tsx"})," component handles the onboarding process. Once the onboarding link is generated, the cobbler is redirected to Stripe for account setup."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var o=t(6540);const r={},i=o.createContext(r);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);