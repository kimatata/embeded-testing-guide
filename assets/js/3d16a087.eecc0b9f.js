"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[299],{9108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var d=t(4848),i=t(8453);const o={sidebar_position:4},s="Replacing with the Linker",r={id:"how-to-break-dependency/link",title:"Replacing with the Linker",description:"This method involves linking test-specific code instead of the product code during the build process. Since the product code remains untouched and the process is simple, this approach is recommended whenever possible.",source:"@site/docs/how-to-break-dependency/link.md",sourceDirName:"how-to-break-dependency",slug:"/how-to-break-dependency/link",permalink:"/embeded-testing-guide/docs/how-to-break-dependency/link",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to-break-dependency/link.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Replacing with Compile Switches",permalink:"/embeded-testing-guide/docs/how-to-break-dependency/compile-switch"},next:{title:"Replacing with Mocks",permalink:"/embeded-testing-guide/docs/how-to-break-dependency/mock"}},l={},c=[];function a(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"replacing-with-the-linker",children:"Replacing with the Linker"})}),"\n",(0,d.jsx)(n.p,{children:"This method involves linking test-specific code instead of the product code during the build process. Since the product code remains untouched and the process is simple, this approach is recommended whenever possible."}),"\n",(0,d.jsxs)(n.p,{children:["Example: Testing product code that contains ",(0,d.jsx)(n.code,{children:"Led_ON()"}),", ",(0,d.jsx)(n.code,{children:"Led_OFF()"}),", which only works on the actual board."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",metastring:'title="Product Code ledCtrl.c"',children:'#include "ledCtrl.h"\n\nstatic ST_LED_INFO ledInfoRecords[LED_INFO_NUM];\n\nvoid LedCtrl_TurnOnRedLedsOnly(void) {\n    // Turn off all LEDs\n    for (uint8_t i = 0; i < LED_INFO_NUM; i++) {\n        if (ledInfoRecords[i].isOn == 1) {\n            Led_OFF(ledInfoRecords[i].ledNo);\n            ledInfoRecords[i].isOn = 0;\n        }\n    }\n\n    // Turn on red LEDs\n    for (uint8_t i = 0; i < LED_INFO_NUM; i++) {\n        if (ledInfoRecords[i].color == LED_COLOR_RED) {\n            Led_ON(ledInfoRecords[i].ledNo);\n            ledInfoRecords[i].isOn = 1;\n        }\n    }\n}\n'})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",metastring:'title="Product Code led.c"',children:"static uint8_t led_value;\nstatic volatile uint8_t *ledResisterAdr;\n\nvoid Led_ON(uint8_t ledNo) {\n    led_value = led_value | (1 << ledNo);\n    *ledResisterAdr = led_value;\n}\n\nvoid Led_OFF(uint8_t ledNo) {\n    led_value = led_value & ~(1 << ledNo);\n    *ledResisterAdr = led_value;\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"If you just want to build the code, link a file with a dummy implementation during the build process."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",metastring:'title="Test Double(dummy) led.c"',children:"void Led_ON(uint8_t ledNo) {\n    // dummy\n}\n\nvoid Led_OFF(uint8_t ledNo) {\n    // dummy\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"By using a spy instead of a dummy, a you can write test to verify that a certain LED is indeed turned on."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",metastring:'title="test Double(spy) led.c"',children:"static uint8_t led_value;\n\nvoid Led_ON(uint8_t ledNo) {\n    led_value = led_value | (1 << ledNo);\n}\n\nvoid Led_OFF(uint8_t ledNo) {\n    led_value = led_value & ~(1 << ledNo);\n}\n\nuint8_t Led_IsOn(uint8_t ledNo) {\n    if (led_value & (1 << ledNo)) {\n        return 1; // ON\n    } else {\n        return 0; // OFF\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var d=t(6540);const i={},o=d.createContext(i);function s(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);