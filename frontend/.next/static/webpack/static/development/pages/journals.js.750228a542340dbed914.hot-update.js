webpackHotUpdate("static\\development\\pages\\journals.js",{

/***/ "./pages/journals/index.js":
/*!*********************************!*\
  !*** ./pages/journals/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _actions_journal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/journal */ "./actions/journal.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Journal_SingleJournal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Journal/SingleJournal */ "./components/Journal/SingleJournal.js");

var _jsxFileName = "C:\\Users\\ducp1\\Desktop\\journalProject\\frontend\\pages\\journals\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
//build-in component for sticking elements to 'head' of the page







 //need to write a metatitle and meta description,opengraph title descrip

var Journal = function Journal(_ref) {
  var journals = _ref.journals,
      categories = _ref.categories,
      tags = _ref.tags,
      journalTotal = _ref.journalTotal,
      journalLimit = _ref.journalLimit,
      journalSkip = _ref.journalSkip;

  //keeping track of journal limit,skip and size
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(journalLimit),
      limit = _useState[0],
      setLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(journalSkip),
      skip = _useState2[0],
      setSkip = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(journalTotal),
      size = _useState3[0],
      setSize = _useState3[1]; //loaded blogs are kept tracked


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      loadedJournals = _useState4[0],
      setloadedJournals = _useState4[1]; //existed blogs will be skipped


  var loadMoreJournals = function loadMoreJournals() {
    //skip existing journals
    var toSkip = skip + limit;
    Object(_actions_journal__WEBPACK_IMPORTED_MODULE_4__["listJournals"])(toSkip, limit).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setloadedJournals([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(loadedJournals), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.journals)));
        setSkip(toSkip);
        setSize(data.size);
      }
    });
  };

  var loadMoreButton = function loadMoreButton() {
    return size > 0 && size >= limit && __jsx("div", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("button", {
      onClick: loadMoreJournals,
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Load More"));
  };

  var showAllCategories = function showAllCategories() {
    return categories.map(function (category, index) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: index,
        href: "/categories/".concat(category.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary mr-1 ml-1 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, category.name));
    });
  }; //default journal


  var showAllJournals = function showAllJournals() {
    return journals.map(function (journal, index) {
      return __jsx("article", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(_components_Journal_SingleJournal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        journal: journal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }));
    });
  }; //show more journals from state


  var showMoreJournals = function showMoreJournals() {
    return loadedJournals.map(function (journal, index) {
      return __jsx("article", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx(_components_Journal_SingleJournal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        journal: journal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12 pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("h1", {
    className: "display-4 font-weight-bold text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Journals")), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "display-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Journal Categories: ", showAllCategories(), " ")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }))), __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, showAllJournals(), showMoreJournals(), loadMoreButton()))))));
}; //using lifecycle method
//request sent to backend


Journal.getInitialProps = function () {
  var skip = 0;
  var limit = 2;
  return Object(_actions_journal__WEBPACK_IMPORTED_MODULE_4__["listJournals"])(skip, limit).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      //return properties from response
      //props can be passed to funtion to be rendered
      return {
        journals: data.journals,
        categories: data.categories,
        tags: data.tags,
        journalTotal: data.size,
        journalLimit: limit,
        journalSkip: skip
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Journal); //getInitialProps: server-side rendered method. Can only be used on pages, not in the components
//server side render the page

/***/ })

})
//# sourceMappingURL=journals.js.750228a542340dbed914.hot-update.js.map