"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; },\n/* harmony export */   \"projects\": function() { return /* binding */ projects; }\n/* harmony export */ });\nconst projects = [\n    {\n        title: \"Elite Book Reader\",\n        description: \"It will help blind people to read the books In our project uses OCR(optical character recognition)technology for the identification of the printed characters using image Sensing devices and computer programming. It processes the captured image and sends it to the text to speech conversion software and the output is sent to the speaker via Bluetooth.\",\n        image: \"/images/1.jpg\",\n        tags: [\n            \"Python\",\n            \"JavaScript\",\n            \"React\"\n        ],\n        source: \"https://google.com\",\n        visit: \"https://google.com\",\n        id: 0\n    },\n    {\n        title: \"Paraphrase detection\",\n        description: \"paraphrasing detection to detect the same meaning occur on the page or not so that we can reduce plagiarism, text summaries with Bert and use model. In this project, we used a large data set that was taken from the DPIL corpus for four languages Tamil, Malayalam, Hindi, Punjab. Two tasks are involved in this system. Using deep learning algorithms namely Bert & Use model attempt to classify the given sentences as paraphrases or not. It identify the given sentences as either a paraphrase or semi paraphrase or non-paraphrase.\",\n        image: \"/images/2.jpg\",\n        tags: [\n            \"Python\",\n            \"React\"\n        ],\n        source: \"https://github.com/Nivedidha18/paraphrase\",\n        visit: \"https://github.com/Nivedidha18/paraphrase\",\n        id: 1\n    },\n    {\n        title: \"Study of the Social Media Influenced on Shopping\",\n        description: \"Study of Social media is used by both men and women, but study shows that there are some disparities in how they utilise these platforms. One way to compare how men and women use social media is by the proportion of counts for various social media platforms. This can include examining statistics on the many social media platforms that men and women use, how frequently they use them, and how much time they spend there. Understanding the differences between males and females behaviour is conceivable.\",\n        image: \"/images/3.png\",\n        tags: [\n            \"RStudio\"\n        ],\n        source: \"https://google.com\",\n        visit: \"https://google.com\",\n        id: 2\n    },\n    {\n        title: \"Knowledge League\",\n        description: \"It is a Webpage that provides notes for college students. In this project, we used a large data set that was taken from an ebook and used HTML, CSS and javascript to design.\",\n        image: \"/images/4.png\",\n        tags: [\n            \"React\"\n        ],\n        source: \"https://google.com\",\n        visit: \"https://google.com\",\n        id: 3\n    }\n];\nconst TimeLineData = [\n    {\n        year: 2017,\n        text: \"Started my journey\"\n    },\n    {\n        year: 2018,\n        text: \"Worked as a freelance developer\"\n    },\n    {\n        year: 2019,\n        text: \"Founded JavaScript Mastery\"\n    },\n    {\n        year: 2020,\n        text: \"Shared my projects with the world\"\n    },\n    {\n        year: 2021,\n        text: \"Started my own platform\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLFdBQVc7SUFDdEI7UUFDRUMsT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLE9BQU87UUFDUEMsTUFBTTtZQUFDO1lBQVU7WUFBYztTQUFRO1FBQ3ZDQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsSUFBSTtJQUNOO0lBQ0E7UUFDRU4sT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLE9BQU87UUFDUEMsTUFBTTtZQUFDO1lBQVU7U0FBUTtRQUN6QkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLElBQUk7SUFDTjtJQUNBO1FBQ0VOLE9BQU87UUFDUEMsYUFDRTtRQUNGQyxPQUFPO1FBQ1BDLE1BQU07WUFBQztTQUFVO1FBQ2pCQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsSUFBSTtJQUNOO0lBQ0E7UUFDRU4sT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLE9BQU87UUFDUEMsTUFBTTtZQUFDO1NBQVE7UUFDZkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLElBQUk7SUFDTjtDQUNELENBQUM7QUFFSyxNQUFNQyxlQUFlO0lBQzFCO1FBQUVDLE1BQU07UUFBTUMsTUFBTTtJQUFxQjtJQUN6QztRQUFFRCxNQUFNO1FBQU1DLE1BQU07SUFBa0M7SUFDdEQ7UUFBRUQsTUFBTTtRQUFNQyxNQUFNO0lBQTZCO0lBQ2pEO1FBQUVELE1BQU07UUFBTUMsTUFBTTtJQUFvQztJQUN4RDtRQUFFRCxNQUFNO1FBQU1DLE1BQU07SUFBMEI7Q0FDL0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcz8xYzA2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnRWxpdGUgQm9vayBSZWFkZXInLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0l0IHdpbGwgaGVscCBibGluZCBwZW9wbGUgdG8gcmVhZCB0aGUgYm9va3MgSW4gb3VyIHByb2plY3QgdXNlcyBPQ1Iob3B0aWNhbCBjaGFyYWN0ZXIgcmVjb2duaXRpb24pdGVjaG5vbG9neSBmb3IgdGhlIGlkZW50aWZpY2F0aW9uIG9mIHRoZSBwcmludGVkIGNoYXJhY3RlcnMgdXNpbmcgaW1hZ2UgU2Vuc2luZyBkZXZpY2VzIGFuZCBjb21wdXRlciBwcm9ncmFtbWluZy4gSXQgcHJvY2Vzc2VzIHRoZSBjYXB0dXJlZCBpbWFnZSBhbmQgc2VuZHMgaXQgdG8gdGhlIHRleHQgdG8gc3BlZWNoIGNvbnZlcnNpb24gc29mdHdhcmUgYW5kIHRoZSBvdXRwdXQgaXMgc2VudCB0byB0aGUgc3BlYWtlciB2aWEgQmx1ZXRvb3RoLicsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzEuanBnJyxcbiAgICB0YWdzOiBbJ1B5dGhvbicsICdKYXZhU2NyaXB0JywgJ1JlYWN0J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1BhcmFwaHJhc2UgZGV0ZWN0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdwYXJhcGhyYXNpbmcgZGV0ZWN0aW9uIHRvIGRldGVjdCB0aGUgc2FtZSBtZWFuaW5nIG9jY3VyIG9uIHRoZSBwYWdlIG9yIG5vdCBzbyB0aGF0IHdlIGNhbiByZWR1Y2UgcGxhZ2lhcmlzbSwgdGV4dCBzdW1tYXJpZXMgd2l0aCBCZXJ0IGFuZCB1c2UgbW9kZWwuIEluIHRoaXMgcHJvamVjdCwgd2UgdXNlZCBhIGxhcmdlIGRhdGEgc2V0IHRoYXQgd2FzIHRha2VuIGZyb20gdGhlIERQSUwgY29ycHVzIGZvciBmb3VyIGxhbmd1YWdlcyBUYW1pbCwgTWFsYXlhbGFtLCBIaW5kaSwgUHVuamFiLiBUd28gdGFza3MgYXJlIGludm9sdmVkIGluIHRoaXMgc3lzdGVtLiBVc2luZyBkZWVwIGxlYXJuaW5nIGFsZ29yaXRobXMgbmFtZWx5IEJlcnQgJiBVc2UgbW9kZWwgYXR0ZW1wdCB0byBjbGFzc2lmeSB0aGUgZ2l2ZW4gc2VudGVuY2VzIGFzIHBhcmFwaHJhc2VzIG9yIG5vdC4gSXQgaWRlbnRpZnkgdGhlIGdpdmVuIHNlbnRlbmNlcyBhcyBlaXRoZXIgYSBwYXJhcGhyYXNlIG9yIHNlbWkgcGFyYXBocmFzZSBvciBub24tcGFyYXBocmFzZS4nLFxuICAgIGltYWdlOiAnL2ltYWdlcy8yLmpwZycsXG4gICAgdGFnczogWydQeXRob24nLCAnUmVhY3QnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vTml2ZWRpZGhhMTgvcGFyYXBocmFzZScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vTml2ZWRpZGhhMTgvcGFyYXBocmFzZScsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1N0dWR5IG9mIHRoZSBTb2NpYWwgTWVkaWEgSW5mbHVlbmNlZCBvbiBTaG9wcGluZycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnU3R1ZHkgb2YgU29jaWFsIG1lZGlhIGlzIHVzZWQgYnkgYm90aCBtZW4gYW5kIHdvbWVuLCBidXQgc3R1ZHkgc2hvd3MgdGhhdCB0aGVyZSBhcmUgc29tZSBkaXNwYXJpdGllcyBpbiBob3cgdGhleSB1dGlsaXNlIHRoZXNlIHBsYXRmb3Jtcy4gT25lIHdheSB0byBjb21wYXJlIGhvdyBtZW4gYW5kIHdvbWVuIHVzZSBzb2NpYWwgbWVkaWEgaXMgYnkgdGhlIHByb3BvcnRpb24gb2YgY291bnRzIGZvciB2YXJpb3VzIHNvY2lhbCBtZWRpYSBwbGF0Zm9ybXMuIFRoaXMgY2FuIGluY2x1ZGUgZXhhbWluaW5nIHN0YXRpc3RpY3Mgb24gdGhlIG1hbnkgc29jaWFsIG1lZGlhIHBsYXRmb3JtcyB0aGF0IG1lbiBhbmQgd29tZW4gdXNlLCBob3cgZnJlcXVlbnRseSB0aGV5IHVzZSB0aGVtLCBhbmQgaG93IG11Y2ggdGltZSB0aGV5IHNwZW5kIHRoZXJlLiBVbmRlcnN0YW5kaW5nIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIG1hbGVzIGFuZCBmZW1hbGVzIGJlaGF2aW91ciBpcyBjb25jZWl2YWJsZS4nLFxuICAgIGltYWdlOiAnL2ltYWdlcy8zLnBuZycsXG4gICAgdGFnczogWydSU3R1ZGlvJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0tub3dsZWRnZSBMZWFndWUnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0l0IGlzIGEgV2VicGFnZSB0aGF0IHByb3ZpZGVzIG5vdGVzIGZvciBjb2xsZWdlIHN0dWRlbnRzLiBJbiB0aGlzIHByb2plY3QsIHdlIHVzZWQgYSBsYXJnZSBkYXRhIHNldCB0aGF0IHdhcyB0YWtlbiBmcm9tIGFuIGVib29rIGFuZCB1c2VkIEhUTUwsIENTUyBhbmQgamF2YXNjcmlwdCB0byBkZXNpZ24uJyxcbiAgICBpbWFnZTogJy9pbWFnZXMvNC5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxNywgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScgfSxcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnV29ya2VkIGFzIGEgZnJlZWxhbmNlIGRldmVsb3BlcicgfSxcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnRm91bmRlZCBKYXZhU2NyaXB0IE1hc3RlcnknIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1NoYXJlZCBteSBwcm9qZWN0cyB3aXRoIHRoZSB3b3JsZCcgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnU3RhcnRlZCBteSBvd24gcGxhdGZvcm0nIH0sXG5dO1xuIl0sIm5hbWVzIjpbInByb2plY3RzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGFncyIsInNvdXJjZSIsInZpc2l0IiwiaWQiLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n"));

/***/ })

});