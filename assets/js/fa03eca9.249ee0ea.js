"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[645],{7787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(4848),d=t(8453);const o={sidebar_position:4},s="Replacing with the Linker",l={id:"guide/methods/link",title:"Replacing with the Linker",description:"This method involves linking test-specific code instead of the product code during the build process. Since the product code remains untouched and the process is simple, this approach is recommended whenever possible.",source:"@site/docs/guide/methods/link.md",sourceDirName:"guide/methods",slug:"/guide/methods/link",permalink:"/embeded-testing-guide/docs/guide/methods/link",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/methods/link.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Replacing with Compile Switches",permalink:"/embeded-testing-guide/docs/guide/methods/compile-switch"},next:{title:"Replacing with Function Pointers",permalink:"/embeded-testing-guide/docs/guide/methods/functional-pointer"}},r={},c=[];function a(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"replacing-with-the-linker",children:"Replacing with the Linker"})}),"\n",(0,i.jsx)(n.p,{children:"This method involves linking test-specific code instead of the product code during the build process. Since the product code remains untouched and the process is simple, this approach is recommended whenever possible."}),"\n",(0,i.jsxs)(n.p,{children:["Example: Testing product code that contains ",(0,i.jsx)(n.code,{children:"Led_ON()"}),", ",(0,i.jsx)(n.code,{children:"Led_OFF()"}),", which only works on the actual board."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:'title="Product Code ledCtrl.c"',children:'#include "ledCtrl.h"\n\nstatic ST_LED_INFO ledInfoRecords[LED_INFO_NUM];\n\nvoid LedCtrl_TurnOnRedLedsOnly(void) {\n    // Turn off all LEDs\n    for (uint8_t i = 0; i < LED_INFO_NUM; i++) {\n        if (ledInfoRecords[i].isOn == 1) {\n            Led_OFF(ledInfoRecords[i].ledNo);\n            ledInfoRecords[i].isOn = 0;\n        }\n    }\n\n    // Turn on red LEDs\n    for (uint8_t i = 0; i < LED_INFO_NUM; i++) {\n        if (ledInfoRecords[i].color == LED_COLOR_RED) {\n            Led_ON(ledInfoRecords[i].ledNo);\n            ledInfoRecords[i].isOn = 1;\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:'title="Product Code led.c"',children:"static uint8_t led_value;\nstatic volatile uint8_t *ledResisterAdr;\n\nvoid Led_ON(uint8_t ledNo) {\n    led_value = led_value | (1 << ledNo);\n    *ledResisterAdr = led_value;\n}\n\nvoid Led_OFF(uint8_t ledNo) {\n    led_value = led_value & ~(1 << ledNo);\n    *ledResisterAdr = led_value;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you just want to build the code, link a file with a dummy implementation during the build process."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:'title="Test Double(dummy) led.c"',children:"void Led_ON(uint8_t ledNo) {\n    // dummy\n}\n\nvoid Led_OFF(uint8_t ledNo) {\n    // dummy\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"By using a spy instead of a dummy, a you can write test to verify that a certain LED is indeed turned on."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:'title="test Double(spy) led.c"',children:"static uint8_t led_value;\n\nvoid Led_ON(uint8_t ledNo) {\n    led_value = led_value | (1 << ledNo);\n}\n\nvoid Led_OFF(uint8_t ledNo) {\n    led_value = led_value & ~(1 << ledNo);\n}\n\nuint8_t Led_IsOn(uint8_t ledNo) {\n    if (led_value & (1 << ledNo)) {\n        return 1; // ON\n    } else {\n        return 0; // OFF\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6540);const d={},o=i.createContext(d);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);