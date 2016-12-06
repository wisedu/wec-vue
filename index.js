/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _searchDate = __webpack_require__(1);

	var _searchDate2 = _interopRequireDefault(_searchDate);

	var _searchLabels = __webpack_require__(7);

	var _searchLabels2 = _interopRequireDefault(_searchLabels);

	var _navPanel = __webpack_require__(10);

	var _navPanel2 = _interopRequireDefault(_navPanel);

	var _editTree = __webpack_require__(17);

	var _editTree2 = _interopRequireDefault(_editTree);

	var _widgetBase = __webpack_require__(100);

	var _widgetBase2 = _interopRequireDefault(_widgetBase);

	var _widgetLoader = __webpack_require__(101);

	var _widgetLoader2 = _interopRequireDefault(_widgetLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    SearchDate: _searchDate2.default,
	    SearchLabels: _searchLabels2.default,
	    NavPanel: _navPanel2.default,
	    EditTree: _editTree2.default,
	    WidgetBase: _widgetBase2.default,
	    WidgetLoader: _widgetLoader2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(2)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] search-date\\searchDate.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-530f8e28/searchDate.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _bhTimepicker = __webpack_require__(3);

	var _bhTimepicker2 = _interopRequireDefault(_bhTimepicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        title: String
	    },
	    methods: {
	        getValue: function getValue() {
	            return this.$refs.tp.getValue();
	        }
	    },
	    components: { BhTimepicker: _bhTimepicker2.default }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(4)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\bh-vue\\bh-timepicker\\bhTimepicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(5)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7ea09233/bhTimepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _init = function _init(vm) {
	    var opts = {
	        defaultType: vm.type,
	        format: vm.format,
	        isDisable: vm.disabled,
	        ready: function ready() {
	            vm.$dispatch('ready');
	        },
	        selectedTime: function selectedTime(startTimeStr, endTimeStr) {
	            vm.$dispatch('change', startTimeStr, endTimeStr);
	        }
	    };

	    if (vm.max || vm.min) {
	        opts.range = {
	            max: vm.max,
	            min: vm.min
	        };
	    }

	    if (vm.start || vm.end) {
	        opts.time = {
	            start: vm.start,
	            end: vm.end
	        };
	    }

	    $(vm.$el).bhTimePicker(opts);
	};

	var _addWatch = function _addWatch(vm) {
	    vm.$watch('start', function (newVal) {
	        vm.setValue({ startTime: newVal });
	    });

	    vm.$watch('end', function (newVal) {
	        vm.setValue({ endTime: newVal });
	    });

	    vm.$watch('disabled', function (newVal) {
	        vm.setDisable(newVal);
	    });
	};

	exports.default = {
	    props: {
	        format: {
	            default: 'YYYY-MM-DD',
	            type: String
	        },
	        max: Date,
	        min: Date,
	        start: Date,
	        end: Date,
	        disabled: {
	            default: false,
	            type: Boolean
	        },
	        type: {
	            type: String,
	            default: 'all'
	        }
	    },
	    methods: {
	        getValue: function getValue() {
	            return $(this.$el).bhTimePicker('getValue');
	        },
	        setValue: function setValue(data) {
	            return $(this.$el).bhTimePicker('setValue', data);
	        },
	        setDisable: function setDisable(isDisable) {
	            var method = isDisable ? 'setDisable' : 'setEnable';
	            return $(this.$el).bhTimePicker(method);
	        }
	    },
	    ready: function ready() {
	        _init(this);
	        _addWatch(this);
	    }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "\n<div></div>\n";

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"bh-advancedQuery-form-row\">\n    <div class=\"bh-advancedQuery-groupName\">{{title}}：</div>\n    <bh-timepicker v-ref:tp></bh-timepicker>\n</div>\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] search-labels\\searchLabels.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-55bea70c/searchLabels.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});


	var _DEFAULT_TEXTS = {
	    all: '全部',
	    hide: '隐藏',
	    more: '更多'
	};

	exports.default = {
	    data: function data() {
	        return {
	            realDisplay: 0,
	            isMore: false
	        };
	    },

	    props: {
	        current: {
	            default: null,
	            type: Object
	        },
	        nameMember: {
	            default: 'name'
	        },
	        more: {
	            default: false,
	            type: Boolean
	        },
	        display: {
	            default: 5,
	            type: Number
	        },
	        title: String,
	        source: Array,
	        texts: Object
	    },
	    computed: {
	        moreText: function moreText() {
	            var texts = this.displayTexts;
	            return this.isMore ? texts.hide : texts.more;
	        },
	        viewMore: function viewMore() {
	            return this.more && this.source.length > this.display;
	        },
	        shownItems: function shownItems() {
	            if (this.more) {
	                return this.source && this.source.slice(0, this.realDisplay);
	            } else {
	                return this.source;
	            }
	        },
	        displayTexts: function displayTexts() {
	            return $.extend({}, _DEFAULT_TEXTS, this.texts);
	        }
	    },
	    methods: {
	        select: function select(item) {
	            if (this.current === item) {
	                return;
	            }

	            this.current = item;
	            this.$dispatch('change', this.current);
	        },
	        val: function val() {
	            return this.current;
	        },
	        toggleMore: function toggleMore() {
	            this.isMore = !this.isMore;
	            if (this.isMore) {
	                this.showMore();
	            } else {
	                this.hideMore();
	            }
	        },
	        showMore: function showMore() {
	            this.realDisplay = this.source.length;
	        },
	        hideMore: function hideMore() {
	            this.realDisplay = this.display;
	        }
	    },
	    beforeCompile: function beforeCompile() {
	        this.realDisplay = this.display;
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"bh-advancedQuery-form-row\">\n    <div class=\"bh-advancedQuery-groupName\">{{title}}：</div>\n    <div class=\"bh-advancedQuery-groupList bh-label-radio-group\">\n        <div class=\"bh-advancedQuery-groupList-item bh-label-radio\" :class='{\"bh-active\": !current}' @click='select(null)'>{{displayTexts.all}}</div>\n        <div \n            v-for='item in shownItems' \n            class=\"bh-advancedQuery-groupList-item bh-label-radio\"\n            :class='{\"bh-active\": item === current}'\n            @click='select(item)'>\n            {{item[nameMember]}}\n        </div>\n        <div \n            v-if='viewMore' \n            class=\"bh-advancedQuery-groupList-item\"\n            @click='toggleMore'>\n            {{moreText}}\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(11)
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] nav-panel\\navPanel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ad407ee0/navPanel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.23.1@css-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-ad407ee0&scoped=true!./../node_modules/.2.2.3@less-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./navPanel.vue", function() {
				var newContent = require("!!./../node_modules/.0.23.1@css-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-ad407ee0&scoped=true!./../node_modules/.2.2.3@less-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./navPanel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".nolist[_v-ad407ee0] {\n  list-style: none;\n  display: inline-block;\n}\n.nav-panel[_v-ad407ee0] {\n  box-shadow: 0 1px 3px 2px rgba(160, 160, 160, 0.2);\n  background-color: #fff;\n  line-height: 4rem;\n}\n.nav-panel .title[_v-ad407ee0] {\n  display: inline-block;\n  font-size: 2rem;\n  line-height: 2rem;\n}\n.nav-panel .nav-list[_v-ad407ee0] {\n  display: inline-block;\n}\n.nav-panel .nav-list ul[_v-ad407ee0] {\n  list-style: none;\n  display: inline-block;\n}\n.nav-panel .nav-list ul li[_v-ad407ee0] {\n  list-style: none;\n  display: inline-block;\n}\n.nav-panel .nav-list ul li a[_v-ad407ee0] {\n  color: #333;\n  cursor: pointer;\n  display: inline-block;\n  box-sizing: border-box;\n  font-size: 1.5rem;\n  border-bottom: 2px solid transparent;\n}\n.nav-panel .nav-list ul li a[_v-ad407ee0]:hover,\n.nav-panel .nav-list ul li a.active[_v-ad407ee0] {\n  border-color: #333;\n  font-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _activeMenu = function _activeMenu(vm) {
	    var transition = vm.$router._currentTransition;
	    var path = transition.to.path;
	    var menus = vm.menus;
	    for (var i = 0, length = menus.length; i < length; i++) {
	        var menu = menus[i];
	        var url = menu.url;
	        if (path === url) {
	            vm.current = menu.name;
	            break;
	        }
	    }
	};

	exports.default = {
	    data: function data() {
	        return {
	            current: null
	        };
	    },
	    props: {
	        title: String,
	        menus: {
	            type: Array,
	            default: []
	        }
	    },
	    created: function created() {
	        var _this = this;

	        this.$router.afterEach(function (transition) {
	            if (_this.menus.length === 0) {
	                return;
	            }

	            _activeMenu(_this);
	        });

	        this.$watch('menus', function (newVal) {
	            _activeMenu(_this);
	        });
	    }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"nav-panel bh-ph-16\" _v-ad407ee0=\"\">\n    <div class=\"title bh-mr-24 bh-color-grey-3\" v-if=\"title &amp;&amp; title.length > 0\" _v-ad407ee0=\"\"> <i class=\"icon iconfont icon-star bh-color-grey-3\" _v-ad407ee0=\"\"></i> {{title}}</div>\n    <div class=\"nav-list\" _v-ad407ee0=\"\">\n        <ul _v-ad407ee0=\"\">\n            <li v-for=\"menu in menus\" _v-ad407ee0=\"\">\n                <a v-link=\"menu.url\" class=\"bh-ph-24\" :class=\"{&quot;active&quot;: current == menu.name}\" _v-ad407ee0=\"\">{{menu.name}}</a>\n            </li>\n        </ul>\n    </div>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] edit-tree\\editTree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(99)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-91809c20/editTree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.23.1@css-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../node_modules/.2.2.3@less-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./editTree.vue", function() {
				var newContent = require("!!./../node_modules/.0.23.1@css-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../node_modules/.2.2.3@less-loader/index.js!./../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./editTree.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".menu-tree-node-edit {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 0;\n  right: 0;\n  height: 30px;\n  background-color: #fff;\n}\n.menu-tree-node-edit input {\n  vertical-align: middle;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.menu-tree-node-edit .iconfont {\n  cursor: pointer;\n  font-size: 2.4rem;\n  vertical-align: middle;\n}\ndiv.wec-school-edit-tree ul.jqx-tree-dropdown-root {\n  width: auto !important;\n  padding: 0 !important;\n}\ndiv.wec-school-edit-tree ul {\n  margin: 0px;\n  padding-left: 32px;\n}\ndiv.wec-school-edit-tree ul li.jqx-tree-item-li {\n  cursor: pointer;\n  line-height: 22px !important;\n  margin-left: 0 !important;\n  padding: 0 !important;\n}\ndiv.wec-school-edit-tree ul li.jqx-tree-item-li span {\n  margin-top: 7px !important;\n}\ndiv.wec-school-edit-tree ul li.jqx-tree-item-li div.jqx-tree-item {\n  background-color: inherit !important;\n  display: block !important;\n  font-weight: normal;\n}\ndiv.wec-school-edit-tree ul li.jqx-tree-item-li div.opt-panel a.opt-btn {\n  color: #fff !important;\n}\ndiv.wec-school-edit-tree ul li.edit-tree-haschild > div.jqx-tree-item-selected,\ndiv.wec-school-edit-tree ul li.edit-tree-haschild > div.jqx-tree-item-hover {\n  color: #3e50b4 !important;\n  background-color: #fff !important;\n  font-weight: bold;\n}\ndiv.wec-school-edit-tree ul li.edit-tree-leaf-child {\n  background-color: #fff !important;\n  font-weight: normal;\n  color: #000;\n}\ndiv.wec-school-edit-tree ul li.edit-tree-leaf-child.edit-tree-li-select,\ndiv.wec-school-edit-tree ul li.edit-tree-leaf-child:hover {\n  color: #fff !important;\n  background-color: #3e50b4 !important;\n  font-weight: normal;\n}\n.wec-school-domain-item-flag {\n  width: 9px;\n  height: 9px;\n  background-image: url(" + __webpack_require__(20) + ");\n  display: inline-block;\n  margin-left: 5px;\n}\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACfSURBVChTY0xLS9vPwMDgAMQM////fwCkWmfPnj0HxIcBJiB2AEo2MjIyzgBiBSCeDdRYAJGGAJAiEOAHKuSAskGgH1khSNEToG6QQAJYBAHgCpmNjIw+AxX5gYUxgYexsfFH5nNAAGKABCDiqADoDBNmEOPs2bMnsCkEKvgCtMUXrAgE0BVCFXjOmjXrCFwRCMAUgqwAmQBSwMDAwAAAzU9ExeQKafsAAAAASUVORK5CYII="

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(22);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _bhTree = __webpack_require__(90);

	var _bhTree2 = _interopRequireDefault(_bhTree);

	var _pageUtil = __webpack_require__(95);

	var _pageUtil2 = _interopRequireDefault(_pageUtil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MENU_NAME_MAX_LEN = 24;
	var OPTS = {
	    edit: {
	        title: '编辑',
	        name: 'edit'
	    },
	    del: {
	        title: '删除',
	        name: 'del'
	    }
	};

	var _editName = function _editName(vm, item) {
	    if (!vm.doEdit) {
	        console.warn('未指定编辑时的操作函数(doEdit)');
	        return;
	    }

	    var elem = $(item.element);
	    var elemPos = elem.offset();
	    var label = item.label;
	    var root = $(vm.$els.treeview);
	    var rootPos = root.offset();
	    var itemData = _getNodeData(vm, item);
	    var isNew = itemData === null || itemData.isNew;

	    var editPanel = $('<div>').addClass('menu-tree-node-edit').css({
	        top: elemPos.top - rootPos.top,
	        left: elemPos.left - rootPos.left
	    });

	    $('<input>').attr('maxlength', MENU_NAME_MAX_LEN).addClass('bh-mr-4 ').val(label).appendTo(editPanel);
	    $('<i class="icon iconfont icon-checkcircle bh-color-primary"></i>').appendTo(editPanel);
	    $('<i class="icon iconfont icon-cancel bh-color-grey-3"></i>').appendTo(editPanel);

	    var hideEditPanel = function hideEditPanel() {
	        editPanel.off('click');
	        editPanel.remove();
	    };

	    editPanel.on('click', '.icon-checkcircle', function (event) {
	        var target = $(event.target);
	        var newName = target.prev('input').val();

	        vm.doEdit($.extend({
	            isNew: isNew
	        }, item, itemData), newName).then(function () {
	            hideEditPanel();
	        });
	    });

	    editPanel.on('click', '.icon-cancel', function (event) {
	        if (isNew) {
	            var tree = vm.$refs.tree;
	            tree.remove(item);
	        }

	        hideEditPanel();
	    });
	    root.append(editPanel);
	};

	var _del = function _del(vm, item) {
	    if (!vm.doDel) {
	        console.warn('未指定删除时的操作函数(doDel)');
	        return;
	    }

	    var tree = vm.$refs.tree;

	    _pageUtil2.default.confirm('确认删除此标签？', function () {
	        vm.doDel(item).then(function () {
	            _pageUtil2.default.tip('删除成功', 'success');
	            tree.remove(item);
	            var allItems = tree.getAll();
	            if (allItems && allItems.length > 0) {
	                tree.selectItem(allItems[0]);
	            }
	        }, function () {
	            _pageUtil2.default.tip('删除失败', 'danger');
	        });
	    });
	};

	var _getFirstNode = function _getFirstNode(tree, parent) {
	    if (!parent) {
	        var treeItems = tree.getAll();
	        return treeItems && treeItems[0];
	    } else {
	        if (parent.hasItems) {
	            return parent.nextItem;
	        } else {
	            return null;
	        }
	    }
	};

	var _addFirstNode = function _addFirstNode(vm, nodeData) {
	    var tree = vm.$refs.tree;
	    var firstNode = _getFirstNode(tree);

	    tree.addBefore(nodeData, firstNode && firstNode.element);
	};

	var _addNode = function _addNode(vm, nodeData, parent) {
	    var tree = vm.$refs.tree;
	    if (!parent) {
	        _addFirstNode(vm, nodeData);
	        _editName(vm, _getFirstNode(tree));
	    } else {
	        var subNode = _getFirstNode(tree, parent);
	        if (subNode) {
	            tree.addBefore(nodeData, subNode);
	        } else {
	            tree.addTo(nodeData, parent.element);
	        }

	        var subFirst = _getFirstNode(tree, parent);
	        vm.cachedData[subFirst.id] = nodeData;

	        _editName(vm, subFirst);
	    }
	};

	var _optConvert = function _optConvert(opts) {
	    if (!opts || opts.length === 0) {
	        return null;
	    }

	    return opts.map(function (item) {
	        if (OPTS[item]) {
	            return OPTS[item];
	        } else {
	            return item;
	        }
	    });
	};

	var _getNodeData = function _getNodeData(vm, item) {
	    var source = vm.source || [];
	    var id = item.id;
	    for (var i = 0, len = source.length; i < len; i++) {
	        var data = source[i];
	        if (data.id === id) {
	            return $.extend(data, { isNew: false }, { level: item.level });
	        }
	    }

	    if (vm.cachedData[id]) {
	        return $.extend(vm.cachedData[id], { isNew: true });
	    }

	    return null;
	};

	var _addClassToParentNode = function _addClassToParentNode() {
	    $('.wec-school-edit-tree li:has(.jqx-tree-dropdown)').addClass('edit-tree-haschild');
	    $('.wec-school-edit-tree li:not(:has(.jqx-tree-dropdown))').addClass('edit-tree-leaf-child');
	};

	exports.default = {
	    data: function data() {
	        return {
	            cachedData: {}
	        };
	    },
	    props: {
	        source: {
	            type: Array,
	            default: []
	        },
	        fields: Object,
	        operations: [Array, Function],
	        doEdit: Function,
	        doDel: Function,
	        defaultSelect: {
	            type: Boolean,
	            default: false
	        }
	    },
	    computed: {
	        opts: function opts() {
	            var _this = this;

	            var operations = this.operations;
	            if (!operations) {
	                return null;
	            }

	            if (typeof operations === 'function') {
	                var _ret = function () {
	                    var vm = _this;
	                    return {
	                        v: function v(item) {
	                            var opts = operations(_getNodeData(vm, item)) || [];
	                            return _optConvert(opts);
	                        }
	                    };
	                }();

	                if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	            }

	            return _optConvert(operations);
	        }
	    },
	    methods: {
	        editName: function editName(item) {
	            _editName(this, item);
	        },
	        del: function del(item) {
	            _del(this, item);
	        },
	        getSelectedItem: function getSelectedItem() {
	            return this.$refs.tree.getSelectedItem();
	        },
	        newNode: function newNode(nodeData, parent) {
	            _addNode(this, nodeData, parent);
	        },
	        selectNode: function selectNode(item) {
	            this.$dispatch('select', _getNodeData(this, item));
	        }
	    },
	    beforeDestory: function beforeDestory() {
	        this.cachedData = {};
	        this.doEdit = null;
	        this.doDel = null;
	    },

	    components: { BhTree: _bhTree2.default },
	    ready: function ready() {
	        $('.wec-school-edit-tree').on('mouseover', '.wec-school-domain-item-flag', function (e) {
	            var desc = $(e.target).attr("taginfo");
	            _pageUtil2.default.showPopover(e.target, desc, { showCloseButton: false });
	        });

	        $('.wec-school-edit-tree').on('mouseout', '.wec-school-domain-item-flag', function (e) {
	            _pageUtil2.default.hidePopover();
	        });
	    },

	    events: {
	        'initialized': function initialized() {
	            _addClassToParentNode();
	        }
	    }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(23);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(74);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	__webpack_require__(69);
	module.exports = __webpack_require__(73).f('iterator');

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(26)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(29)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(28);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(30)
	  , $export        = __webpack_require__(31)
	  , redefine       = __webpack_require__(46)
	  , hide           = __webpack_require__(36)
	  , has            = __webpack_require__(47)
	  , Iterators      = __webpack_require__(48)
	  , $iterCreate    = __webpack_require__(49)
	  , setToStringTag = __webpack_require__(65)
	  , getPrototypeOf = __webpack_require__(67)
	  , ITERATOR       = __webpack_require__(66)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(32)
	  , core      = __webpack_require__(33)
	  , ctx       = __webpack_require__(34)
	  , hide      = __webpack_require__(36)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 32 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 33 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(35);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(37)
	  , createDesc = __webpack_require__(45);
	module.exports = __webpack_require__(41) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(38)
	  , IE8_DOM_DEFINE = __webpack_require__(40)
	  , toPrimitive    = __webpack_require__(44)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(41) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(39);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(41) && !__webpack_require__(42)(function(){
	  return Object.defineProperty(__webpack_require__(43)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(42)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(39)
	  , document = __webpack_require__(32).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(39);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(36);

/***/ },
/* 47 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(50)
	  , descriptor     = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(65)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(36)(IteratorPrototype, __webpack_require__(66)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(38)
	  , dPs         = __webpack_require__(51)
	  , enumBugKeys = __webpack_require__(63)
	  , IE_PROTO    = __webpack_require__(60)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(43)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(64).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(37)
	  , anObject = __webpack_require__(38)
	  , getKeys  = __webpack_require__(52);

	module.exports = __webpack_require__(41) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(53)
	  , enumBugKeys = __webpack_require__(63);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(47)
	  , toIObject    = __webpack_require__(54)
	  , arrayIndexOf = __webpack_require__(57)(false)
	  , IE_PROTO     = __webpack_require__(60)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(55)
	  , defined = __webpack_require__(28);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(56);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(54)
	  , toLength  = __webpack_require__(58)
	  , toIndex   = __webpack_require__(59);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(61)('keys')
	  , uid    = __webpack_require__(62);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(32)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32).document && document.documentElement;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(37).f
	  , has = __webpack_require__(47)
	  , TAG = __webpack_require__(66)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(61)('wks')
	  , uid        = __webpack_require__(62)
	  , Symbol     = __webpack_require__(32).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(47)
	  , toObject    = __webpack_require__(68)
	  , IE_PROTO    = __webpack_require__(60)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(28);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	var global        = __webpack_require__(32)
	  , hide          = __webpack_require__(36)
	  , Iterators     = __webpack_require__(48)
	  , TO_STRING_TAG = __webpack_require__(66)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(71)
	  , step             = __webpack_require__(72)
	  , Iterators        = __webpack_require__(48)
	  , toIObject        = __webpack_require__(54);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(29)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(66);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(76);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	module.exports = __webpack_require__(33).Symbol;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(32)
	  , has            = __webpack_require__(47)
	  , DESCRIPTORS    = __webpack_require__(41)
	  , $export        = __webpack_require__(31)
	  , redefine       = __webpack_require__(46)
	  , META           = __webpack_require__(77).KEY
	  , $fails         = __webpack_require__(42)
	  , shared         = __webpack_require__(61)
	  , setToStringTag = __webpack_require__(65)
	  , uid            = __webpack_require__(62)
	  , wks            = __webpack_require__(66)
	  , wksExt         = __webpack_require__(73)
	  , wksDefine      = __webpack_require__(78)
	  , keyOf          = __webpack_require__(79)
	  , enumKeys       = __webpack_require__(80)
	  , isArray        = __webpack_require__(83)
	  , anObject       = __webpack_require__(38)
	  , toIObject      = __webpack_require__(54)
	  , toPrimitive    = __webpack_require__(44)
	  , createDesc     = __webpack_require__(45)
	  , _create        = __webpack_require__(50)
	  , gOPNExt        = __webpack_require__(84)
	  , $GOPD          = __webpack_require__(86)
	  , $DP            = __webpack_require__(37)
	  , $keys          = __webpack_require__(52)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(85).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(82).f  = $propertyIsEnumerable;
	  __webpack_require__(81).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(30)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(36)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(62)('meta')
	  , isObject = __webpack_require__(39)
	  , has      = __webpack_require__(47)
	  , setDesc  = __webpack_require__(37).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(42)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(32)
	  , core           = __webpack_require__(33)
	  , LIBRARY        = __webpack_require__(30)
	  , wksExt         = __webpack_require__(73)
	  , defineProperty = __webpack_require__(37).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(52)
	  , toIObject = __webpack_require__(54);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(52)
	  , gOPS    = __webpack_require__(81)
	  , pIE     = __webpack_require__(82);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 82 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(56);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(54)
	  , gOPN      = __webpack_require__(85).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(53)
	  , hiddenKeys = __webpack_require__(63).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(82)
	  , createDesc     = __webpack_require__(45)
	  , toIObject      = __webpack_require__(54)
	  , toPrimitive    = __webpack_require__(44)
	  , has            = __webpack_require__(47)
	  , IE8_DOM_DEFINE = __webpack_require__(40)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(41) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78)('asyncIterator');

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78)('observable');

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(91)
	__vue_script__ = __webpack_require__(93)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules\\bh-vue\\bh-tree\\bhTree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(94)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-200c8793/bhTree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../.0.23.1@css-loader/index.js!./../../.8.5.4@vue-loader/lib/style-rewriter.js!./../../.2.2.3@less-loader/index.js!./../../.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./bhTree.vue", function() {
				var newContent = require("!!./../../.0.23.1@css-loader/index.js!./../../.8.5.4@vue-loader/lib/style-rewriter.js!./../../.2.2.3@less-loader/index.js!./../../.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./bhTree.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".jqx-tree.has-opt .jqx-tree-item-li .opt-panel {\n  padding: 3px;\n}\n.jqx-tree.has-opt .jqx-tree-item-li .opt-panel .opt-btn {\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getAll = function _getAll(el) {
	    return el.jqxTree('getItems');
	};
	var _getSelectedItem = function _getSelectedItem(el) {
	    return el.jqxTree('getSelectedItem');
	};

	var getCheckedItems = function getCheckedItems(el) {
	    return el.jqxTree('getCheckedItems');
	};

	var getItem = function getItem(el, element) {
	    return el.jqxTree('getItem', element);
	};

	var selectItem = function selectItem(el, item) {
	    return el.jqxTree('selectItem', item);
	};

	var _checkAll = function _checkAll(el) {
	    return el.jqxTree('checkAll');
	};

	var _uncheckAll = function _uncheckAll(el) {
	    return el.jqxTree('uncheckAll');
	};

	var _addChild = function _addChild(el, child, parent) {
	    if (!child) {
	        console.log('add child failed, invalid inupt');
	        return false;
	    }

	    if (!$.isArray(child)) {
	        child = [child];
	    }

	    $.each(child, function (i, item) {
	        el.jqxTree('addTo', item, parent, false);
	    });

	    el.jqxTree('render');

	    return true;
	};

	var _remove = function _remove(el, item) {
	    if (!item) {
	        console.log('remove item failed, invalid inupt');
	        return false;
	    }

	    if (!$.isArray(item)) {
	        item = [item];
	    }

	    $.each(item, function (i, node) {
	        el.jqxTree('removeItem', node);
	    });

	    el.jqxTree('render');
	};

	var addEvents = function addEvents(vm) {
	    var self = vm;
	    var el = $(self.$el);

	    el.on('select', function (event) {
	        var args = event.args;
	        var item = getItem(el, args.element);

	        self.selectedItem = item;

	        el.find('li').removeClass('edit-tree-li-select');
	        $(item.element).addClass('edit-tree-li-select');
	        self.$dispatch('select', item);
	    });

	    el.on('checkChange', function (event) {
	        var args = event.args;

	        self.checkedItems = getCheckedItems(el);
	        var item = getItem(el, args.element);

	        if (!item) {
	            return;
	        }

	        self.$dispatch('check-change', {
	            item: item,
	            checked: args.checked
	        });
	    });
	};

	var addDefaultSelectEvents = function addDefaultSelectEvents(vm) {
	    var self = vm;
	    var el = $(self.$el);

	    el.on('initialized', function (event) {

	        if (!vm.defaultSelect) {
	            return;
	        }

	        vm.$nextTick(function () {
	            var items = _getAll(el);
	            if (!items.length > 0) {
	                return;
	            }
	            selectItem(el, items[0]);

	            self.selectedItem = items[0];
	            self.$dispatch('select', items[0]);
	            self.$dispatch('initialized');
	        });
	    });
	};

	var _addOperations = function _addOperations(vm) {
	    var operations = vm.operations;
	    if (!operations) {
	        return;
	    }

	    var root = $(vm.$el);
	    root.addClass('has-opt').on('mouseenter', '.jqx-tree-item', function (event) {
	        root.find('.opt-panel').remove();
	        var target = $(event.target);
	        var li = target.parent();
	        li.addClass('edit-tree-item-hover');
	        var item = getItem(root, li[0]);
	        var opts = null;
	        if (typeof operations === 'function') {
	            opts = operations(item) || [];
	        } else {
	            opts = operations;
	        }

	        var rootOffset = root.offset();
	        var liOffset = target.offset();

	        var optHtml = $('<div>').addClass('opt-panel').css({
	            top: liOffset.top - rootOffset.top,
	            right: 0,
	            position: 'absolute'
	        });

	        opts.forEach(function (opt) {
	            $('<a>').text(opt.title).data('action', opt.name).data('item', item).addClass('opt-btn bh-mh-4').appendTo(optHtml);
	        });

	        li.append(optHtml);
	    }).on('mouseleave', '.jqx-tree-item-li', function (event) {
	        root.find('.opt-panel').remove();
	    }).on('click', '.opt-btn', function (event) {
	        var target = $(event.target);
	        vm.$dispatch(target.data('action'), target.data('item'));
	    });
	};

	var _removeOperations = function _removeOperations(vm) {
	    var root = $(vm.$el);
	    root.off('mouseenter').off('mouseleave').off('click');
	    root.find('.opt-panel').remove();
	};

	var createTree = function createTree(vm, options) {
	    _removeOperations(vm);

	    var el = $(vm.$el);
	    vm.jqxObj = el.jqxTree(options);
	    vm.selectedItem = _getSelectedItem(el);
	    vm.checkedItems = getCheckedItems(el);

	    _addOperations(vm);

	    return vm.jqxObj;
	};

	var prepareSource = function prepareSource(vm) {
	    var fields = vm.fields;

	    if ($.isEmptyObject(fields)) {
	        return vm.source;
	    }

	    var params = $.extend({}, vm.defaultFields, fields);

	    var mapper = [];
	    var dataFields = [];
	    $.each(fields, function (key, val) {
	        if ($.isArray(val)) {
	            mapper.push({ name: val[0], map: key });
	            dataFields.push({ name: val[0], type: val[1] });
	        } else {
	            if ($.inArray(val, ['expanded', 'selected']) > -1) {
	                dataFields.push({ name: val, type: 'bool' });
	            } else {
	                dataFields.push({ name: val });
	            }

	            mapper.push({ name: val, map: key });
	        }
	    });

	    var source = {
	        datatype: 'array',
	        id: params.id,
	        datafields: dataFields,
	        localdata: vm.source
	    };
	    var dataAdapter = new $.jqx.dataAdapter(source);
	    dataAdapter.dataBind();
	    var ret = dataAdapter.getRecordsHierarchy(params.id, params.pid, 'items', mapper);

	    mapper = null;
	    source = null;

	    return ret;
	};

	exports.default = {
	    data: function data() {
	        return {
	            jqxObj: null,
	            defaultOpts: {
	                hasThreeStates: false,
	                checkboxes: false
	            },
	            defaultFields: {
	                id: 'id',
	                pid: 'parentid',
	                label: 'label'
	            }
	        };
	    },

	    props: {
	        options: Object,
	        selectedItem: Object,
	        checkedItems: Array,
	        fields: Object,
	        operations: [Array, Function],
	        source: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        defaultSelect: {
	            type: Boolean,
	            default: false
	        }
	    },
	    methods: {
	        getAll: function getAll() {
	            return _getAll($(this.$el));
	        },
	        checkAll: function checkAll() {
	            return _checkAll($(this.$el));
	        },
	        uncheckAll: function uncheckAll() {
	            return _uncheckAll($(this.$el));
	        },
	        addChild: function addChild(child, parent) {
	            return _addChild($(this.$el), child, parent);
	        },
	        addBefore: function addBefore(item, elem) {
	            return $(this.$el).jqxTree('addBefore', item, elem);
	        },
	        addTo: function addTo(item, elem) {
	            return $(this.$el).jqxTree('addTo', item, elem, false);
	        },
	        addAfter: function addAfter(item, elem) {
	            return $(this.$el).jqxTree('addAfter', item, elem);
	        },
	        remove: function remove(item) {
	            return _remove($(this.$el), item);
	        },
	        collapseItem: function collapseItem(item) {
	            return $(this.$el).jqxTree('collapseItem', item);
	        },
	        expandItem: function expandItem(item) {
	            return $(this.$el).jqxTree('expandItem', item);
	        },
	        selectItem: function selectItem(item) {
	            return $(this.$el).jqxTree('selectItem', item);
	        },
	        getSelectedItem: function getSelectedItem() {
	            return _getSelectedItem($(this.$el));
	        },
	        updateItem: function updateItem(item, newItem) {
	            return $(this.$el).jqxTree('updateItem', item, newItem);
	        }
	    },
	    ready: function ready() {
	        var self = this;

	        var options = self.options = $.extend(self.defaultOpts, self.options);
	        options.source = prepareSource(self);

	        createTree(self, options);

	        addEvents(this);

	        self.$watch('source', function (newVal) {
	            createTree(self, { source: prepareSource(self) });
	        });
	    },
	    beforeDestroy: function beforeDestroy() {
	        _removeOperations(this);
	        var el = $(this.$el);
	        el.off('checkChange');
	        el.off('select');
	        el.off('itemClick');
	        el.jqxTree('destroy');
	    },
	    beforeCompile: function beforeCompile() {
	        addDefaultSelectEvents(this);
	    }
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "\n<div></div>\n";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(96);

	exports.default = {
	    /**
	     * 显示普通纸质弹窗，与下面的 showVuePaper 稍有不同
	     * @param  {String} title   标题
	     * @param  {String} content 内容，支持包含vue组件的html字符串
	     * @param  {String} footer  页脚，支持包含vue组件的html字符串
	     * @param  {Function} onReady 渲染完成的回调事件
	     * @param  {Function} onClose 关闭弹框的回调事件
	     */
	    showPaper: function showPaper(title, content, footer, onReady, onClose) {
	        this.showVuePaper(null, title, content, footer, onReady, onClose);
	    },

	    /**
	     * 使用纸质弹窗展示vue组件
	     * @param  {Object} [vm]      当前页面vm，如果为空则不会执行vue.compile
	     * @param  {String} title   标题
	     * @param  {String} content 内容，支持包含vue组件的html字符串
	     * @param  {String} footer  页脚，支持包含vue组件的html字符串
	     * @param  {Function} onReady 渲染完成的回调事件
	     * @param  {Function} onClose 关闭弹框的回调事件
	     */
	    showVuePaper: function showVuePaper(vm, title, content, footer, onReady, onClose) {
	        if (!vm) {
	            console.warn('show vue paper dialog without vm, can use showPaper() instead !');
	        }

	        var opts = {
	            title: title,
	            content: content,
	            ready: function ready($header, $section, $footer, $aside) {
	                if (vm) {
	                    vm.$compile($section[0]); // 重新扫描动态插入的组件

	                    if (footer) {
	                        vm.$compile($footer[0]); // 重新扫描动态插入的组件
	                    }
	                }

	                onReady && onReady($header, $section, $footer, $aside);
	            },

	            close: onClose
	        };

	        if (footer) {
	            opts.footer = footer;
	        }

	        $.bhPaperPileDialog.show(opts);
	    },

	    /**
	     * 隐藏纸质弹窗，
	     * 不过按目前的用法一般是要同时销毁的，因为打开的时候是重新渲染一个新的view
	     */
	    hidePaper: function hidePaper() {
	        $.bhPaperPileDialog.hide();
	        $.bhPaperPileDialog.destroy();
	    },

	    /**
	     * 显示窗口对话框
	     * @param  {String} title   标题
	     * @param  {String} content 内容，支持包含vue组件的html
	     * @param  {Object} [options] 附加参数
	     * @param  {Object} [options.vm] view model对象，当内容包含vue组件时需要传递此对象
	     * @param  {Object[]} [options.btns] 底部按钮
	     * @param  {String} [options.btns.text] 底部按钮文字
	     * @param  {Function} [options.btns.callback] 底部按钮回调函数，返回false则不会默认关闭窗口
	     * @param {Function} [options.created] 创建成功执行的回调
	     * @param {Function} [options.open] 窗口打开时执行的回调
	     * @param {Function} [options.close] 窗口关闭时执行的回调
	     * @param {Boolean} [options.resizable=false] 是否可以resize操作
	     * @param {Boolean} [options.isModal=true] 是否显示为模态框
	     * @param {Number} [options.modalOpacity=0.3] 遮罩透明度
	     * @param {Number} [options.height=auto] 高度
	     * @param {Number} [options.width=500] 宽度
	     * @param {Number} [options.minHeight=300] 最小高度
	     * @param {Number} [options.minWidth=200] 最小宽度
	     * @param {Number} [options.maxHeight=1000] 最大高度
	     * @param {Number} [options.maxWidth=1000] 最大宽度
	     * @param {Boolean} [options.autoOpen=false] 是否自动打开
	     *
	     * @example
	     * <caption>javascript</caption>
	     * pageUtil.showWindow('测试对话框', '<bh-search></bh-search>', {
	     *     vm: this, // this 指向当前页面的 vm, 因为包含bhSearch组件，需要传此参数
	     *     btns: [{
	     *         text: '确认',
	     *         callback () {
	     *             // 点击后不会关闭窗口
	     *             return false;
	     *         }
	     *     }, {
	     *         text: '取消',
	     *         callback () {
	     *             // 默认点击后会关闭窗口
	     *         }
	     *     }],
	     *     close () {
	     *         // 窗口关闭时会触发此处理
	     *     }
	     * }
	     */
	    showWindow: function showWindow(title, content, options) {
	        var opts = $.extend({
	            btns: [],
	            resizable: false,
	            isModal: true,
	            modalOpacity: 0.3,
	            height: 'auto',
	            width: 500,
	            minWidth: 200,
	            minHeight: 300,
	            maxHeight: 1000,
	            maxWidth: 1000,
	            autoOpen: true
	            // inIframe: false
	        }, options);

	        // store and delete custom arguments
	        var created = opts.created;
	        var open = opts.open;
	        var close = opts.close;
	        var btns = opts.btns;
	        var vm = opts.vm;
	        delete opts.created;
	        delete opts.open;
	        delete opts.close;
	        delete opts.btns;
	        delete opts.vm;

	        var hasButton = btns.length > 0;

	        var clsName = hasButton ? 'has-button' : '';

	        var btnsPanel = '';
	        if (hasButton) {
	            (function () {
	                var btnsHtml = '';
	                var index = 0;
	                btns.forEach(function (btn) {
	                    var className = btn.className || 'bh-btn-default';
	                    btnsHtml += '<button class="bh-btn bh-window-btn ' + className + '" data-index=\'' + index++ + '\'>' + btn.text + '</button>';
	                });

	                btnsPanel = '\n                <div class=\'buttons\'>\n                    <hr style="border:none;border-top: 1px solid #efefef;margin-bottom: 10px;">\n                    ' + btnsHtml + '\n                </div>\n            ';
	            })();
	        }

	        var jqDom = $('<div>').addClass('bh-window bh-pageutil-window ' + clsName);
	        jqDom.append('\n            <div class=\'head\'>\n                <h3>' + title + '</h3>\n            </div>\n            <div class=\'content\'>\n                ' + content + '\n                ' + btnsPanel + '\n            </div>\n        ');

	        jqDom.appendTo($('body'));

	        // add event handlers
	        jqDom.on('created', function (event) {
	            var target = event.target;
	            if (vm) {
	                // support vue compile
	                vm.$compile(target);
	            }
	            created && created(target);
	        });

	        jqDom.on('open', function (event) {
	            // let target = event.target;
	            // if (options.vm) { // support vue compile
	            //     options.vm.$compile(target);
	            // }
	            open && open(event.target);
	        });

	        jqDom.on('close', function (event) {
	            close && close(event.target);
	        });
	        // 点击按钮事件触发
	        var self = this;
	        jqDom.on('click', '.bh-window-btn', function (event) {
	            var target = $(event.target);
	            var index = target.data('index');
	            var callback = btns[index].callback;
	            if (!callback || callback(target) !== false) {
	                self.hideWindow();
	            }
	        });

	        jqDom.jqxWindow(opts);
	    },

	    /**
	     * 关闭窗口（默认为销毁窗口，所以每次打开窗口都会重建）
	     */
	    hideWindow: function hideWindow() {
	        var jqDom = $('.bh-pageutil-window');
	        if (jqDom.length > 0) {
	            jqDom.off('click').off('close').off('open').off('created');
	            jqDom.jqxWindow('destroy');
	            jqDom.remove();
	        }
	    },

	    /**
	     * 显示 popover 弹框
	     * @param {Object} target  目标元素，即popover弹出位置的元素，为jquery对象
	     * @param {String} content 内容
	     * @param {Object} [options] 其他参数
	     * @param {String} [options.width=300] 宽度
	     * @param {String} [options.height] 高度
	     * @param {String} [options.autoClose=true] 点击页面其他区域popover是否自动关闭
	     * @param {Boolean} [options.showCloseButton=true] 是否显示关闭按钮
	     * @param {Boolean} [options.isModal=false] 是否有模态遮罩层
	     * @param {Function} [options.ready] 弹出成功回调
	     * @param {Function} [options.beforeClose] 关闭之前的回调
	     * @param {Function} [options.close] 关闭的回调
	     * @param {Object[]} [options.btns] 自定义按钮列表
	     * @param {String} [options.btns.name] 自定义按钮名称，监听事件用
	     * @param {String} [options.btns.title] 自定义按钮显示文字
	     * @param {String} [options.btns.callback] 自定义按钮回调，若返回false则不关闭弹框
	     */
	    showPopover: function showPopover(target, content, options) {
	        var opts = $.extend({
	            selector: target,
	            content: content
	        }, options);

	        var btns = opts.btns;
	        if (btns && btns.length > 0) {
	            (function () {
	                // 加入自定义按钮列表在底部
	                var btnHtml = '';
	                var eventMap = {}; // 将按钮数组转为 map 结构，方便事件触发的处理
	                btns.forEach(function (btn) {
	                    btn.callback && (eventMap[btn.name] = btn.callback);
	                    btnHtml += '<a href=\'javascript:void(0)\' class=\'bh-ph-8 user-btn\' data-name=\'' + btn.name + '\'>' + btn.title + '</a>';
	                });
	                opts.content += '<div class=\'bh-mt-16 bh-text-right\'>' + btnHtml + '</div>';

	                // 重写 ready 方法，加入对 btns 的处理
	                var oldReady = opts.ready;
	                opts.ready = function (popWindow) {
	                    popWindow.on('click', '.user-btn', function (event) {
	                        var btnName = $(event.target).data('name');
	                        if (eventMap[btnName]) {
	                            if (eventMap[btnName](popWindow) !== false) {
	                                $.bhPopOver.close();
	                            }
	                        } else {
	                            $.bhPopOver.close();
	                        }
	                    });
	                    oldReady && oldReady(popWindow);
	                };

	                // 重写关闭方法，解除事件绑定
	                var oldBeforeClose = opts.beforeClose;
	                opts.beforeClose = function (popWindow) {
	                    eventMap = {}; // 清除事件缓存
	                    popWindow.off('click', '.user-btn');
	                    oldBeforeClose && oldBeforeClose(popWindow);
	                    opts = {};
	                };
	            })();
	        }

	        $.bhPopOver(opts);
	    },

	    /**
	     * 关闭 popover 弹框
	     */
	    hidePopover: function hidePopover() {
	        $.bhPopOver.close();
	    },

	    /**
	     * 重置纸质弹框页脚
	     */
	    resetPageFooter: function resetPageFooter() {
	        $.bhPaperPileDialog.resetPageFooter();
	        $.bhPaperPileDialog.resetDialogFooter();
	    },

	    /**
	     * 重置纸质弹框页脚
	     */
	    resetDialogFooter: function resetDialogFooter() {
	        $.bhPaperPileDialog.resetDialogFooter();
	    },

	    /**
	     * 警告信息框
	     * @param  {String}   content  警告内容
	     * @param  {Function} callback 点击确定按钮的回调
	     */
	    alert: function alert(content, callback) {
	        BH_UTILS.bhDialogWarning({
	            title: Vue.t('basic.alert'),
	            buttons: [{
	                text: Vue.t('basic.ok'),
	                className: 'bh-btn-default'
	            }],
	            content: content,
	            callback: callback
	        });
	    },

	    /**
	     * 确认信息弹框
	     * @param  {String}   content  信息内容
	     * @param  {Function} callback 点击确认按钮的回调
	     */
	    confirm: function confirm(content, callback) {
	        BH_UTILS.bhDialogWarning({
	            title: Vue.t('basic.alert'),
	            buttons: [{
	                text: Vue.t('basic.ok'),
	                className: 'bh-btn-primary'
	            }, {
	                text: Vue.t('basic.cancel'),
	                className: 'bh-btn-default'
	            }],
	            content: content,
	            callback: callback
	        });
	    },

	    /**
	     * 设置历史信息的提示文字，【此方法与业务相关，一般不需调用】
	     * @param {Object} vm   当前页面vm
	     * @param {String} text 提示文字
	     */
	    setTipInfo: function setTipInfo(vm, text) {
	        if (!vm) {
	            console.log('set tip info failed, no vm specified !');
	            return;
	        }

	        vm.$dispatch('confirm-text', text);
	    },

	    /**
	     * 文字信息提示
	     * @param  {String} msg   信息字符串
	     * @param  {String} state 信息状态，支持'success'/'danger'/'warning' etc
	     */
	    tip: function tip(msg, state) {
	        $.bhTip({
	            state: state,
	            content: msg
	        });
	    },

	    /**
	     * 导出文件
	     * @param  {String} submitUrl 提取导出请求的服务器地址
	     * @param  {String} modelUrl  获取模型的地址
	     * @param  {String} modelName 模型名称
	     */
	    exportFile: function exportFile(submitUrl, modelUrl, modelName, params) {
	        if (!submitUrl || !modelUrl || !modelName) {
	            console.log('export file failed, invalid arguments!', arguments);
	            return;
	        }

	        var model = WIS_EMAP_SERV.getModel(modelUrl, modelName);
	        var columns = model.map(function (item) {
	            return {
	                name: item.name,
	                hidden: false
	            };
	        });

	        $.bhCustomizeColumn({
	            title: Vue.t('basic.select_export_cols'),
	            model: model,
	            columns: columns,
	            callback: function callback(cols) {
	                var ids = [];
	                cols.forEach(function (item) {
	                    !item.hidden && ids.push(item.name);
	                });

	                var colStr = ids.join(',');

	                var url = submitUrl + '?colnames=' + colStr;

	                if (params) {
	                    var suffix = '';
	                    for (var key in params) {
	                        suffix += '&' + key + '=' + params[key];
	                    }

	                    url = url + suffix;
	                }

	                window.open(url);
	            }
	        });
	    }
	}; /**
	    * 页面相关操作的util方法集合
	    * @module utils/pageUtil
	    * @example
	    * //引入
	    * import pageUtil from 'bh-vue/utils/pageUtil'
	    * // 使用
	    * pageUtil.alert('警告信息');
	    */

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(97);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(98)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../.0.23.1@css-loader/index.js!./../../.2.2.3@less-loader/index.js!./pageUtil.less", function() {
				var newContent = require("!!./../../.0.23.1@css-loader/index.js!./../../.2.2.3@less-loader/index.js!./pageUtil.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".bh-pageutil-window {\n  padding-bottom: 24px;\n}\n.bh-pageutil-window .buttons {\n  position: absolute;\n  bottom: 32px;\n  width: 100%;\n  left: 0;\n  float: right;\n  padding: 0 24px;\n  text-align: right;\n  display: none;\n}\n.bh-pageutil-window.has-button {\n  padding-bottom: 72px;\n}\n.bh-pageutil-window.has-button .buttons {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:treeview class=\"wec-school-edit-tree\">\n    <bh-tree v-ref:tree\n        :default-select='defaultSelect'\n        :source='source'\n        :fields='fields'\n        :operations='opts'\n        @select='selectNode'\n        @edit='editName'\n        @del='del'></bh-tree>\n</div>\n";

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = {
	    props: ['contextPath'],
	    data () {
	        return {
	            routes: {}
	        };
	    },
	    methods: {
	        l (path) {
	            return (this.contextPath + path).replace(/\/\//g, '/');
	        }
	    },
	    activate (done) {
	        this.$dispatch('widget-active', this.routes);
	        done();
	    }
	};


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(102)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] wec-widget\\widgetLoader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(103)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-79801fba/widgetLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});


	var _cachedApp = {};

	var _loadScript = function _loadScript(url, callback) {
	    $.ajax(url).done(function (data) {
	        try {
	            eval(data);
	            var compNames = data.match(/SVue\.component\("(\w+)"/);
	            if (!compNames || compNames.length !== 2) {
	                console.error('无法获取 widget 注册名称！');
	                callback(false);
	            } else {
	                callback(true, compNames[1]);
	            }
	        } catch (e) {
	            console.error('加载远程 widget 失败', e);
	            callback(false);
	        }
	    }).fail(function () {
	        console.error('请求远程 widget 失败');
	        callback(false);
	    });
	};

	var _loadWidget = function _loadWidget(vm) {
	    var dfd = $.Deferred();

	    var widgetUrl = vm.url;

	    if (_cachedApp[widgetUrl]) {
	        vm.app = _cachedApp[widgetUrl];
	        dfd.resolve();
	        return dfd.promise();
	    }

	    _loadScript(widgetUrl, function (success, compName) {
	        if (!success) {
	            return;
	        }

	        vm.app = compName;
	        _cachedApp[widgetUrl] = compName;
	        dfd.resolve();
	    });

	    return dfd.promise();
	};

	exports.default = {
	    props: {
	        url: ''
	    },
	    data: function data() {
	        return {
	            fullPath: '',
	            path: '',
	            app: null
	        };
	    },

	    methods: {
	        widgetActive: function widgetActive(routes) {
	            var router = this.$router;

	            var matched = router._currentTransition.to.matched;

	            var len = matched.length;
	            var segments = [];
	            for (var i = 0; i < len; i++) {
	                segments.push({
	                    path: matched[i].handler.path,
	                    handler: matched[i].handler
	                });
	            }

	            for (var path in routes) {
	                var handler = routes[path];
	                router._addRoute(path, handler, $.extend([], segments));
	            }
	        }
	    },
	    created: function created() {
	        this.path = this.$router._currentRoute.path;
	    },
	    activate: function activate(done) {
	        _loadWidget(this).done(function () {
	            done();
	        });
	    }
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <component :is='app' :context-path='path' @widget-active='widgetActive'></component>\n</div>\n";

/***/ }
/******/ ]);