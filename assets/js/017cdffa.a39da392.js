"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[845],{7272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var i=n(4848),o=n(8453);const c={sidebar_position:3},d="Replacing with Compile Switches",r={id:"how-to-break-dependency/compile-switch",title:"Replacing with Compile Switches",description:"This method involves branching in the product code with compile switches to call functions appropriate for each environment, depending on microcontroller or hardware dependencies. This approach should be avoided because the product code is modified specifically for testing and the code becomes complex.",source:"@site/docs/how-to-break-dependency/compile-switch.md",sourceDirName:"how-to-break-dependency",slug:"/how-to-break-dependency/compile-switch",permalink:"/embeded-testing-guide/docs/how-to-break-dependency/compile-switch",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to-break-dependency/compile-switch.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Extracting Logic",permalink:"/embeded-testing-guide/docs/how-to-break-dependency/extract"},next:{title:"Replacing with the Linker",permalink:"/embeded-testing-guide/docs/how-to-break-dependency/link"}},s={},a=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"replacing-with-compile-switches",children:"Replacing with Compile Switches"})}),"\n",(0,i.jsx)(t.p,{children:"This method involves branching in the product code with compile switches to call functions appropriate for each environment, depending on microcontroller or hardware dependencies. This approach should be avoided because the product code is modified specifically for testing and the code becomes complex."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",metastring:'title="Product Code ledCtrl.c"',children:"#include ledCtrl.h\n\nstatic void turnOnRedLED(void) {\n#if REAL_BOARD\n    Led_ON(3);\n#else\n    Virtual_Led_ON(3);\n#endif\n}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",metastring:'title="led.c for Product Code "',children:"static uint8_t led_value;\nstatic volatile uint8_t *ledResisterAdr;\n\n// Set value in register\nvoid Led_ON(uint8_t ledNo) {\n    led_value = led_value | (1 << ledNo);\n    *ledResisterAdr = led_value;\n}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",metastring:'title="led.c for Test Code"',children:'void Virtual_Led_ON(uint8_t ledNo) {\n    printf("virtual led%d turned ON\\n", ledNo);\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>r});var i=n(6540);const o={},c=i.createContext(o);function d(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);