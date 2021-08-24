webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_ethereum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/ethereum.js */ \"./lib/ethereum.js\");\n/* harmony import */ var _components_layout_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/Header.js */ \"./pages/components/layout/Header.js\");\n/* harmony import */ var _components_layout_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/Footer.js */ \"./pages/components/layout/Footer.js\");\n/* harmony import */ var _components_elements_Image_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/elements/Image.js */ \"./pages/components/elements/Image.js\");\n\n\nvar _jsxFileName = \"/home/seven/Desktop/TradingTigers/airdrop/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const {\n    0: loadingMessage,\n    1: setLoadingMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('Please Connect Your Metamask!');\n  const {\n    0: claimMessage,\n    1: setClaimMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    payload: undefined,\n    type: undefined\n  });\n  const {\n    0: airdrop,\n    1: setAirdrop\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined);\n  const {\n    0: accounts,\n    1: setAccounts\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const init = async () => {\n      try {\n        const {\n          airdrop,\n          accounts\n        } = await Object(_lib_ethereum_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        setAirdrop(airdrop);\n        setAccounts(accounts);\n        setLoading(false);\n      } catch (e) {\n        setLoadingMessage(e);\n      }\n    };\n\n    init();\n  }, []);\n\n  const claimTokens = async e => {\n    e.preventDefault();\n    const address = e.target.elements[0].value.trim().toLowerCase();\n    setClaimMessage({\n      type: 'primary',\n      payload: 'Checking your address in whitelist...'\n    });\n\n    try {\n      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/authorization', {\n        address\n      });\n      setClaimMessage({\n        type: 'primary',\n        payload: `\n          Claiming token from Airdrop contract...\n          Address: ${response.data.address}\n          Total Amount: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.totalAllocation.toString())} TIGS\n          -> Basic: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.basicAllocation.toString())} TIGS\n          -> Bonus: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.bonusAllocation.toString())} TIGS\n        `\n      });\n      const receipt = await airdrop.methods.claimTokens(response.data.address, response.data.totalAllocation.toString(), response.data.signature).send({\n        from: accounts[0]\n      });\n      setClaimMessage({\n        type: 'primary',\n        payload: `Airdrop success!\nTokens successfully in tx ${receipt.transactionHash} \nAddress: ${response.data.address}\nTotal Amount: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.totalAllocation.toString())} TIGS\n-> Basic: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.basicAllocation.toString())} TIGS\n-> Bonus: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.bonusAllocation.toString())} TIGS\n        `\n      });\n    } catch (e) {\n      if (e.message === 'Request failed with status code 401') {\n        console.log(e);\n        setClaimMessage({\n          type: 'danger',\n          payload: `Airdrop failed Reason:\nAddress not registered`\n        });\n        return;\n      }\n\n      setClaimMessage({\n        type: 'danger',\n        payload: `Airdrop failed Reason:\nAirdrop already sent to ${address}`\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"body-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Header_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      navPosition: \"right\",\n      className: \"reveal-from-bottom is-revealed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"site-content\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"features-split section illustration-section-01\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card-body card-gray\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"container-xs center-content\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                children: \"TradingTigers Airdrop\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_elements_Image_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                src: \"https://trading-tigers.com/assets/img/airdrop-icon.svg\",\n                width: 140\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n              className: \"card-title has-top-divider\",\n              children: \"How to Get in the Airdrop?\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-text \",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: [\"Step 1: Join our \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                    target: \"_blank\",\n                    href: \"https://t.me/tradingtigerschat\",\n                    children: \"Telegram chat!\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 123,\n                    columnNumber: 40\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 123,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 2: Write in the chat \\\"/JoinAirdrop 0x3a0E4Fc1Ff11b... (your BSC Address!)\\\"\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 124,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 122,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 121,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n              className: \"card-title\",\n              children: \"Claim your tokens!\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-text\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Attention: Those who have already registered on the old Airdrop page can now claim their tokens here.\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 130,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 131,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 1: Make sure you have configured the BSC network with Metamask\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 132,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 2: Enter your BSC address and click on Claim TIGS.\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 133,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 3: Confirm the transaction to claim your TIGS tokens. This will send a transaction to the Airdrop smart contract\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 134,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 129,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"features-split section illustration-section-01\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container text-center \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"section-inner\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-gray\",\n              children: loadingMessage\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 145,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, this) : null, loading ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"testimonial section illustration-section-02\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"section-inner \",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n              className: \"form-inline card-gray\",\n              onSubmit: e => claimTokens(e),\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"text\",\n                className: \"form-control mb-2 mr-sm-2 col-sm-12\",\n                placeholder: \"BSC Address\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 157,\n                columnNumber: 21\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                type: \"submit\",\n                className: \"btn button-primary mb-2 col-sm-12\",\n                children: \"Claim TIGS\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 159,\n                columnNumber: 21\n              }, this), typeof claimMessage.payload !== 'undefined' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: `mb-2 col-sm-12 alert alert-${claimMessage.type}`,\n                role: \"alert\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  style: {\n                    whiteSpace: 'pre'\n                  },\n                  children: claimMessage.payload\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 164,\n                  columnNumber: 25\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 163,\n                columnNumber: 23\n              }, this) : '']\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 156,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Footer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 174,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 110,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"RIECeCS+nRDeFGwEcGdN+XBgj+o=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsImxvYWRpbmdNZXNzYWdlIiwic2V0TG9hZGluZ01lc3NhZ2UiLCJjbGFpbU1lc3NhZ2UiLCJzZXRDbGFpbU1lc3NhZ2UiLCJwYXlsb2FkIiwidW5kZWZpbmVkIiwidHlwZSIsImFpcmRyb3AiLCJzZXRBaXJkcm9wIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsInVzZUVmZmVjdCIsImluaXQiLCJnZXRCbG9ja2NoYWluIiwiZSIsImNsYWltVG9rZW5zIiwicHJldmVudERlZmF1bHQiLCJhZGRyZXNzIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlIiwiYXhpb3MiLCJwb3N0IiwiZGF0YSIsIldlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJ0b3RhbEFsbG9jYXRpb24iLCJ0b1N0cmluZyIsImJhc2ljQWxsb2NhdGlvbiIsImJvbnVzQWxsb2NhdGlvbiIsInJlY2VpcHQiLCJtZXRob2RzIiwic2lnbmF0dXJlIiwic2VuZCIsImZyb20iLCJ0cmFuc2FjdGlvbkhhc2giLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Ysc0RBQVEsQ0FBQywrQkFBRCxDQUFwRDtBQUNBLFFBQU07QUFBQSxPQUFDRyxZQUFEO0FBQUEsT0FBZUM7QUFBZixN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QUFBQTtBQUFBO0FBQUE7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekNGLGVBOERGLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5REU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUFzRUQ7O0dBckt1QlIsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCBnZXRCbG9ja2NoYWluIGZyb20gJy4uL2xpYi9ldGhlcmV1bS5qcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXIuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9lbGVtZW50cy9JbWFnZS5qcyc7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2FkaW5nTWVzc2FnZSwgc2V0TG9hZGluZ01lc3NhZ2VdID0gdXNlU3RhdGUoJ1BsZWFzZSBDb25uZWN0IFlvdXIgTWV0YW1hc2shJyk7XG4gIGNvbnN0IFtjbGFpbU1lc3NhZ2UsIHNldENsYWltTWVzc2FnZV0gPSB1c2VTdGF0ZSh7XG4gICAgcGF5bG9hZDogdW5kZWZpbmVkLFxuICAgIHR5cGU6IHVuZGVmaW5lZFxuICB9KTtcbiAgY29uc3QgW2FpcmRyb3AsIHNldEFpcmRyb3BdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7IFxuICAgICAgICBjb25zdCB7IGFpcmRyb3AsIGFjY291bnRzIH0gPSBhd2FpdCBnZXRCbG9ja2NoYWluKCk7XG4gICAgICAgIHNldEFpcmRyb3AoYWlyZHJvcCk7XG4gICAgICAgIHNldEFjY291bnRzKGFjY291bnRzKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgc2V0TG9hZGluZ01lc3NhZ2UoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpbml0KCk7XG4gIH0sIFtdKTtcblxuXG5cblxuICBjb25zdCBjbGFpbVRva2VucyA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZS50YXJnZXQuZWxlbWVudHNbMF0udmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgc2V0Q2xhaW1NZXNzYWdlKHtcbiAgICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICAgIHBheWxvYWQ6ICdDaGVja2luZyB5b3VyIGFkZHJlc3MgaW4gd2hpdGVsaXN0Li4uJ1xuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICcvYXBpL2F1dGhvcml6YXRpb24nLCBcbiAgICAgICAge1xuICAgICAgICAgIGFkZHJlc3NcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHNldENsYWltTWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICAgICAgcGF5bG9hZDogYFxuICAgICAgICAgIENsYWltaW5nIHRva2VuIGZyb20gQWlyZHJvcCBjb250cmFjdC4uLlxuICAgICAgICAgIEFkZHJlc3M6ICR7cmVzcG9uc2UuZGF0YS5hZGRyZXNzfVxuICAgICAgICAgIFRvdGFsIEFtb3VudDogJHtXZWIzLnV0aWxzLmZyb21XZWkocmVzcG9uc2UuZGF0YS50b3RhbEFsbG9jYXRpb24udG9TdHJpbmcoKSl9IFRJR1NcbiAgICAgICAgICAtPiBCYXNpYzogJHtXZWIzLnV0aWxzLmZyb21XZWkocmVzcG9uc2UuZGF0YS5iYXNpY0FsbG9jYXRpb24udG9TdHJpbmcoKSl9IFRJR1NcbiAgICAgICAgICAtPiBCb251czogJHtXZWIzLnV0aWxzLmZyb21XZWkocmVzcG9uc2UuZGF0YS5ib251c0FsbG9jYXRpb24udG9TdHJpbmcoKSl9IFRJR1NcbiAgICAgICAgYFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgYWlyZHJvcFxuICAgICAgICAubWV0aG9kc1xuICAgICAgICAuY2xhaW1Ub2tlbnMoXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5hZGRyZXNzLCBcbiAgICAgICAgICByZXNwb25zZS5kYXRhLnRvdGFsQWxsb2NhdGlvbi50b1N0cmluZygpLFxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEuc2lnbmF0dXJlXG4gICAgICAgIClcbiAgICAgICAgLnNlbmQoe2Zyb206IGFjY291bnRzWzBdfSk7XG4gICAgICBzZXRDbGFpbU1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAncHJpbWFyeScsXG4gICAgICAgIHBheWxvYWQ6IGBBaXJkcm9wIHN1Y2Nlc3MhXG5Ub2tlbnMgc3VjY2Vzc2Z1bGx5IGluIHR4ICR7cmVjZWlwdC50cmFuc2FjdGlvbkhhc2h9IFxuQWRkcmVzczogJHtyZXNwb25zZS5kYXRhLmFkZHJlc3N9XG5Ub3RhbCBBbW91bnQ6ICR7V2ViMy51dGlscy5mcm9tV2VpKHJlc3BvbnNlLmRhdGEudG90YWxBbGxvY2F0aW9uLnRvU3RyaW5nKCkpfSBUSUdTXG4tPiBCYXNpYzogJHtXZWIzLnV0aWxzLmZyb21XZWkocmVzcG9uc2UuZGF0YS5iYXNpY0FsbG9jYXRpb24udG9TdHJpbmcoKSl9IFRJR1Ncbi0+IEJvbnVzOiAke1dlYjMudXRpbHMuZnJvbVdlaShyZXNwb25zZS5kYXRhLmJvbnVzQWxsb2NhdGlvbi50b1N0cmluZygpKX0gVElHU1xuICAgICAgICBgXG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGlmKGUubWVzc2FnZSA9PT0gJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDAxJykge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBzZXRDbGFpbU1lc3NhZ2Uoe1xuICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgIHBheWxvYWQ6IGBBaXJkcm9wIGZhaWxlZCBSZWFzb246XG5BZGRyZXNzIG5vdCByZWdpc3RlcmVkYFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0Q2xhaW1NZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgIHBheWxvYWQ6IGBBaXJkcm9wIGZhaWxlZCBSZWFzb246XG5BaXJkcm9wIGFscmVhZHkgc2VudCB0byAke2FkZHJlc3N9YFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG5cblxuXG5cblxuXG5cblxuICByZXR1cm4gKFxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5LXdyYXAnPlxuICAgICAgPEhlYWRlciBuYXZQb3NpdGlvbj1cInJpZ2h0XCIgY2xhc3NOYW1lPVwicmV2ZWFsLWZyb20tYm90dG9tIGlzLXJldmVhbGVkXCIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nc2l0ZS1jb250ZW50Jz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZXMtc3BsaXQgc2VjdGlvbiBpbGx1c3RyYXRpb24tc2VjdGlvbi0wMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBjYXJkLWdyYXlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIteHMgY2VudGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDI+VHJhZGluZ1RpZ2VycyBBaXJkcm9wPC9oMj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly90cmFkaW5nLXRpZ2Vycy5jb20vYXNzZXRzL2ltZy9haXJkcm9wLWljb24uc3ZnXCIgd2lkdGg9ezE0MH0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgaGFzLXRvcC1kaXZpZGVyXCI+SG93IHRvIEdldCBpbiB0aGUgQWlyZHJvcD88L2g1PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+U3RlcCAxOiBKb2luIG91ciA8YSB0YXJnZXQ9XCJfYmxhbmtcImhyZWY9XCJodHRwczovL3QubWUvdHJhZGluZ3RpZ2Vyc2NoYXRcIj5UZWxlZ3JhbSBjaGF0ITwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlN0ZXAgMjogV3JpdGUgaW4gdGhlIGNoYXQgXCIvSm9pbkFpcmRyb3AgMHgzYTBFNEZjMUZmMTFiLi4uICh5b3VyIEJTQyBBZGRyZXNzISlcIjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DbGFpbSB5b3VyIHRva2VucyE8L2g1PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5BdHRlbnRpb246IFRob3NlIHdobyBoYXZlIGFscmVhZHkgcmVnaXN0ZXJlZCBvbiB0aGUgb2xkIEFpcmRyb3AgcGFnZSBjYW4gbm93IGNsYWltIHRoZWlyIHRva2VucyBoZXJlLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlN0ZXAgMTogTWFrZSBzdXJlIHlvdSBoYXZlIGNvbmZpZ3VyZWQgdGhlIEJTQyBuZXR3b3JrIHdpdGggTWV0YW1hc2s8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+U3RlcCAyOiBFbnRlciB5b3VyIEJTQyBhZGRyZXNzIGFuZCBjbGljayBvbiBDbGFpbSBUSUdTLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5TdGVwIDM6IENvbmZpcm0gdGhlIHRyYW5zYWN0aW9uIHRvIGNsYWltIHlvdXIgVElHUyB0b2tlbnMuIFRoaXMgd2lsbCBzZW5kIGEgdHJhbnNhY3Rpb24gdG8gdGhlIEFpcmRyb3Agc21hcnQgY29udHJhY3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlcy1zcGxpdCBzZWN0aW9uIGlsbHVzdHJhdGlvbi1zZWN0aW9uLTAxXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbi1pbm5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZ3JheVwiPntsb2FkaW5nTWVzc2FnZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIHtsb2FkaW5nID8gbnVsbCA6IChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVzdGltb25pYWwgc2VjdGlvbiBpbGx1c3RyYXRpb24tc2VjdGlvbi0wMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1pbm5lciBcIj5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lIGNhcmQtZ3JheVwiIG9uU3VibWl0PXtlID0+IGNsYWltVG9rZW5zKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTIgbXItc20tMiBjb2wtc20tMTJcIiBwbGFjZWhvbGRlcj1cIkJTQyBBZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidXR0b24tcHJpbWFyeSBtYi0yIGNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIENsYWltIFRJR1NcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgY2xhaW1NZXNzYWdlLnBheWxvYWQgIT09ICd1bmRlZmluZWQnID8gIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1iLTIgY29sLXNtLTEyIGFsZXJ0IGFsZXJ0LSR7Y2xhaW1NZXNzYWdlLnR5cGV9YH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAncHJlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NsYWltTWVzc2FnZS5wYXlsb2FkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICl9XG4gICAgPEZvb3RlciAvPlxuICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})