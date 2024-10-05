"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[378],{8362:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=d(4848),i=d(8453);const o={sidebar_position:4},l="\u30ea\u30f3\u30ab\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048",r={id:"how-to-break-dependency/link",title:"\u30ea\u30f3\u30ab\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048",description:"\u30d3\u30eb\u30c9\u6642\u306b\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u306e\u4ee3\u308f\u308a\u306b\u30c6\u30b9\u30c8\u7528\u306e\u30b3\u30fc\u30c9\u3092\u30ea\u30f3\u30af\u3055\u305b\u308b\u65b9\u6cd5\u3002\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u304c\u6c5a\u308c\u305a\u3001\u7c21\u5358\u306a\u306e\u3067\u3067\u304d\u308b\u3060\u3051\u3053\u306e\u65b9\u6cd5\u3092\u63a1\u7528\u3059\u308b\u306e\u304c\u826f\u3044\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/how-to-break-dependency/link.md",sourceDirName:"how-to-break-dependency",slug:"/how-to-break-dependency/link",permalink:"/embeded-testing-guide/ja/docs/how-to-break-dependency/link",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to-break-dependency/link.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u30b3\u30f3\u30d1\u30a4\u30eb\u30b9\u30a4\u30c3\u30c1\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048",permalink:"/embeded-testing-guide/ja/docs/how-to-break-dependency/compile-switch"},next:{title:"\u30e2\u30c3\u30af\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048",permalink:"/embeded-testing-guide/ja/docs/how-to-break-dependency/mock"}},s={},c=[];function a(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u30ea\u30f3\u30ab\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048",children:"\u30ea\u30f3\u30ab\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048"})}),"\n",(0,t.jsx)(n.p,{children:"\u30d3\u30eb\u30c9\u6642\u306b\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u306e\u4ee3\u308f\u308a\u306b\u30c6\u30b9\u30c8\u7528\u306e\u30b3\u30fc\u30c9\u3092\u30ea\u30f3\u30af\u3055\u305b\u308b\u65b9\u6cd5\u3002\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u304c\u6c5a\u308c\u305a\u3001\u7c21\u5358\u306a\u306e\u3067\u3067\u304d\u308b\u3060\u3051\u3053\u306e\u65b9\u6cd5\u3092\u63a1\u7528\u3059\u308b\u306e\u304c\u826f\u3044\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\uff1a\u57fa\u677f\u4e0a\u3067\u3057\u304b\u52d5\u4f5c\u3057\u306a\u3044",(0,t.jsx)(n.code,{children:"Led_ON()"}),", ",(0,t.jsx)(n.code,{children:"Led_OFF()"}),"\u304c\u542b\u307e\u308c\u305f\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u3092\u30c6\u30b9\u30c8\u3057\u305f\u3044\u5834\u5408"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",metastring:'title="\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9 ledCtrl.c"',children:'#include "ledCtrl.h"\n\nstatic ST_LED_INFO ledInfoRecords[LED_INFO_NUM];\n\nvoid LedCtrl_TurnOnRedLedsOnly(void) {\n    // Turn off all LEDs\n    for (uint8_t i = 0; i < LED_INFO_NUM; i++) {\n        if (ledInfoRecords[i].isOn == 1) {\n            Led_OFF(ledInfoRecords[i].ledNo);\n            ledInfoRecords[i].isOn = 0;\n        }\n    }\n\n    // Turn on red LEDs\n    for (uint8_t i = 0; i < LED_INFO_NUM; i++) {\n        if (ledInfoRecords[i].color == LED_COLOR_RED) {\n            Led_ON(ledInfoRecords[i].ledNo);\n            ledInfoRecords[i].isOn = 1;\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",metastring:'title="\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9 led.c"',children:"static uint8_t led_value;\nstatic volatile uint8_t *ledResisterAdr;\n\nvoid Led_ON(uint8_t ledNo) {\n    led_value = led_value | (1 << ledNo);\n    *ledResisterAdr = led_value;\n}\n\nvoid Led_OFF(uint8_t ledNo) {\n    led_value = led_value & ~(1 << ledNo);\n    *ledResisterAdr = led_value;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u30d3\u30eb\u30c9\u3092\u901a\u3057\u305f\u3044\u3060\u3051\u306a\u3089\u30c0\u30df\u30fc\u306e\u5b9f\u88c5\u304c\u66f8\u304b\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u30d3\u30eb\u30c9\u6642\u306b\u30ea\u30f3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",metastring:'title="\u30c6\u30b9\u30c8\u30c0\u30d6\u30eb\uff08\u30c0\u30df\u30fc\uff09led.c"',children:"void Led_ON(uint8_t ledNo) {\n    // dummy\n}\n\nvoid Led_OFF(uint8_t ledNo) {\n    // dummy\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u30c0\u30df\u30fc\u3067\u306f\u306a\u304f\u30b9\u30d1\u30a4\u3092\u4f7f\u3046\u3053\u3068\u3067\u3042\u308bLED\u304c\u305f\u3057\u304b\u306bON\u3055\u308c\u305f\u3053\u3068\u3092\u78ba\u304b\u3081\u308b\u30c6\u30b9\u30c8\u3092\u66f8\u304f\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",metastring:'title="\u30c6\u30b9\u30c8\u30c0\u30d6\u30eb\uff08\u30b9\u30d1\u30a4\uff09led.c"',children:"static uint8_t led_value;\n\nvoid Led_ON(uint8_t ledNo) {\n    led_value = led_value | (1 << ledNo);\n}\n\nvoid Led_OFF(uint8_t ledNo) {\n    led_value = led_value & ~(1 << ledNo);\n}\n\nuint8_t Led_IsOn(uint8_t ledNo) {\n    if (led_value & (1 << ledNo)) {\n        return 1; // ON\n    } else {\n        return 0; // OFF\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>r});var t=d(6540);const i={},o=t.createContext(i);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);