"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[578],{1229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var d=t(4848),r=t(8453);const i={sidebar_position:2},o="\u30ed\u30b8\u30c3\u30af\u306e\u62bd\u51fa",s={id:"how-to-break-dependency/extract",title:"\u30ed\u30b8\u30c3\u30af\u306e\u62bd\u51fa",description:"\u30c6\u30b9\u30c8\u304c\u5c0e\u5165\u3055\u308c\u3066\u3044\u306a\u3044\u65e2\u5b58\u306e\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u306f\u30c6\u30b9\u30c8\u3092\u5ff5\u982d\u306b\u4f5c\u3089\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u307b\u3068\u3093\u3069\u51fa\u529b\u5024\u30d9\u30fc\u30b9\u30c6\u30b9\u30c8\u306f\u3067\u304d\u306a\u3044\u3068\u601d\u308f\u308c\u307e\u3059\u3002\u30e2\u30c3\u30af\u3092\u4f7f\u3046\u3053\u3068\u3067\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u3092\u5909\u66f4\u305b\u305a\u306b\u30c6\u30b9\u30c8\u3092\u66f8\u304f\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u304c\u3001\u30e2\u30c3\u30af\u3092\u7528\u3044\u305f\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u306f\u8907\u96d1\u306b\u306a\u308a\u304c\u3061\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/how-to-break-dependency/extract.md",sourceDirName:"how-to-break-dependency",slug:"/how-to-break-dependency/extract",permalink:"/embeded-testing-guide/ja/docs/how-to-break-dependency/extract",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to-break-dependency/extract.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4f9d\u5b58\u95a2\u4fc2\u306e\u5206\u96e2",permalink:"/embeded-testing-guide/ja/docs/how-to-break-dependency/methods"},next:{title:"\u30b3\u30f3\u30d1\u30a4\u30eb\u30b9\u30a4\u30c3\u30c1\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048",permalink:"/embeded-testing-guide/ja/docs/how-to-break-dependency/compile-switch"}},l={},c=[{value:"\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0",id:"\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0",level:2},{value:"\u30c6\u30b9\u30c8\u304c\u96e3\u3057\u3044\u72b6\u614b",id:"\u30c6\u30b9\u30c8\u304c\u96e3\u3057\u3044\u72b6\u614b",level:3},{value:"\u30c6\u30b9\u30c8\u304c\u53ef\u80fd\u306a\u72b6\u614b",id:"\u30c6\u30b9\u30c8\u304c\u53ef\u80fd\u306a\u72b6\u614b",level:3}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\u30ed\u30b8\u30c3\u30af\u306e\u62bd\u51fa",children:"\u30ed\u30b8\u30c3\u30af\u306e\u62bd\u51fa"})}),"\n",(0,d.jsx)(n.p,{children:"\u30c6\u30b9\u30c8\u304c\u5c0e\u5165\u3055\u308c\u3066\u3044\u306a\u3044\u65e2\u5b58\u306e\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u306f\u30c6\u30b9\u30c8\u3092\u5ff5\u982d\u306b\u4f5c\u3089\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u307b\u3068\u3093\u3069\u51fa\u529b\u5024\u30d9\u30fc\u30b9\u30c6\u30b9\u30c8\u306f\u3067\u304d\u306a\u3044\u3068\u601d\u308f\u308c\u307e\u3059\u3002\u30e2\u30c3\u30af\u3092\u4f7f\u3046\u3053\u3068\u3067\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u3092\u5909\u66f4\u305b\u305a\u306b\u30c6\u30b9\u30c8\u3092\u66f8\u304f\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u304c\u3001\u30e2\u30c3\u30af\u3092\u7528\u3044\u305f\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u306f\u8907\u96d1\u306b\u306a\u308a\u304c\u3061\u3067\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u7121\u7406\u306b\u30e2\u30c3\u30af\u3092\u4f7f\u3046\u3088\u308a\u51fa\u529b\u5024\u30d9\u30fc\u30b9\u30c6\u30b9\u30c8\u3067\u304d\u308b\u3088\u3046\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u3092\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsx)(n.p,{children:"\u30c6\u30b9\u30c8\u53ef\u80fd\u306a\u30b3\u30fc\u30c9\u3000=\u3000\u758e\u7d50\u5408\u3067\u308f\u304b\u308a\u3084\u3059\u3044\u30b3\u30fc\u30c9"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0",children:"\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0"}),"\n",(0,d.jsx)(n.p,{children:"\u7d44\u307f\u8fbc\u307f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u30b3\u30fc\u30c9\u306f\u30ed\u30b8\u30c3\u30af\u3068\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3078\u306e\u6307\u4ee4\u306b\u3088\u308a\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30ed\u30b8\u30c3\u30af\u3068\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u6307\u4ee4\u304c\u3046\u307e\u304f\u5206\u96e2\u3055\u308c\u3066\u3044\u308c\u3070\u826f\u3044\u3067\u3059\u304c\u3001\u7d0d\u671f\u306b\u8ffd\u308f\u308c\u3068\u308a\u3042\u3048\u305a\u52d5\u304f\u30bd\u30d5\u30c8\u3092\u4f5c\u3089\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u72b6\u6cc1\u3067\u66f8\u304b\u308c\u305f\u30b3\u30fc\u30c9\u306f\u304a\u305d\u3089\u304f\u30ed\u30b8\u30c3\u30af\u3068\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30d8\u306e\u6307\u4ee4\u304c\u5165\u308a\u6df7\u3058\u3063\u3066\u3044\u308b\u3053\u3068\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u51fa\u529b\u5024\u30d9\u30fc\u30b9\u30c6\u30b9\u30c8\u3092\u53ef\u80fd\u306b\u3059\u308b\u305f\u3081\u3053\u306e\u5bc6\u7d50\u5408\u3057\u305f\u30b3\u30fc\u30c9\u3092\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0\u3057\u3001\u30ed\u30b8\u30c3\u30af\u90e8\u5206\u3092\u62bd\u51fa\u3057\u307e\u3059\u3002\u62bd\u51fa\u3057\u305f\u30b3\u30fc\u30c9\u306f\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3078\u306e\u4f9d\u5b58\u304c\u306a\u3044\u305f\u3081\u7c21\u5358\u306b\u30d3\u30eb\u30c9\u3001\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u30c6\u30b9\u30c8\u304c\u96e3\u3057\u3044\u72b6\u614b",children:"\u30c6\u30b9\u30c8\u304c\u96e3\u3057\u3044\u72b6\u614b"}),"\n",(0,d.jsxs)(n.p,{children:["\u5404LED\u306e\u72b6\u614b\u3092\u793a\u3059\u69cb\u9020\u4f53",(0,d.jsx)(n.code,{children:"ST_LED_INFO"}),"\u306e\u914d\u5217\u3092EEPROM\u306b\u4fdd\u5b58\u3057\u3066\u3044\u308b\u3042\u308b\u7d44\u307f\u8fbc\u307f\u88fd\u54c1\u304c\u3042\u3063\u305f\u3068\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",metastring:'title="ledCtrl.h"',children:'#ifndef LED_DATA_H\n#define LED_DATA_H\n\n#include "../board/board.h"\n\n#define LED_INFO_NUM 10\n#define LED_COLOR_RED 0\n#define LED_COLOR_GREEN 1\n#define LED_COLOR_BLUE 2\n\ntypedef struct {\n    uint8_t ledNo;\n    uint8_t isOn;       // 0: OFF, 1: ON\n    uint8_t brightness; // 0 (dark) - 255 (bright)\n    uint8_t color;      // red, green, blue\n} ST_LED_INFO;\n\nint8_t LedCtrl_GetBrightestBlueLedNo(ST_LED_INFO *pList);\nvoid LedCtrl_TurnOnRedLedsOnly(void);\nST_LED_INFO *LedCtrl_GetCurrentLedState(void);\nuint8_t LedCtrl_GetLedNum(void);\n\n#endif /* LED_DATA_H */\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306e\u30c7\u30fc\u30bf\u3092EEPROM\u304b\u3089RAM\u306b\u8aad\u307f\u51fa\u3057\u3001\u9752\u8272\u3067\u6700\u3082\u660e\u308b\u3044LED\u306e\u756a\u53f7\u3092\u53d6\u5f97\u3059\u308b\u95a2\u6570\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",metastring:'title="ledCtrl.c"',children:"int8_t LedCtrl_GetBrightestBlueLedNo(ST_LED_INFO *pList) {\n    // read data from ROM to RAM\n    eepromReadBlock((void *)&ledInfoRecords[0], (const void *)eepromLedInfoRecords, LED_INFO_NUM * sizeof(ST_LED_INFO));\n\n    // find brightest blue led\n    int8_t brightestLedNo = -1;\n    uint8_t maxBrightness = 0;\n    for (uint8_t i = 0; i < LED_INFO_NUM; i++) {\n        if (ledInfoRecords[i].color == LED_COLOR_BLUE) {\n            if (ledInfoRecords[i].brightness > maxBrightness) {\n                maxBrightness = ledInfoRecords[i].brightness;\n                brightestLedNo = ledInfoRecords[i].ledNo;\n            }\n        }\n    }\n\n    return ret;\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"eepromReadBlock()"}),"\u306fEEPROM\u304b\u3089\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u51fa\u3059\u95a2\u6570\u3067\u3042\u308a\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u56fa\u6709\u306e\u3082\u306e\u3067\u3059\u3002\u3064\u307e\u308a\u3001\u7d44\u307f\u8fbc\u307f\u57fa\u677f\u4e0a\u3067\u306e\u307f\u52d5\u4f5c\u3057\u307e\u3059\u3002",(0,d.jsx)(n.code,{children:"eepromReadBlock()"}),"\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u305b\u3044\u3067",(0,d.jsx)(n.code,{children:"ledCtrl.c"}),"\u306b\u5bfe\u3057\u3066\u30c6\u30b9\u30c8\u74b0\u5883\u3067\u306f\u30d3\u30eb\u30c9\u304c\u3067\u304d\u305a\u3001\u30c6\u30b9\u30c8\u304c\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u30c6\u30b9\u30c8\u304c\u53ef\u80fd\u306a\u72b6\u614b",children:"\u30c6\u30b9\u30c8\u304c\u53ef\u80fd\u306a\u72b6\u614b"}),"\n",(0,d.jsx)(n.p,{children:"\u5148\u307b\u3069\u306e\u72b6\u614b\u3067\u306f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u56fa\u6709\u306a\u95a2\u6570\u3092\u542b\u3093\u3067\u3044\u308b\u305f\u3081\u30c6\u30b9\u30c8\u74b0\u5883\u3067\u30d3\u30eb\u30c9\u3001\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n\u305d\u3053\u3067\u3001\u30c6\u30b9\u30c8\u3057\u305f\u3044\u90e8\u5206\u3001\u3068\u304f\u306b\u8907\u96d1\u3067\u30d0\u30b0\u304c\u51fa\u3084\u3059\u3044\u30ed\u30b8\u30c3\u30af\u90e8\u5206\u3092\u5225\u30d5\u30a1\u30a4\u30eb\u306b\u62bd\u51fa\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",metastring:'title="ledCtrl.c"',children:"int8_t LedCtrl_GetBrightestBlueLedNo(ST_LED_INFO *pList) {\n    // read data from ROM to RAM\n    eepromReadBlock((void *)&ledInfoRecords[0], (const void *)eepromLedInfoRecords, LED_INFO_NUM * sizeof(ST_LED_INFO));\n\n    // find brightest blue led\n    // highlight-next-line\n    int8_t ret = LedImpl_GetBrightestBlueLedNo(ledInfoRecords, LED_INFO_NUM);\n\n    return ret;\n}\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",metastring:'title="ledImpl.c"',children:"int8_t LedImpl_GetBrightestBlueLedNo(ST_LED_INFO ledInfoRecords[], uint8_t size) {\n    int8_t brightestLedNo = -1;\n    uint8_t maxBrightness = 0;\n    for (uint8_t i = 0; i < size; i++) {\n        if (ledInfoRecords[i].color == LED_COLOR_BLUE) {\n            if (ledInfoRecords[i].brightness > maxBrightness) {\n                maxBrightness = ledInfoRecords[i].brightness;\n                brightestLedNo = ledInfoRecords[i].ledNo;\n            }\n        }\n    }\n\n    return brightestLedNo;\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"ledImpl.c"}),"\u306b\u306f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u56fa\u6709\u306e\u95a2\u6570\u3084API\u304c\u306a\u3044\u305f\u3081\u30c6\u30b9\u30c8\u74b0\u5883\u3067\u52d5\u304b\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306f",(0,d.jsx)(n.code,{children:"ledImpl.c"}),"\u306b\u5bfe\u3059\u308b\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u3067\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",metastring:'title="\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9 testLedImpl.cpp"',children:"TEST(ledImpl, \u6700\u3082\u660e\u308b\u3044\u9752\u8272LED\u306eledNo\u3092\u53d6\u5f97) {\n    ST_LED_INFO ledInfoRecords[5] = {\n        {1, 1, 100, LED_COLOR_BLUE}, // {ledNo, isOn, brightness, color}\n        {2, 1, 170, LED_COLOR_RED},  // {ledNo, isOn, brightness, color}\n        {3, 1, 90, LED_COLOR_BLUE},  // {ledNo, isOn, brightness, color}\n        {4, 1, 150, LED_COLOR_BLUE}, // {ledNo, isOn, brightness, color}\n        {5, 1, 130, LED_COLOR_BLUE}, // {ledNo, isOn, brightness, color}\n    };\n\n    int8_t ret = LedImpl_GetBrightestBlueLedNo(ledInfoRecords, 5);\n    EXPECT_EQ(4, ret);\n}\n\nTEST(ledImpl, \u9752\u8272LED\u304c\u4e00\u3064\u3082\u306a\u3051\u308c\u3070No\u306f\u30de\u30a4\u30ca\u30b9\u306b\u306a\u308b) {\n    ST_LED_INFO ledInfoRecords[4] = {\n        {1, 1, 100, LED_COLOR_RED},   // {ledNo, isOn, brightness, color}\n        {2, 1, 170, LED_COLOR_RED},   // {ledNo, isOn, brightness, color}\n        {3, 1, 90, LED_COLOR_GREEN},  // {ledNo, isOn, brightness, color}\n        {4, 1, 150, LED_COLOR_GREEN}, // {ledNo, isOn, brightness, color}\n    };\n\n    int8_t ret = LedImpl_GetBrightestBlueLedNo(ledInfoRecords, 4);\n    EXPECT_EQ(-1, ret);\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u30d0\u30b0\u306e\u767a\u751f\u306f\u8907\u96d1\u306a\u30ed\u30b8\u30c3\u30af\u304b\u3089\u767a\u751f\u3059\u308b\u3053\u3068\u304c\u591a\u3044\u305f\u3081\u3001\u3053\u308c\u306f\u5341\u5206\u5b9f\u8df5\u7684\u306a\u65b9\u6cd5\u3060\u3068\u601d\u3044\u307e\u3059\u3002",(0,d.jsx)(n.code,{children:"ledCtrl.c"}),"\u306b\u5bfe\u3059\u308b\u30c6\u30b9\u30c8\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001",(0,d.jsx)(n.code,{children:"ledCtrl.c"}),"\u306f\u5358\u7d14\u3067\u5909\u66f4\u3082\u305d\u308c\u307b\u3069\u591a\u304f\u306f\u306a\u3044\u3068\u601d\u308f\u308c\u308b\u305f\u3081\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u5f97\u3089\u308c\u308b\u30ea\u30bf\u30fc\u30f3\u306f\u305d\u308c\u307b\u3069\u591a\u304f\u306a\u3044\u3067\u3057\u3087\u3046\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var d=t(6540);const r={},i=d.createContext(r);function o(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);