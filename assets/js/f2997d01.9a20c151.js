"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[489],{394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(4848),r=t(8453);const i={sidebar_position:3},o="Running Tests",c={id:"environment/exec",title:"Running Tests",description:"For the sample code in this repository:",source:"@site/docs/environment/exec.md",sourceDirName:"environment",slug:"/environment/exec",permalink:"/embeded-testing-guide/docs/environment/exec",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/environment/exec.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Building Test Code",permalink:"/embeded-testing-guide/docs/environment/build"},next:{title:"(Reference) Setting Up a Linux Environment Using WSL2",permalink:"/embeded-testing-guide/docs/environment/wsl"}},d={},a=[{value:"Test Results",id:"test-results",level:2},{value:"Coverage",id:"coverage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"running-tests",children:"Running Tests"})}),"\n",(0,s.jsx)(n.p,{children:"For the sample code in this repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd code\nbash runTestSuite.sh\n"})}),"\n",(0,s.jsx)(n.h2,{id:"test-results",children:"Test Results"}),"\n",(0,s.jsxs)(n.p,{children:["After running ",(0,s.jsx)(n.code,{children:"runTestSuite.sh"}),", an XML file named ",(0,s.jsx)(n.code,{children:"results.xml"})," will be generated in the root directory. This file follows the JUnit XML format, which is the de facto standard for test results. By using tools like Jenkins, you can view the results in HTML format."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",metastring:'title="results.xml"',children:"TODO\n"})}),"\n",(0,s.jsx)(n.h2,{id:"coverage",children:"Coverage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash runTestSuite.sh --coverage\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The coverage tool ",(0,s.jsx)(n.code,{children:"lcov"})," will output coverage data in HTML format under the ",(0,s.jsx)(n.code,{children:"Coverage"})," directory."]}),"\n",(0,s.jsx)(n.p,{children:"TODO"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);