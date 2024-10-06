"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[161],{3024:(M,I,e)=>{e.r(I),e.d(I,{assets:()=>u,contentTitle:()=>g,default:()=>Z,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=e(4848),n=e(8453);const i={sidebar_position:1},g="Unit Testing Methods",d={id:"guide/pattern",title:"Unit Testing Methods",description:"In general, test code checks expected values using the following three patterns:",source:"@site/docs/guide/pattern.md",sourceDirName:"guide",slug:"/guide/pattern",permalink:"/embeded-testing-guide/docs/guide/pattern",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/pattern.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Unit Test Frameworks",permalink:"/embeded-testing-guide/docs/intro/tools"},next:{title:"Dependencies",permalink:"/embeded-testing-guide/docs/guide/dependencies"}},u={},c=[{value:"Output-based Testing",id:"output-based-testing",level:2},{value:"State-based Testing",id:"state-based-testing",level:2},{value:"Communication-based Testing",id:"communication-based-testing",level:2}];function l(M){const I={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...M.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.header,{children:(0,t.jsx)(I.h1,{id:"unit-testing-methods",children:"Unit Testing Methods"})}),"\n",(0,t.jsx)(I.p,{children:"In general, test code checks expected values using the following three patterns:"}),"\n",(0,t.jsxs)(I.ul,{children:["\n",(0,t.jsx)(I.li,{children:"Output-based testing"}),"\n",(0,t.jsx)(I.li,{children:"State-based testing"}),"\n",(0,t.jsx)(I.li,{children:"Communication-based testing"}),"\n"]}),"\n",(0,t.jsx)(I.h2,{id:"output-based-testing",children:"Output-based Testing"}),"\n",(0,t.jsx)(I.p,{children:"This method verifies whether the value returned by the code under test matches the expected value. It is the simplest and easiest to write but assumes that the code under test has no side effects."}),"\n",(0,t.jsx)(I.p,{children:(0,t.jsx)(I.img,{alt:"Output-based Testing",src:e(627).A+""})}),"\n",(0,t.jsx)(I.pre,{children:(0,t.jsx)(I.code,{className:"language-c",metastring:'title="Output-based Testing"',children:"TEST(Counter, CanCalculateElapsedTimeCorrectlyEvenWithOverflow) {\n    uint32_t startValue = 0xffffffff;\n    uint32_t currentValue = 0x9;\n    EXPECT_EQ(10, Counter_GetElapsedCount(startValue, currentValue));\n}\n"})}),"\n",(0,t.jsx)(I.h2,{id:"state-based-testing",children:"State-based Testing"}),"\n",(0,t.jsx)(I.p,{children:"This method checks the state (member variables) after the code under test is executed. It is slightly more complex compared to output-based testing. In C language, it looks like this:"}),"\n",(0,t.jsx)(I.p,{children:(0,t.jsx)(I.img,{alt:"State-based Testing",src:e(7119).A+""})}),"\n",(0,t.jsx)(I.pre,{children:(0,t.jsx)(I.code,{className:"language-c",metastring:'title="production code couter.h"',children:'#ifndef COUNTER_H\n#define COUNTER_H\n\n#include "../board/board.h"\n\ntypedef struct {\n    uint32_t value;\n    uint32_t overflowCount;\n} Counter;\n\nvoid Counter_Init(Counter *counter);\nvoid Counter_Update(Counter *counter);\nuint32_t Counter_GetValue(Counter *counter);\nuint32_t Counter_GetOverflowCount(Counter *counter);\nvoid Counter_Reset(Counter *counter);\nuint32_t Counter_GetElapsedCount(uint32_t startValue, uint32_t currentValue);\n\n#endif // COUNTER_H\n\n'})}),"\n",(0,t.jsx)(I.pre,{children:(0,t.jsx)(I.code,{className:"language-c",metastring:'title="production code couter.c"',children:'#include "counter.h"\n\nvoid Counter_Init(Counter *counter) {\n    counter->value = 0;\n    counter->overflowCount = 0;\n}\n\nvoid Counter_Update(Counter *counter) {\n    counter->value++;\n\n    // when overflows\n    if (counter->value == 0) {\n        counter->overflowCount++;\n    }\n}\n\nvoid Counter_Reset(Counter *counter) {\n    counter->value = 0;\n    counter->overflowCount = 0;\n}\n\nuint32_t Counter_GetValue(Counter *counter) {\n    return counter->value;\n}\n\nuint32_t Counter_GetOverflowCount(Counter *counter) {\n    return counter->overflowCount;\n}\n\nuint32_t Counter_GetElapsedCount(uint32_t startValue, uint32_t currentValue) {\n    return currentValue - startValue;\n}\n'})}),"\n",(0,t.jsx)(I.pre,{children:(0,t.jsx)(I.code,{className:"language-c",metastring:'title="test code testCounter.c"',children:"TEST(Counter, CounterInitialValueIsZero) {\n    Counter counter;\n    Counter_Init(&counter);\n    EXPECT_EQ(Counter_GetValue(&counter), 0);\n    EXPECT_EQ(Counter_GetOverflowCount(&counter), 0);\n}\n\nTEST(Counter, CounterValueIncrements) {\n    Counter counter;\n    Counter_Init(&counter);\n    Counter_Update(&counter);\n    EXPECT_EQ(Counter_GetValue(&counter), 1);\n}\n\nTEST(Counter, CounterOverflows) {\n    Counter counter;\n    Counter_Init(&counter);\n\n    counter.value = UINT32_MAX - 1;\n    Counter_Update(&counter);\n    EXPECT_EQ(Counter_GetValue(&counter), UINT32_MAX);\n    EXPECT_EQ(Counter_GetOverflowCount(&counter), 0);\n\n    // trigger overflow\n    Counter_Update(&counter);\n    EXPECT_EQ(Counter_GetValue(&counter), 0);\n    EXPECT_EQ(Counter_GetOverflowCount(&counter), 1); // overflow count will be 1\n}\n"})}),"\n",(0,t.jsx)(I.p,{children:"In object-oriented programming, this would be like checking the value of a class's member variables later."}),"\n",(0,t.jsx)(I.h2,{id:"communication-based-testing",children:"Communication-based Testing"}),"\n",(0,t.jsx)(I.p,{children:"This method verifies that the code under test correctly calls other functions or APIs. Verify the component being called by replacing it with a mock or spy. The implementation becomes more complex and the test code longer."}),"\n",(0,t.jsx)(I.p,{children:(0,t.jsx)(I.img,{alt:"Communication-based Testing",src:e(8452).A+""})})]})}function Z(M={}){const{wrapper:I}={...(0,n.R)(),...M.components};return I?(0,t.jsx)(I,{...M,children:(0,t.jsx)(l,{...M})}):l(M)}},8452:(M,I,e)=>{e.d(I,{A:()=>t});const t=e.p+"assets/images/communication-based-97d8af68a54de6e7aaf2685e6ff4ca97.svg"},627:(M,I,e)=>{e.d(I,{A:()=>t});const t="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZGlhZ3JhbXMubmV0IC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgd2lkdGg9IjE2OXB4IiBoZWlnaHQ9IjI0OHB4IiB2aWV3Qm94PSItMC41IC0wLjUgMTY5IDI0OCIgY29udGVudD0iJmx0O214ZmlsZSBob3N0PSZxdW90O0VsZWN0cm9uJnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjQtMTAtMDZUMDI6MzE6MjkuOTkwWiZxdW90OyBhZ2VudD0mcXVvdDs1LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgZHJhdy5pby8xNS40LjAgQ2hyb21lLzkxLjAuNDQ3Mi4xNjQgRWxlY3Ryb24vMTMuNS4wIFNhZmFyaS81MzcuMzYmcXVvdDsgZXRhZz0mcXVvdDtSdHo5QUhQTnBjbV9OWVZoaDJFTCZxdW90OyB2ZXJzaW9uPSZxdW90OzE1LjQuMCZxdW90OyB0eXBlPSZxdW90O2RldmljZSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtkbG1yUWNER041TlA5M0F0WXJiOSZxdW90OyBuYW1lPSZxdW90O+ODmuODvOOCuDEmcXVvdDsmZ3Q7MVZkTmM1c3dFUDAxSE8wQjRROTZUR3czN1V5U3BuVW1UWTRLV29NU1FFUUlZL0xySzBBeXlOZ2VUNU4wbXBPMVQ3c3JhZC91czIyNXMzaHp3WEVhWGpFQ2tZVnNzckhjdVlXUVkzdWUvS2lRc2tFbUdnZzRKY3FwQlpiMEZYU2tRbk5LSURNY0JXT1JvS2tKK2l4SndCY0doamxuaGVtMllwRjVhb29ENkFGTEgwZDk5RGNsSW14UUQwMWIvQnZRSU5Rbk81TXZ6VTZNdGJONlNSWml3b29PNUM0c2Q4WVpFODBxM3N3Z3FvcW42OUxFZlQyd3U3MFloMFNjRXNEV2d2NjZmTGdLbG5mbjhIUXh1SCtadkF4RzZtNmkxQThHSXQrdlRNWkZ5QUtXNEdqUm91ZWM1UW1CS3FzdHJkYm5rckZVZ280RW4wQ0lVcEdKYzhFa0ZJbzRVcnV3b2VLK0NoK09sZlhRMlpsdlZPYmFLTFdSQ0Y1MmdpcnpvYnZYaHRXV2pzdWVRZmloU3Q4dm1hcGl4bkx1dzVFNjZkYkRQQUJ4eEE4MWZsVVJPd2NvUWk2QXhTQXZKeDA0UkZqUXRkbGtXUFZxc1BWcjZaUUx4ZWgrZHAvTFBJNjhLYksvTzd5NEwvRmdudWI2MW1zYzVmcWtZVFVydUE0dHFPelFha3FDUEpZRnlmYTJ3aVYrbEJOdDBJY2pHaVJ5N2NzZzRCSllBeGRVSmoxVEd6RWxwT2tVeU9ncmZxenpWV1NrakZibnlPVGpjMnM4Mzh2SXNUYXREb0tOdFdmdTFTSEdhQmtGVjFFRGU0akdudHZFS2tuU1pUcVpFNVg5cG5wTk40MXRockRWS3BQTnNrdmk5bEluOFhxc0d6dTgza0ltNm1vUTZORm96bXNSVWdITEZOZnRYa2pSTnNrOWJWNTZSQndzK01nMmFxM05vdFZTUnd0azJOSFJpWDI0L0c4YUNmVHBCTTh4NUs1VnY0OFZQSFNpNERudkxYaDE2Qm5udU93NEtPSG96OTcyZDRiWlptaTY4MTI0NDQvZTZHKzZ5MFZ6NGI4ZDhoOC83K0kxRFJmWDE2UDF3azV2bDRYcjd4bHlOS3dMS1hLZTFJc3NqLzRYMVQ0MmErK2kyaVBQY1V6VmR0K20yanIxeENUMlgwazQ2ckY3d3huSmZVRlo4aG1FM1BFK1RzbWwyZjRzYmdyZS9ybHdGMzhBJmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsiPjxkZWZzLz48Zz48cGF0aCBkPSJNIDYwIDYwIEwgNjAgMTMzLjYzIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDYwIDEzOC44OCBMIDU2LjUgMTMxLjg4IEwgNjAgMTMzLjYzIEwgNjMuNSAxMzEuODggWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSA2MCA2MCBNIDYwIDYwIEMgNjEuMTcgNzcuNzggNTkuODkgOTUuNDcgNjAgMTMzLjYzIE0gNjAgNjAgQyA2MC41NyA4Ni43MSA2MC41OSAxMTUuMSA2MCAxMzMuNjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDU2LjQxIDEzMS45OSBDIDU2LjQxIDEzMS45OSA1Ni40MSAxMzEuOTkgNTYuNDEgMTMxLjk5IE0gNTYuNDEgMTMxLjk5IEMgNTYuNDEgMTMxLjk5IDU2LjQxIDEzMS45OSA1Ni40MSAxMzEuOTkgTSA1OC4xMSAxMzYuMTIgQyA1OC45IDEzNS4zNSA1OS43IDEzNC41NSA2MC4wOCAxMzMuODYgTSA1OC4xMSAxMzYuMTIgQyA1OC42NSAxMzUuNTMgNTguOTYgMTM1LjIgNjAuMDggMTMzLjg2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSA2MCAxMzguODggTSA2MCAxMzguODggQyA1OS4wNyAxMzYuNzkgNTguNTcgMTM1Ljk4IDU2LjUgMTMxLjg4IE0gNjAgMTM4Ljg4IEMgNTkuMTkgMTM3LjA4IDU3Ljk2IDEzNS4yNiA1Ni41IDEzMS44OCBNIDU2LjUgMTMxLjg4IEMgNTcuOSAxMzIuMzQgNTguNzcgMTMyLjgyIDYwIDEzMy42MyBNIDU2LjUgMTMxLjg4IEMgNTguMDEgMTMyLjQzIDU5LjM4IDEzMy4xNSA2MCAxMzMuNjMgTSA2MCAxMzMuNjMgQyA2MC43MiAxMzMuMDUgNjEuMTYgMTMzLjA4IDYzLjUgMTMxLjg4IE0gNjAgMTMzLjYzIEMgNjEuMTEgMTMzLjMyIDYxLjY2IDEzMi41OSA2My41IDEzMS44OCBNIDYzLjUgMTMxLjg4IEMgNjIuMjMgMTMzLjEyIDYyLjE4IDEzNS4zMyA2MCAxMzguODggTSA2My41IDEzMS44OCBDIDYyLjMyIDEzMy44NyA2MS43MiAxMzUuMDkgNjAgMTM4Ljg4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA4MXB4OyBtYXJnaW4tbGVmdDogNjBweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTFweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyB3aGl0ZS1zcGFjZTogbm93cmFwOyI+MS4gY2FsbCB3aXRoIGFyZ3VtZW50czwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI2MCIgeT0iODQiIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTFweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MS4gY2FsbCB3aXRoIGFyZ3VtZW50czwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAxLjc1IDEuNDIgTCAxMjAuMDQgLTEuMzIgTCAxMjEuNTYgNTguNjEgTCAtMS42OSA2MS4xNyIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAwIDAgQyAyOC44NCAwLjE5IDU1LjEzIDAuMDcgMTIwIDAgTSAwIDAgQyA0My4xNSAxLjg1IDg0Ljg0IDEuNCAxMjAgMCBNIDEyMCAwIEMgMTIxLjA1IDE1Ljk5IDEyMC41NiAzNC4yOCAxMjAgNjAgTSAxMjAgMCBDIDEyMS40MiAxNy43IDExOS45MiAzNS4wNyAxMjAgNjAgTSAxMjAgNjAgQyA3OS43MiA1OS41NCAzNi44OSA2MS4xNCAwIDYwIE0gMTIwIDYwIEMgODEuNzYgNTkuOTkgNDMuMjMgNjEuMDIgMCA2MCBNIDAgNjAgQyAtMS41NSA0Mi43OSAtMC4xNSAyNC4xMSAwIDAgTSAwIDYwIEMgMS4wNCAzOS4xOCAwLjU0IDE5LjUxIDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAzMHB4OyBtYXJnaW4tbGVmdDogMXB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5UZXN0IGNvZGU8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNjAiIHk9IjM0IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRlc3QgY29kZTwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSA2MCAyMDAgTCA2MCAyMzAgTCAxNjAgMjMwIEwgMTYwIDMwIEwgMTI2LjM3IDMwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDEyMS4xMiAzMCBMIDEyOC4xMiAyNi41IEwgMTI2LjM3IDMwIEwgMTI4LjEyIDMzLjUgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSA2MCAyMDAgTSA2MCAyMDAgQyA1OS4wNSAyMDYuMzMgNTguMTEgMjExLjA5IDYwIDIzMCBNIDYwIDIwMCBDIDU5Ljc0IDIwOS4yNSA2MC4xNCAyMTkuMzkgNjAgMjMwIE0gNjAgMjMwIEMgOTEuMzcgMjMxLjUgMTI0LjA1IDIzMC43MyAxNjAgMjMwIE0gNjAgMjMwIEMgOTIuNDEgMjMwLjU0IDEyNS4wMyAyMzEuMDggMTYwIDIzMCBNIDE2MCAyMzAgQyAxNjEuNDYgMTcxLjYyIDE2MCAxMTEuNTggMTYwIDMwIE0gMTYwIDIzMCBDIDE1OC42NiAxODMuMzUgMTU3Ljk2IDEzNC41NyAxNjAgMzAgTSAxNjAgMzAgQyAxNDkuNzMgMzEuMjYgMTM3Ljc0IDI5LjU0IDEyNi4zNyAzMCBNIDE2MCAzMCBDIDE0Ny4wMyAyOS4yNSAxMzYgMzAuOCAxMjYuMzcgMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDEyMC44NCAzMC4zMiBDIDEyMC44NCAzMC4zMiAxMjAuODQgMzAuMzIgMTIwLjg0IDMwLjMyIE0gMTIwLjg0IDMwLjMyIEMgMTIwLjg0IDMwLjMyIDEyMC44NCAzMC4zMiAxMjAuODQgMzAuMzIgTSAxMjQuNTIgMzIuMTkgQyAxMjUuMTUgMzEuNzEgMTI1Ljk5IDMwLjg5IDEyNi40OCAyOS45MyBNIDEyNC41MiAzMi4xOSBDIDEyNS4xMyAzMS40NCAxMjUuNzYgMzAuNzcgMTI2LjQ4IDI5LjkzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAxMjEuMTIgMzAgTSAxMjEuMTIgMzAgQyAxMjMuMTkgMjkuMDcgMTI0LjYxIDI3LjQyIDEyOC4xMiAyNi41IE0gMTIxLjEyIDMwIEMgMTIyLjY5IDI5LjQ4IDEyNC4wNSAyOC4wOSAxMjguMTIgMjYuNSBNIDEyOC4xMiAyNi41IEMgMTI3Ljg0IDI3Ljk4IDEyNy4yIDI4Ljg5IDEyNi4zNyAzMCBNIDEyOC4xMiAyNi41IEMgMTI3LjMyIDI3LjYxIDEyNi45MSAyOS4xOCAxMjYuMzcgMzAgTSAxMjYuMzcgMzAgQyAxMjYuOTkgMzAuOTggMTI3LjIyIDMxLjcgMTI4LjEyIDMzLjUgTSAxMjYuMzcgMzAgQyAxMjYuOTQgMzAuOTQgMTI3LjU2IDMyLjE0IDEyOC4xMiAzMy41IE0gMTI4LjEyIDMzLjUgQyAxMjUuNTcgMzIuMjYgMTIzLjUxIDMxLjE1IDEyMS4xMiAzMCBNIDEyOC4xMiAzMy41IEMgMTI2LjQgMzIuMzUgMTI0LjYyIDMxLjc4IDEyMS4xMiAzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxcHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjQxcHg7IG1hcmdpbi1sZWZ0OiAxMjFweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTFweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyB3aGl0ZS1zcGFjZTogbm93cmFwOyI+Mi4gcmV0dXJuIHJlc3VsdHM8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTIxIiB5PSIyNDQiIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTFweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi4gcmV0dXJuIHJlc3VsdHM8L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjAiIHk9IjE0MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAtMC43MiAxMzkuNjUgTCAxMjAuMTUgMTQwLjM5IEwgMTE5LjM4IDIwMS4xNCBMIDEuOSAxOTkuMTYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMCAxNDAgQyAyNy43IDEzNy43MSA1Ni44MSAxMzcuNzkgMTIwIDE0MCBNIDAgMTQwIEMgMjYuOTggMTM5LjM0IDU0Ljg5IDE0MC4xMSAxMjAgMTQwIE0gMTIwIDE0MCBDIDEyMC4yMyAxNjAuMjcgMTE4LjYxIDE3OS4zMyAxMjAgMjAwIE0gMTIwIDE0MCBDIDEyMC43NiAxNTUuOTkgMTIwLjE1IDE3MS42NSAxMjAgMjAwIE0gMTIwIDIwMCBDIDgzLjczIDIwMC44OCA0Ny40OSAxOTkuOTggMCAyMDAgTSAxMjAgMjAwIEMgNzYuMDkgMjAwLjM3IDMzLjY4IDIwMC4yOSAwIDIwMCBNIDAgMjAwIEMgMC4xNiAxODYuMzMgLTEuOTEgMTczLjAxIDAgMTQwIE0gMCAyMDAgQyAtMC44NyAxODIgLTEuMiAxNjUuMDkgMCAxNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMTcwcHg7IG1hcmdpbi1sZWZ0OiAxcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPlByb2R1Y3Rpb24gY29kZTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI2MCIgeT0iMTc0IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlByb2R1Y3Rpb24gY29kZTwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAlIiB5PSIxMDAlIj5WaWV3ZXIgZG9lcyBub3Qgc3VwcG9ydCBmdWxsIFNWRyAxLjE8L3RleHQ+PC9hPjwvc3dpdGNoPjwvc3ZnPg=="},7119:(M,I,e)=>{e.d(I,{A:()=>t});const t=e.p+"assets/images/state-based-8fd282fb51d02a88d570cabd2f987ae0.svg"},8453:(M,I,e)=>{e.d(I,{R:()=>g,x:()=>d});var t=e(6540);const n={},i=t.createContext(n);function g(M){const I=t.useContext(i);return t.useMemo((function(){return"function"==typeof M?M(I):{...I,...M}}),[I,M])}function d(M){let I;return I=M.disableParentContext?"function"==typeof M.components?M.components(n):M.components||n:g(M.components),t.createElement(i.Provider,{value:I},M.children)}}}]);