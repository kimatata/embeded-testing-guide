"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[161],{3024:(e,I,t)=>{t.r(I),t.d(I,{assets:()=>u,contentTitle:()=>l,default:()=>Z,frontMatter:()=>d,metadata:()=>c,toc:()=>M});var n=t(4848),i=t(8453);const d={sidebar_position:1},l="Unit Testing Methods",c={id:"guide/pattern",title:"Unit Testing Methods",description:"In general, test code checks expected values using the following three patterns:",source:"@site/docs/guide/pattern.md",sourceDirName:"guide",slug:"/guide/pattern",permalink:"/embeded-testing-guide/docs/guide/pattern",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/pattern.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guide",permalink:"/embeded-testing-guide/docs/category/guide"},next:{title:"Dependencies",permalink:"/embeded-testing-guide/docs/guide/dependencies"}},u={},M=[{value:"Output-based Testing",id:"output-based-testing",level:2},{value:"State-based Testing",id:"state-based-testing",level:2},{value:"Communication-based Testing",id:"communication-based-testing",level:2}];function g(e){const I={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I.header,{children:(0,n.jsx)(I.h1,{id:"unit-testing-methods",children:"Unit Testing Methods"})}),"\n",(0,n.jsx)(I.p,{children:"In general, test code checks expected values using the following three patterns:"}),"\n",(0,n.jsxs)(I.ul,{children:["\n",(0,n.jsx)(I.li,{children:"Output-based testing"}),"\n",(0,n.jsx)(I.li,{children:"State-based testing"}),"\n",(0,n.jsx)(I.li,{children:"Communication-based testing"}),"\n"]}),"\n",(0,n.jsx)(I.h2,{id:"output-based-testing",children:"Output-based Testing"}),"\n",(0,n.jsx)(I.p,{children:"This method verifies whether the value returned by the code under test matches the expected value. It is the simplest and easiest to write but assumes that the code under test has no side effects."}),"\n",(0,n.jsx)(I.pre,{children:(0,n.jsx)(I.code,{className:"language-c",metastring:'title="Output-based Testing"',children:"TEST(Counter, CanCalculateElapsedTimeCorrectlyEvenWithOverflow) {\n    uint32_t startValue = 0xffffffff;\n    uint32_t currentValue = 0x9;\n    EXPECT_EQ(10, Counter_GetElapsedCount(startValue, currentValue));\n}\n"})}),"\n",(0,n.jsx)(I.h2,{id:"state-based-testing",children:"State-based Testing"}),"\n",(0,n.jsx)(I.p,{children:"This method checks the state (member variables) after the code under test is executed. It is slightly more complex compared to output-based testing. In C language, it looks like this:"}),"\n",(0,n.jsx)(I.pre,{children:(0,n.jsx)(I.code,{className:"language-c",metastring:'title="production code couter.h"',children:'#ifndef COUNTER_H\n#define COUNTER_H\n\n#include "../board/board.h"\n\ntypedef struct {\n    uint32_t value;\n    uint32_t overflowCount;\n} Counter;\n\nvoid Counter_Init(Counter *counter);\nvoid Counter_Update(Counter *counter);\nuint32_t Counter_GetValue(Counter *counter);\nuint32_t Counter_GetOverflowCount(Counter *counter);\nvoid Counter_Reset(Counter *counter);\nuint32_t Counter_GetElapsedCount(uint32_t startValue, uint32_t currentValue);\n\n#endif // COUNTER_H\n\n'})}),"\n",(0,n.jsx)(I.pre,{children:(0,n.jsx)(I.code,{className:"language-c",metastring:'title="production code couter.c"',children:'#include "counter.h"\n\nvoid Counter_Init(Counter *counter) {\n    counter->value = 0;\n    counter->overflowCount = 0;\n}\n\nvoid Counter_Update(Counter *counter) {\n    counter->value++;\n\n    // when overflows\n    if (counter->value == 0) {\n        counter->overflowCount++;\n    }\n}\n\nvoid Counter_Reset(Counter *counter) {\n    counter->value = 0;\n    counter->overflowCount = 0;\n}\n\nuint32_t Counter_GetValue(Counter *counter) {\n    return counter->value;\n}\n\nuint32_t Counter_GetOverflowCount(Counter *counter) {\n    return counter->overflowCount;\n}\n\nuint32_t Counter_GetElapsedCount(uint32_t startValue, uint32_t currentValue) {\n    return currentValue - startValue;\n}\n'})}),"\n",(0,n.jsx)(I.pre,{children:(0,n.jsx)(I.code,{className:"language-c",metastring:'title="test code testCounter.c"',children:"TEST(Counter, CounterInitialValueIsZero) {\n    Counter counter;\n    Counter_Init(&counter);\n    EXPECT_EQ(Counter_GetValue(&counter), 0);\n    EXPECT_EQ(Counter_GetOverflowCount(&counter), 0);\n}\n\nTEST(Counter, CounterValueIncrements) {\n    Counter counter;\n    Counter_Init(&counter);\n    Counter_Update(&counter);\n    EXPECT_EQ(Counter_GetValue(&counter), 1);\n}\n\nTEST(Counter, CounterOverflows) {\n    Counter counter;\n    Counter_Init(&counter);\n\n    counter.value = UINT32_MAX - 1;\n    Counter_Update(&counter);\n    EXPECT_EQ(Counter_GetValue(&counter), UINT32_MAX);\n    EXPECT_EQ(Counter_GetOverflowCount(&counter), 0);\n\n    // trigger overflow\n    Counter_Update(&counter);\n    EXPECT_EQ(Counter_GetValue(&counter), 0);\n    EXPECT_EQ(Counter_GetOverflowCount(&counter), 1); // overflow count will be 1\n}\n"})}),"\n",(0,n.jsx)(I.p,{children:"In object-oriented programming, this would be like checking the value of a class's member variables later."}),"\n",(0,n.jsx)(I.h2,{id:"communication-based-testing",children:"Communication-based Testing"}),"\n",(0,n.jsx)(I.p,{children:"This method verifies that the code under test correctly calls other functions or APIs. Verify the component being called by replacing it with a mock or spy. The implementation becomes more complex and the test code longer."}),"\n",(0,n.jsx)(I.p,{children:(0,n.jsx)(I.img,{alt:"./img/communicationTest.svg",src:t(7238).A+""})})]})}function Z(e={}){const{wrapper:I}={...(0,i.R)(),...e.components};return I?(0,n.jsx)(I,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},7238:(e,I,t)=>{t.d(I,{A:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZGlhZ3JhbXMubmV0IC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgd2lkdGg9IjIxNHB4IiBoZWlnaHQ9IjI2MXB4IiB2aWV3Qm94PSItMC41IC0wLjUgMjE0IDI2MSIgY29udGVudD0iJmx0O214ZmlsZSBob3N0PSZxdW90O0VsZWN0cm9uJnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjQtMDktMjRUMTU6Mjc6NTguMjA2WiZxdW90OyBhZ2VudD0mcXVvdDs1LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgZHJhdy5pby8xNS40LjAgQ2hyb21lLzkxLjAuNDQ3Mi4xNjQgRWxlY3Ryb24vMTMuNS4wIFNhZmFyaS81MzcuMzYmcXVvdDsgZXRhZz0mcXVvdDtGTWppYmR0Ujh1b2lYa0dUMHJ0TyZxdW90OyB2ZXJzaW9uPSZxdW90OzE1LjQuMCZxdW90OyB0eXBlPSZxdW90O2RldmljZSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtkbG1yUWNER041TlA5M0F0WXJiOSZxdW90OyBuYW1lPSZxdW90O+ODmuODvOOCuDEmcXVvdDsmZ3Q7MVZkTmM5b3dFUDAxekxTSFpQd1JISElNSDZVSE10TUpTUnVPd2w1c0pjSWlzZ0E3djc1cnZNWldETFJwU1VsUDFqN3RTdDU5cXllNzVmYm02VkN4UlhRakF4QXR4d3JTbHR0dk9ZNXRkVHI0eUpHc1FMd1NDQlVQeUtrQ3h2d0Z5a2hDbHp5QXhIRFVVZ3JORnlib3l6Z0dYeHNZVTBxdVRiZVpGT2F1Q3haQ0F4ajdURFRSSHp6UVVZRjJuTXNLL3dvOGpNcWRiZStxbUptejBwa3lTU0lXeUhVTmNnY3R0NmVrMU1Wb252WkE1TVVyNjFMRWZka3p1MzB4QmJIK25RQzUwdngyTkxrSng5Kzc4RGc4ZTNqMm5zOHU2TjEwVmlZTUFlWlBwbFE2a3FHTW1SaFVhRmZKWlJ4QXZxcUZWdVV6a25LQm9JM2dJMmlkRVpsc3FTVkNrWjRMbW9XVTY0YzgvTHhOMXFRMjAwOXA1WTJSa2RITWxncVF5S1h5NFVDS1pkY3dGWUkrNE9jVWZubit0UTJvbGtPUWM5QXFRd2NGZ21tK012dURVWnVGVzcrS0NSd1FHVzhneGpzbE1YYU5sb3FrM2NRZ0h5cmJCdVZHTFNvM3E3Q045ZThJZFk5TjZDYjBXaW1XMVJ3V2tzYzZxYTM4TFFmUWdTUndlLzVKQUM5Zm5kSmZ1TC95eDBIeEFsVm5iVFA1ODJZak1Wc3hzYVFxOUNMd254QzZoV1FwOU01ZUhMRXBhcjNSUDB6d01NYXhqNXlDUW1BRlNuTVUwMnVhbVBNZ0tGb1ZFdjdDcHB2MThtNmdLdUxpN1c2cjNkL1pINGZPU2I0UnBBYURkQ1BRSm9ib0d2UlRsSFYrMGJtaTFkN1dFUldIcFl1Y3pSTFFEUTA0QWxOMmc2azdTSnI4bUVxd2pyaUc4WUp0VHRVYTcybVR0ZVFKdEIrUnNmZFlOaXE4dDVJWFpnZVg1cnE2UHUyeXlhUGExZWxaN3lTbDdmL2xqdHRLYVUwOUo0WjRIbHRLblZOSjZWOFI2alRsQ3I4N0VibEh6aFEraXpQaG9YQzUzU2tDWHBpUFB2WHU3ejUvNktOaW4veXN1UHRLaTRYQnhCMExhNWhyS3hNaStkQ2xmRS9aUWJQNmJDK1V2ZnI1Y1FjL0FRPT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyI+PGRlZnMvPjxnPjxwYXRoIGQ9Ik0gNjAgNjAgTCA2MCA5My42MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDYwIDk4Ljg4IEwgNTYuNSA5MS44OCBMIDYwIDkzLjYzIEwgNjMuNSA5MS44OCBaIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMTIwIDMwIEwgMTgwIDMwIEwgMTgwIDIzMCBMIDEyNi4zNyAyMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAxMjEuMTIgMjMwIEwgMTI4LjEyIDIyNi41IEwgMTI2LjM3IDIzMCBMIDEyOC4xMiAyMzMuNSBaIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxcHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjA5cHg7IG1hcmdpbi1sZWZ0OiAxODFweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTFweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyB3aGl0ZS1zcGFjZTogbm93cmFwOyI+Q2hlY2sgUmVzdWx0PC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjE4MSIgeT0iMjEyIiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjExcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNoZWNrIFJlc3VsdDwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAxLjc1IDEuNDIgTCAxMjAuMDQgLTEuMzIgTCAxMjEuNTYgNTguNjEgTCAtMS42OSA2MS4xNyIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAwIDAgQyAyOC44NCAwLjE5IDU1LjEzIDAuMDcgMTIwIDAgTSAwIDAgQyA0My4xNSAxLjg1IDg0Ljg0IDEuNCAxMjAgMCBNIDEyMCAwIEMgMTIxLjA1IDE1Ljk5IDEyMC41NiAzNC4yOCAxMjAgNjAgTSAxMjAgMCBDIDEyMS40MiAxNy43IDExOS45MiAzNS4wNyAxMjAgNjAgTSAxMjAgNjAgQyA3OS43MiA1OS41NCAzNi44OSA2MS4xNCAwIDYwIE0gMTIwIDYwIEMgODEuNzYgNTkuOTkgNDMuMjMgNjEuMDIgMCA2MCBNIDAgNjAgQyAtMS41NSA0Mi43OSAtMC4xNSAyNC4xMSAwIDAgTSAwIDYwIEMgMS4wNCAzOS4xOCAwLjU0IDE5LjUxIDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAzMHB4OyBtYXJnaW4tbGVmdDogMXB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5UZXN0PC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjYwIiB5PSIzNCIgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UZXN0PC90ZXh0Pjwvc3dpdGNoPjwvZz48cGF0aCBkPSJNIDYwIDE2MCBMIDYwIDE5My42MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDYwIDE5OC44OCBMIDU2LjUgMTkxLjg4IEwgNjAgMTkzLjYzIEwgNjMuNSAxOTEuODggWiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIwIiB5PSIxMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gLTAuNzIgOTkuNjUgTCAxMjAuMTUgMTAwLjM5IEwgMTE5LjM4IDE2MS4xNCBMIDEuOSAxNTkuMTYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMCAxMDAgQyAyNy43IDk3LjcxIDU2LjgxIDk3Ljc5IDEyMCAxMDAgTSAwIDEwMCBDIDI2Ljk4IDk5LjM0IDU0Ljg5IDEwMC4xMSAxMjAgMTAwIE0gMTIwIDEwMCBDIDEyMC4yMyAxMjAuMjcgMTE4LjYxIDEzOS4zMyAxMjAgMTYwIE0gMTIwIDEwMCBDIDEyMC43NiAxMTUuOTkgMTIwLjE1IDEzMS42NSAxMjAgMTYwIE0gMTIwIDE2MCBDIDgzLjczIDE2MC44OCA0Ny40OSAxNTkuOTggMCAxNjAgTSAxMjAgMTYwIEMgNzYuMDkgMTYwLjM3IDMzLjY4IDE2MC4yOSAwIDE2MCBNIDAgMTYwIEMgMC4xNiAxNDYuMzMgLTEuOTEgMTMzLjAxIDAgMTAwIE0gMCAxNjAgQyAtMC44NyAxNDIgLTEuMiAxMjUuMDkgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMTMwcHg7IG1hcmdpbi1sZWZ0OiAxcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkNvZGUgVW5kZXIgVGVzdDxiciAvPihDVVQpPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjYwIiB5PSIxMzQiIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q29kZSBVbmRlciBUZXN0Li4uPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIwIiB5PSIyMDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMC44IDIwMS44OCBMIDEyMC4yNyAxOTguMTEgTCAxMjEuMjEgMjU5LjY3IEwgMS40OSAyNjEuMTQiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMCAyMDAgQyAyNi41NiAyMDEuNjMgNTQuNDkgMjAxLjkxIDEyMCAyMDAgTSAwIDIwMCBDIDM0LjgyIDE5OC44MyA3MC45NCAxOTguODIgMTIwIDIwMCBNIDEyMCAyMDAgQyAxMjAuNjIgMjIwLjU1IDEyMS44NiAyNDQuMzkgMTIwIDI2MCBNIDEyMCAyMDAgQyAxMTguODkgMjE0LjI3IDExOS4xOCAyMzAuMjQgMTIwIDI2MCBNIDEyMCAyNjAgQyA4Ny43NCAyNjIuMjMgNTQuMSAyNTguODMgMCAyNjAgTSAxMjAgMjYwIEMgOTYuNDMgMjYwLjc1IDcyLjEzIDI2MS41NiAwIDI2MCBNIDAgMjYwIEMgLTAuOTMgMjM3Ljg2IDEuNTMgMjE3LjkyIDAgMjAwIE0gMCAyNjAgQyAwLjQyIDI0NC44MyAwLjI2IDIzMC42NyAwIDIwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAyMzBweDsgbWFyZ2luLWxlZnQ6IDFweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+Q29kZSB3aGljaCBDVVQgY2FsbHM8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNjAiIHk9IjIzNCIgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Db2RlIHdoaWNoIENVVCBjYWxsczwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAlIiB5PSIxMDAlIj5WaWV3ZXIgZG9lcyBub3Qgc3VwcG9ydCBmdWxsIFNWRyAxLjE8L3RleHQ+PC9hPjwvc3dpdGNoPjwvc3ZnPg=="},8453:(e,I,t)=>{t.d(I,{R:()=>l,x:()=>c});var n=t(6540);const i={},d=n.createContext(i);function l(e){const I=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(I):{...I,...e}}),[I,e])}function c(e){let I;return I=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(d.Provider,{value:I},e.children)}}}]);