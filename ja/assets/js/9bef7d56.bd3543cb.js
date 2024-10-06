"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[379],{1e3:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=t(4848),s=t(8453);const r={sidebar_position:4},c="\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",d={id:"best-practice/index",title:"\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",description:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u95a2\u6570\u3092\u30c6\u30b9\u30c8\u3059\u308b\u65b9\u6cd5",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/best-practice/index.md",sourceDirName:"best-practice",slug:"/best-practice/",permalink:"/embeded-testing-guide/ja/docs/best-practice/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/best-practice/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"(\u53c2\u8003)WSL2\u3092\u7528\u3044\u305fLinux\u74b0\u5883\u69cb\u7bc9",permalink:"/embeded-testing-guide/ja/docs/setup/wsl"},next:{title:"\u53c2\u8003\u6587\u732e",permalink:"/embeded-testing-guide/ja/docs/reference/"}},a={},l=[{value:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u95a2\u6570\u3092\u30c6\u30b9\u30c8\u3059\u308b\u65b9\u6cd5",id:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u95a2\u6570\u3092\u30c6\u30b9\u30c8\u3059\u308b\u65b9\u6cd5",level:2},{value:"TDD\u306f\u5fc5\u9808?",id:"tdd\u306f\u5fc5\u9808",level:2},{value:"\u30c6\u30b9\u30c8\u30ab\u30d0\u30ec\u30c3\u30b8",id:"\u30c6\u30b9\u30c8\u30ab\u30d0\u30ec\u30c3\u30b8",level:2},{value:"\u671f\u5f85\u5024\u30c1\u30a7\u30c3\u30af\u3082\u308c",id:"\u671f\u5f85\u5024\u30c1\u30a7\u30c3\u30af\u3082\u308c",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",children:"\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u95a2\u6570\u3092\u30c6\u30b9\u30c8\u3059\u308b\u65b9\u6cd5",children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u95a2\u6570\u3092\u30c6\u30b9\u30c8\u3059\u308b\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:"\u4ed6\u306e\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u547c\u3073\u51fa\u3059\u3053\u3068\u306e\u3067\u304d\u306a\u3044\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u95a2\u6570(\u3064\u307e\u308ac\u8a00\u8a9e\u3067\u3044\u3046\u3068static\u95a2\u6570)\u306f\u4e00\u5207\u30c6\u30b9\u30c8\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u95a2\u6570\u3092\u30c6\u30b9\u30c8\u306e\u305f\u3081\u3060\u3051\u306b\u30d1\u30d6\u30ea\u30c3\u30af\u306b\u5909\u66f4\u3057\u305f\u308a\u3001\u4f55\u3089\u304b\u306e\u5c0f\u7d30\u5de5\u3092\u3057\u3066\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u304b\u3089\u547c\u3073\u51fa\u305b\u308b\u3088\u3046\u306b\u3059\u308b\u306e\u306f\u30a2\u30f3\u30c1\u30d1\u30bf\u30fc\u30f3\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u95a2\u6570\u306f\u30d1\u30d6\u30ea\u30c3\u30af\u306a\u95a2\u6570\u306e\u4e2d\u3067\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u30d1\u30d6\u30ea\u30c3\u30af\u306a\u95a2\u6570\u306b\u5bfe\u3057\u3066\u30c6\u30b9\u30c8\u3092\u66f8\u3051\u3070\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u95a2\u6570\u3082\u81ea\u305a\u3068\u691c\u8a3c\u3055\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u3082\u3057\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u95a2\u6570\u3092\u76f4\u63a5\u547c\u3073\u51fa\u3057\u3066\u30c6\u30b9\u30c8\u3057\u305f\u3044\u3068\u601d\u3046\u306a\u3089\u3001\u5916\u90e8\u304b\u3089\u632f\u308b\u821e\u3044\u304c\u898b\u3048\u306b\u304f\u3044\u69cb\u6210\u306b\u306a\u3063\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u9ad8\u3044\u306e\u3067\u69cb\u6210\u3092\u898b\u76f4\u3057\u307e\u3057\u3087\u3046\u3002\u3082\u3057\u304f\u306f\u3075\u308b\u307e\u3044\u3084\u4ed5\u69d8\u3067\u306f\u306a\u304f\u5b9f\u88c5\u306e\u8a73\u7d30\u3092\u30c6\u30b9\u30c8\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u306e\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u5b9f\u88c5\u306e\u8a73\u7d30\u3092\u691c\u8a3c\u3059\u308b\u30c6\u30b9\u30c8\u306f\u58ca\u308c\u3084\u3059\u304f\u3001\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u306e\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u4f4e\u4e0b\u306b\u3064\u306a\u304c\u308b\u306e\u3067\u907f\u3051\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"tdd\u306f\u5fc5\u9808",children:"TDD\u306f\u5fc5\u9808?"}),"\n",(0,i.jsx)(n.p,{children:"\u5fc5\u305a\u3057\u3082TDD\u3067\u9032\u3081\u308b\u5fc5\u8981\u306f\u306a\u3044\u3068\u601d\u3044\u307e\u3059\u304c\u3001\u5b9f\u88c5\u2192\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u3088\u308a\u3082\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u2192\u5b9f\u88c5\u306e\u9806\u306e\u307b\u3046\u304c\u30c6\u30b9\u30c8\u53ef\u80fd\u306a\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u4fdd\u3061\u3084\u3059\u3044\u3068\u601d\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u30c6\u30b9\u30c8\u30ab\u30d0\u30ec\u30c3\u30b8",children:"\u30c6\u30b9\u30c8\u30ab\u30d0\u30ec\u30c3\u30b8"}),"\n",(0,i.jsx)(n.p,{children:"\u30ab\u30d0\u30ec\u30c3\u30b8100%\u3092\u76ee\u6307\u3059\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30ab\u30d0\u30ec\u30c3\u30b8\u306f\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u306e\u5185\u3001\u30c6\u30b9\u30c8\u3067\u901a\u904e\u3057\u305f\u884c\u6570\u3092\u8a08\u7b97\u3057\u305f\u3060\u3051\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u3048\u3070\u3001\u4ee5\u4e0b\u306e\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u306f\u6761\u4ef6\u5206\u5c90\u306e\u7247\u65b9\u3057\u304b\u691c\u8a3c\u3057\u3066\u3044\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:'title="\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9"',children:"TEST(getAbsSuite, \u7d76\u5bfe\u5024\u3092\u8a08\u7b97\u3067\u304d\u308b) {\n    int x = 3;\n    int y = -2;\n    EXPECT_EQ(5, getAbs(x, y));\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:'title="\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9"',children:"int getAbs(int x, int y) {\n    if (x >= y) {\n      return (x - y);\n    } else {\n      // highlight-next-line\n      return (y - x); // \u3053\u3061\u3089\u306e\u5206\u5c90\u304c\u691c\u8a3c\u3055\u308c\u3066\u3044\u306a\u3044\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u306eif\u6587\u30923\u9805\u6f14\u7b97\u5b50\u306b\u5909\u3048\u305f\u3060\u3051\u3067\u30ab\u30d0\u30ec\u30c3\u30b8\u304c\u4e0a\u304c\u308a\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u691c\u8a3c\u3057\u3066\u3044\u308b\u5185\u5bb9\u306fif\u6587\u306e\u6642\u3068\u540c\u3058\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:'title="\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9"',children:"int getAbs(int x, int y) {\n    return (x - y) >= 0 ? (x - y) : (y-x);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u671f\u5f85\u5024\u30c1\u30a7\u30c3\u30af\u3082\u308c",children:"\u671f\u5f85\u5024\u30c1\u30a7\u30c3\u30af\u3082\u308c"}),"\n",(0,i.jsx)(n.p,{children:"\u30c1\u30fc\u30e0\u3067\u54c1\u8cea\u306e\u57fa\u6e96\u3092\u30ab\u30d0\u30ec\u30c3\u30b880%\u306a\u3069\u3068\u5b9a\u3081\u3066\u3057\u307e\u3046\u3068\u30ab\u30d0\u30ec\u30c3\u30b8\u3092\u4e0a\u3052\u308b\u305f\u3081\u306b\u671f\u5f85\u5024\u30c1\u30a7\u30c3\u30af\u3092\u3057\u306a\u3044\u4eba\u304c\u51fa\u3066\u304f\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u3067\u306f\u671f\u5f85\u5024\u30c1\u30a7\u30c3\u30af(",(0,i.jsx)(n.code,{children:"EXPECT_EQ"}),"\u306b\u3088\u308b\u7d50\u679c\u306e\u78ba\u8a8d)\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u305b\u304c\u3001\u3053\u308c\u3067\u3082\u30d7\u30ed\u30c0\u30af\u30c8\u30b3\u30fc\u30c9\u3092\u901a\u904e\u3057\u3066\u3044\u308b\u306e\u3067\u30ab\u30d0\u30ec\u30c3\u30b8\u306b\u542b\u307e\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:'title="\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9"',children:"TEST(getAbsSuite, \u7d76\u5bfe\u5024\u3092\u8a08\u7b97\u3067\u304d\u308b) {\n    getAbs(3, -2);\n    getAbs(1, 5);\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var i=t(6540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);