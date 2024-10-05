"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[322],{5271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var l=t(4848),i=t(8453);const r={sidebar_position:6},o="\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048",c={id:"how-to-break-dependency/functional-pointer",title:"\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048",description:"\u5358\u4e00\u306e\u30c6\u30b9\u30c8\u30b9\u30a4\u30fc\u30c8\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u5185\u3067\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u3068\u30c6\u30b9\u30c8\u30c0\u30d6\u30eb\u3092\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3054\u3068\u306b\u4f7f\u3044\u5206\u3051\u305f\u3044\u6642\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u306f\u300c\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048\u300d\u3092\u4f7f\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/how-to-break-dependency/functional-pointer.md",sourceDirName:"how-to-break-dependency",slug:"/how-to-break-dependency/functional-pointer",permalink:"/embeded-testing-guide/ja/docs/how-to-break-dependency/functional-pointer",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to-break-dependency/functional-pointer.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u30e2\u30c3\u30af\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048",permalink:"/embeded-testing-guide/ja/docs/how-to-break-dependency/mock"},next:{title:"Google Test\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/embeded-testing-guide/ja/docs/setup/googletest"}},d={},u=[{value:"\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u306e\u5207\u308a\u66ff\u3048\u65b9\u6cd5",id:"\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u306e\u5207\u308a\u66ff\u3048\u65b9\u6cd5",level:2}];function s(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048",children:"\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048"})}),"\n",(0,l.jsx)(n.p,{children:"\u5358\u4e00\u306e\u30c6\u30b9\u30c8\u30b9\u30a4\u30fc\u30c8\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u5185\u3067\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u3068\u30c6\u30b9\u30c8\u30c0\u30d6\u30eb\u3092\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3054\u3068\u306b\u4f7f\u3044\u5206\u3051\u305f\u3044\u6642\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u306f\u300c\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u306b\u3088\u308b\u7f6e\u304d\u63db\u3048\u300d\u3092\u4f7f\u3044\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.admonition,{type:"caution",children:(0,l.jsx)(n.p,{children:"\u30b3\u30fc\u30c9\u304c\u8aad\u307f\u3065\u3089\u304f\u306a\u308b\u306e\u3067\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u3068\u30c6\u30b9\u30c8\u30c0\u30d6\u30eb\u3092\u4f7f\u3044\u5206\u3051\u308b\u5fc5\u8981\u304c\u304c\u306a\u3044\u3068\u304d\u306f\u300c\u30ea\u30f3\u30ab\u3067\u7f6e\u304d\u63db\u3048\u300d\u3092\u4f7f\u3044\u307e\u3057\u3087\u3046"})}),"\n",(0,l.jsx)(n.h2,{id:"\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u306e\u5207\u308a\u66ff\u3048\u65b9\u6cd5",children:"\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u306e\u5207\u308a\u66ff\u3048\u65b9\u6cd5"}),"\n",(0,l.jsx)(n.p,{children:"\u30d5\u30a1\u30a4\u30eb\u3092USB\u30c9\u30e9\u30a4\u30d6\u306b\u66f8\u304d\u8fbc\u3080\u30ad\u30e5\u30fc\u3092\u767b\u9332\u3059\u308b\u305f\u3081\u306e\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u95a2\u6570\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",metastring:'title="\u95a2\u6570\u5ba3\u8a00(\u5909\u66f4\u524d)"',children:"void FileCtrl_EnQueue(ST_QUEUE_ELEMENT* el)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9",(0,l.jsx)(n.code,{children:"FileCtrl_EnQueue_Real"}),"\u3068\u30c6\u30b9\u30c8\u30c0\u30d6\u30eb",(0,l.jsx)(n.code,{children:"FileCtrl_EnQueue_Mock"}),"\u3092\u4f7f\u3044\u5206\u3051\u308b\u305f\u3081\u306b\u95a2\u6570\u5ba3\u8a00\u3092\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u306e\u5ba3\u8a00\u306b\u66f8\u304d\u63db\u3048\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",metastring:'title="\u95a2\u6570\u5ba3\u8a00(\u5909\u66f4\u5f8c)"',children:"extern void (*FileCtrl_EnQueue)(ST_QUEUE_ELEMENT* el);\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u306e\u95a2\u6570\u30dd\u30a4\u30f3\u30bf",(0,l.jsx)(n.code,{children:"FileCtrl_EnQueue_Real"}),"\u3092",(0,l.jsx)(n.code,{children:"FileCtrl_EnQueue"}),"\u306b\u4ee3\u5165\u3059\u308b\u3053\u3068\u3067",(0,l.jsx)(n.code,{children:"FileCtrl_EnQueue()"}),"\u306e\u547c\u3073\u51fa\u3057\u3092",(0,l.jsx)(n.code,{children:"FileCtrl_EnQueue_Real()"}),"\u306e\u547c\u3073\u51fa\u3057\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3055\u305b\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",metastring:'title="\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9 FileManager.c"',children:"void FileCtrl_EnQueue_Real(ST_QUEUE_ELEMENT* el) {\n    // \u5b9f\u969b\u306e\u30de\u30a4\u30b3\u30f3\u3067\u52d5\u4f5c\u3059\u308b\u51e6\u7406\n}\nvoid (*FileCtrl_EnQueue)(ST_QUEUE_ELEMENT* el) = FileCtrl_EnQueue_Real;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u30c6\u30b9\u30c8\u30c0\u30d6\u30eb",(0,l.jsx)(n.code,{children:"FileCtrl_EnQueue_Mock"}),"\u3092\u4f7f\u3044\u305f\u3044\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3067\u306f",(0,l.jsx)(n.code,{children:"FileCtrl_EnQueue"}),"\u306b\u30c6\u30b9\u30c8\u30c0\u30d6\u30eb\u3092\u53c2\u7167\u3059\u308b\u95a2\u6570\u30dd\u30a4\u30f3\u30bf",(0,l.jsx)(n.code,{children:"FileCtrl_EnQueue_Mock"}),"\u3092\u4ee3\u5165\u3057\u3001\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u306e\u5f8c\u51e6\u7406\u3067\u5143\u306e\u53c2\u7167\u306b\u623b\u3057\u3066\u304a\u304f\u3053\u3068\u3067\u305d\u306e\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3067\u3060\u3051",(0,l.jsx)(n.code,{children:"FileCtrl_EnQueue_Mock"}),"\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",metastring:'title="FileCtrl_EnQueue\u3092\u4f7f\u3044\u305f\u3044\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9"',children:"void FileCtrl_EnQueue_Mock(ST_QUEUE_ELEMENT* el) {\n    // \u30c6\u30b9\u30c8\u30c0\u30d6\u30eb\u306e\u51e6\u7406\n}\n\nTEST_F(TestLogSave, FileCtrl_EnQueue\u3092\u3064\u304b\u3063\u305f\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9) {\n\nvoid (*FileCtrl_EnQueue_Saved)(ST_QUEUE_ELEMENT* el);\n    // \u524d\u51e6\u7406\n    FileCtrl_EnQueue_Saved = FileCtrl_EnQueue;\n    FileCtrl_EnQueue = FileCtrl_EnQueue_Mock;\n\n    // FileCtrl_EnQueue_Mock\u3092\u4f7f\u3063\u305f\u4efb\u610f\u306e\u671f\u5f85\u5024\u30c1\u30a7\u30c3\u30af\n    // ..\n\n    // \u5f8c\u51e6\u7406\n    FileCtrl_EnQueue = FileCtrl_EnQueue_Saved;\n}\n"})}),"\n",(0,l.jsxs)(n.admonition,{title:"GoogleTest\u3067\u306eTips",type:"info",children:[(0,l.jsxs)(n.p,{children:["GoogleTest\u3067\u3042\u308b\u30c6\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u5185\u3067",(0,l.jsx)(n.code,{children:"FileCtrl_EnQueue_Mock"}),"\u3092\u4f7f\u3044\u305f\u3044\u5834\u5408\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b",(0,l.jsx)(n.code,{children:"SetUp()"}),"\u3092\u5b9a\u7fa9\u3057\u3066\u304a\u304f\u3068\n\u5404\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u6bce\u306b\u30dd\u30a4\u30f3\u30bf\u306e\u4ee3\u5165\u3092\u884c\u3046\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u3001\u30c6\u30b9\u30c8\u304c\u8aad\u307f\u3084\u3059\u304f\u306a\u308b\u306e\u3067\u4fbf\u5229\u3067\u3059\u3002"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",metastring:'title="\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9 \u30c6\u30b9\u30c8\u30af\u30e9\u30b9"',children:'class TestLogSave: public ::testing::Test {\n  protected:\n    void (*FileCtrl_EnQueue_Saved)(ST_QUEUE_ELEMENT* el);\n\n    void SetUp() override {\n        // FileCtrl_EnQueue\u306f\u30e2\u30c3\u30af(FileCtrl_EnQueue_Mock)\u3092\u4f7f\u7528\u3059\u308b\n        FileCtrl_EnQueue_Saved = FileCtrl_EnQueue;\n        FileCtrl_EnQueue = FileCtrl_EnQueue_Mock;\n    }\n\n    void TearDown() override {\n        // FileCtrl_EnQueue\u3092\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9(FileCtrl_EnQueue_Real)\u306e\u53c2\u7167\u306b\u623b\u3059\n        FileCtrl_EnQueue = FileCtrl_EnQueue_Saved;\n    }\n};\n\n```c title="\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9 \u30c6\u30b9\u30c8\u30b1\u30fc\u30b9"\nTEST_F(TestLogSave, FileCtrl_EnQueue\u3092\u3064\u304b\u3063\u305f\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9) {\n  // \u7565\n}\n'})})]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var l=t(6540);const i={},r=l.createContext(i);function o(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);