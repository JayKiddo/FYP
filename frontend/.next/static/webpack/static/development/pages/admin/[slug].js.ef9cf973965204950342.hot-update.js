webpackHotUpdate("static\\development\\pages\\admin\\[slug].js",{

/***/ "./components/Journal/AmendJournal.js":
/*!********************************************!*\
  !*** ./components/Journal/AmendJournal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_handleCookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/handleCookie */ "./actions/handleCookie.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _actions_journal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/journal */ "./actions/journal.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../config */ "./config.js");








var _jsxFileName = "D:\\journalProject\\frontend\\components\\Journal\\AmendJournal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




 //use router,export component with router






 //this modules will be imported dynamically

var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_15___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ['react-quill']
  }
}); //making sure that react quill only runs in frontend

var AmendJournal = function AmendJournal(_ref) {
  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      categories = _useState[0],
      setCategories = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      tags = _useState2[0],
      setTags = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      checkedCategory = _useState3[0],
      setCheckedCategory = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      checkedTag = _useState4[0],
      setCheckedTag = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      content = _useState5[0],
      setContent = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    error: '',
    success: '',
    formData: '',
    title: ''
  }),
      values = _useState6[0],
      setValues = _useState6[1];

  var error = values.error,
      success = values.success,
      formData = values.formData,
      title = values.title;
  var token = Object(_actions_handleCookie__WEBPACK_IMPORTED_MODULE_11__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    setValues(_objectSpread({}, values, {
      formData: new FormData()
    }));
    loadJournal();
    loadCategories();
    loadTags();
  }, [router]);

  var loadJournal = function loadJournal() {
    var slug = router.query.slug;

    if (slug) {
      Object(_actions_journal__WEBPACK_IMPORTED_MODULE_14__["readJournal"])(slug).then(function (data) {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues(_objectSpread({}, values, {
            title: data.title
          }));
          setContent(data.content);
          loadCheckedCategories(data.categories);
          loadCheckedTags(data.tags);
        }
      });
    }
  };

  var loadCategories = function loadCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_12__["listCategory"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        setCategories(data);
      }
    });
  };

  var loadTags = function loadTags() {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_13__["listTag"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        setTags(data);
      }
    });
  };

  var loadCheckedCategories = function loadCheckedCategories(categories) {
    var oldCategories = [];
    categories.map(function (category) {
      oldCategories.push(category._id);
    });
    console.log(oldCategories);
    setCheckedCategory(oldCategories);
  };

  var loadCheckedTags = function loadCheckedTags(tags) {
    var oldTags = [];
    tags.map(function (tag) {
      oldTags.push(tag._id);
    });
    console.log(oldTags);
    setCheckedTag(oldTags);
  };

  var checkOldCategories = function checkOldCategories(category) {
    var oldCategory = checkedCategory.indexOf(category);

    if (oldCategory === -1) {
      return false;
    } else {
      return true;
    }
  };

  var checkOldTags = function checkOldTags(tag) {
    var oldTag = checkedTag.indexOf(tag);

    if (oldTag === -1) {
      return false;
    } else {
      return true;
    }
  };

  var handleContent = function handleContent(event) {
    setContent(event);
    formData.set('content', event);
  };

  var setData = function setData() {
    formData.set("title", title);
    formData.set("content", content);
    formData.set("categories", checkedCategory);
    formData.set("tags", checkedTag);
  };

  var editJournal = function editJournal(event) {
    event.preventDefault();
    setData();
    Object(_actions_journal__WEBPACK_IMPORTED_MODULE_14__["updateJournal"])(formData, token, router.query.slug).then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread({}, values, {
          title: '',
          success: "Journal titled ".concat(data.title, " is updated")
        }));

        if (Object(_actions_handleCookie__WEBPACK_IMPORTED_MODULE_11__["isLoggedIn"])() && Object(_actions_handleCookie__WEBPACK_IMPORTED_MODULE_11__["isLoggedIn"])().role === 'admin') {
          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace("/admin/".concat(router.query.slug));
        } else if (Object(_actions_handleCookie__WEBPACK_IMPORTED_MODULE_11__["isLoggedIn"])() && Object(_actions_handleCookie__WEBPACK_IMPORTED_MODULE_11__["isLoggedIn"])().role === 'member') {
          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace("/member");
        }
      }
    });
  };

  var handleChange = function handleChange(name) {
    return function (event) {
      var _objectSpread2;

      var value = name === 'photo' ? event.target.files[0] : event.target.value;
      formData.set(name, value);
      setValues(_objectSpread({}, values, (_objectSpread2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_objectSpread2, name, value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_objectSpread2, "formData", formData), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_objectSpread2, "error", ''), _objectSpread2)));
    };
  };

  var handleCheckCategory = function handleCheckCategory(category) {
    return function () {
      setValues(_objectSpread({}, values, {
        error: ''
      })); // return the first index or -1

      var clickedCategory = checkedCategory.indexOf(category);

      var all = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(checkedCategory);

      if (clickedCategory === -1) {
        all.push(category);
      } else {
        all.splice(clickedCategory, 1);
      }

      console.log(all);
      setCheckedCategory(all); //update state

      formData.set('categories', all);
    };
  };

  var handleCheckTag = function handleCheckTag(tag) {
    return function () {
      setValues(_objectSpread({}, values, {
        error: ''
      })); // return the first index or -1

      var clickedTag = checkedTag.indexOf(tag); //finding index of that tag

      console.log(clickedTag);

      var all = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(checkedTag);

      if (clickedTag === -1) {
        //if that tag is not in checkedTag array
        all.push(tag); //push tag
      } else {
        all.splice(clickedTag, 1);
      }

      console.log(all);
      setCheckedTag(all); //update state

      formData.set('tags', all);
    };
  };

  var showCategories = function showCategories() {
    return categories.map(function (category, index) {
      return __jsx("li", {
        key: index,
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, __jsx("input", {
        onChange: handleCheckCategory(category._id),
        checked: checkOldCategories(category._id),
        type: "checkbox",
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), __jsx("label", {
        className: "form-check-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, category.name));
    });
  };

  var showTags = function showTags() {
    return tags.map(function (tag, index) {
      return __jsx("li", {
        key: index,
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, __jsx("input", {
        onChange: handleCheckTag(tag._id),
        checked: checkOldTags(tag._id),
        type: "checkbox",
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), __jsx("label", {
        className: "form-check-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "#", tag.name));
    });
  };

  var showStatus = function showStatus() {
    if (success) {
      return __jsx("div", {
        className: "alert alert-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, success);
    } else if (error) {
      return __jsx("div", {
        className: "alert alert-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, error);
    }
  };

  var updateJournalForm = function updateJournalForm() {
    return __jsx("form", {
      onSubmit: editJournal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, "Title"), __jsx("input", {
      type: "text",
      className: "form-control",
      value: title,
      placeholder: "Write your title here",
      onChange: handleChange('title'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, __jsx(ReactQuill, {
      modules: AmendJournal.modules,
      formats: AmendJournal.formats,
      value: content,
      placeholder: "Write something...",
      onChange: handleContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    })), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary mb-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, "Update")));
  };

  return __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, showStatus()), __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, content && __jsx("img", {
    style: {
      width: '100%',
      height: 'auto'
    },
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_16__["API"], "/journal/photo/").concat(router.query.slug),
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, updateJournalForm()), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx("div", {
    className: "form-group pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "Featured Image"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }), __jsx("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, "Maximum Size: 1MB"), __jsx("label", {
    className: "btn btn-outline-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "Change Featured Image"), __jsx("input", {
    onChange: handleChange('photo'),
    type: "file",
    accept: "images/*",
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }))), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, "Categories"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }), __jsx("ul", {
    style: {
      maxHeight: '100px',
      overflowY: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, showCategories()), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, "Tags"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }), __jsx("ul", {
    style: {
      map: '100px',
      overflowY: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, showTags()))));
};

AmendJournal.modules = {
  toolbar: [[{
    header: [1, 2, 3, 4, 5, 6]
  }, {
    font: []
  }], [{
    size: []
  }], ['bold', 'italic', 'underline', 'strike'], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], ['link', 'image', 'video'], ['clean'], ['code-block']]
};
AmendJournal.formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link', 'image', 'video', 'code-block'];
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(AmendJournal));

/***/ })

})
//# sourceMappingURL=[slug].js.ef9cf973965204950342.hot-update.js.map