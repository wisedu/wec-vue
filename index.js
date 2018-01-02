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

	var _navPanel = __webpack_require__(14);

	var _navPanel2 = _interopRequireDefault(_navPanel);

	var _editTree = __webpack_require__(19);

	var _editTree2 = _interopRequireDefault(_editTree);

	var _sZtree = __webpack_require__(34);

	var _sZtree2 = _interopRequireDefault(_sZtree);

	var _widgetBase = __webpack_require__(58);

	var _widgetBase2 = _interopRequireDefault(_widgetBase);

	var _widgetLoader = __webpack_require__(59);

	var _widgetLoader2 = _interopRequireDefault(_widgetLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    SearchDate: _searchDate2.default,
	    SearchLabels: _searchLabels2.default,
	    NavPanel: _navPanel2.default,
	    EditTree: _editTree2.default,
	    SZtree: _sZtree2.default,
	    WidgetBase: _widgetBase2.default,
	    WidgetLoader: _widgetLoader2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(2)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
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
	  var id = "_v-82e376f2/searchDate.vue"
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
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
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
	  var id = "_v-21443cce/bhTimepicker.vue"
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
	__webpack_require__(8)
	__vue_script__ = __webpack_require__(12)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] search-labels\\searchLabels.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
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
	  var id = "_v-334125b2/searchLabels.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-334125b2&scoped=true!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./searchLabels.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-334125b2&scoped=true!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./searchLabels.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.bh-advancedQuery-groupList-item[_v-334125b2] {\n    position: relative;\n    padding: 2px 4px;\n    margin-top: 2px;\n    margin-right: 4px;\n    float: left;\n    color: #333;\n    background-color: #fff;\n    border: 1px solid #d8dcf0;\n    border-radius: 1px;\n    cursor: pointer;\n}\n\n.bh-advancedQuery-groupList-item.opt[_v-334125b2] {\n    color: #2196f3;\n    border-color: transparent;\n}\n\n.bh-advancedQuery-groupList-item.bh-active[_v-334125b2] {\n    background-color: #2196f3;\n    color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
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
	        showAll: {
	            default: true,
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
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"bh-advancedQuery-form-row\" _v-334125b2=\"\">\n    <div class=\"bh-advancedQuery-groupName\" _v-334125b2=\"\">{{title}}：</div>\n    <div class=\"bh-advancedQuery-groupList bh-label-radio-group\" _v-334125b2=\"\">\n        <div v-if=\"showAll\" class=\"bh-advancedQuery-groupList-item bh-label-radio\" :class=\"{&quot;bh-bg-primary bh-color-white&quot;: !current}\" @click=\"select(null)\" _v-334125b2=\"\">{{displayTexts.all}}</div>\n        <div v-for=\"item in shownItems\" class=\"bh-advancedQuery-groupList-item bh-label-radio\" :class=\"{&quot;bh-bg-primary bh-color-white&quot;: item === current}\" @click=\"select(item)\" _v-334125b2=\"\">\n            {{item[nameMember]}}\n        </div>\n        <div v-if=\"viewMore\" class=\"bh-advancedQuery-groupList-item opt bh-color-primary\" @click=\"toggleMore\" _v-334125b2=\"\">\n            {{moreText}}\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(15)
	__vue_script__ = __webpack_require__(17)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] nav-panel\\navPanel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
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
	  var id = "_v-952c5caa/navPanel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-952c5caa&scoped=true!../node_modules/less-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./navPanel.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-952c5caa&scoped=true!../node_modules/less-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./navPanel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".nolist[_v-952c5caa] {\n  list-style: none;\n  display: inline-block;\n}\n.nav-panel[_v-952c5caa] {\n  box-shadow: 0 1px 3px 2px rgba(160, 160, 160, 0.2);\n  background-color: #fff;\n  line-height: 35px;\n}\n.nav-panel .title[_v-952c5caa] {\n  display: inline-block;\n  font-size: 20px;\n  line-height: 40px;\n}\n.nav-panel .title i[_v-952c5caa] {\n  font-size: 20px;\n}\n.nav-panel .nav-list[_v-952c5caa] {\n  display: inline-block;\n}\n.nav-panel .nav-list ul[_v-952c5caa] {\n  list-style: none;\n  display: inline-block;\n}\n.nav-panel .nav-list ul li[_v-952c5caa] {\n  list-style: none;\n  display: inline-block;\n}\n.nav-panel .nav-list ul li a[_v-952c5caa] {\n  color: #333;\n  cursor: pointer;\n  display: inline-block;\n  box-sizing: border-box;\n  font-size: 15px;\n  border-bottom: 4px solid transparent;\n}\n.nav-panel .nav-list ul li a[_v-952c5caa]:hover,\n.nav-panel .nav-list ul li a.active[_v-952c5caa] {\n  font-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _activeMenu = function _activeMenu(vm) {
	    var transition = vm.$router._currentTransition;
	    var path = transition.to.path;
	    var menus = vm.menus;
	    var matched = false;
	    for (var i = 0, length = menus.length; i < length; i++) {
	        var menu = menus[i];
	        var url = menu.url;
	        if (path === url) {
	            vm.current = menu.name;
	            matched = true;
	            break;
	        }
	    }
	    if (matched == false && vm.defaultMenu) {
	        for (var _i = 0, _length = menus.length; _i < _length; _i++) {
	            if (vm.defaultMenu === menus[_i].url) {
	                vm.current = menus[_i].name;
	                break;
	            }
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
	        defaultMenu: String,
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
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"nav-panel bh-ph-16\" _v-952c5caa=\"\">\n    <div class=\"title bh-mr-24 bh-color-grey-3\" v-if=\"title &amp;&amp; title.length > 0\" _v-952c5caa=\"\"> <i class=\"icon iconfont icon-star bh-color-grey-3\" _v-952c5caa=\"\"></i> {{title}}</div>\n    <div class=\"nav-list\" _v-952c5caa=\"\">\n        <ul _v-952c5caa=\"\">\n            <li v-for=\"menu in menus\" _v-952c5caa=\"\">\n                <a v-link=\"menu.url\" class=\"bh-ph-24\" :class=\"[&quot;bh-bColor-hover-info&quot;, current == menu.name ? &quot;bh-bColor-info&quot;:&quot;&quot;, current == menu.name ? &quot;active&quot;:&quot;&quot;]\" _v-952c5caa=\"\">{{menu.name}}</a>\n            </li>\n        </ul>\n    </div>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(20)
	__vue_script__ = __webpack_require__(23)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] edit-tree\\editTree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(33)
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
	  var id = "_v-796c79ea/editTree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/less-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./editTree.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/less-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./editTree.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".menu-tree-node-edit {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 0;\n  right: 0;\n  height: 30px;\n  background-color: #fff;\n}\n.menu-tree-node-edit input {\n  vertical-align: middle;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.menu-tree-node-edit .iconfont {\n  cursor: pointer;\n  font-size: 2.4rem;\n  vertical-align: middle;\n}\ndiv.wec-school-edit-tree ul.jqx-tree-dropdown-root {\n  width: auto !important;\n  padding: 0 !important;\n}\ndiv.wec-school-edit-tree ul {\n  margin: 0px;\n  padding-left: 32px;\n}\ndiv.wec-school-edit-tree ul li.jqx-tree-item-li {\n  cursor: pointer;\n  line-height: 22px !important;\n  margin-left: 0 !important;\n  padding: 0 !important;\n}\ndiv.wec-school-edit-tree ul li.jqx-tree-item-li span {\n  margin-top: 7px !important;\n}\ndiv.wec-school-edit-tree ul li.jqx-tree-item-li div.jqx-tree-item {\n  background-color: inherit !important;\n  display: block !important;\n  font-weight: normal;\n}\ndiv.wec-school-edit-tree ul li.jqx-tree-item-li > div.jqx-tree-item-selected,\ndiv.wec-school-edit-tree ul li.jqx-tree-item-li > div.jqx-tree-item-hover {\n  color: #3e50b4 !important;\n  background-color: #fff !important;\n  font-weight: bold;\n}\ndiv.wec-school-edit-tree ul li.jqx-tree-item-li div.opt-panel a.opt-btn {\n  color: #00f !important;\n}\n.wec-school-domain-item-flag {\n  width: 9px;\n  height: 9px;\n  background-image: url(" + __webpack_require__(22) + ");\n  display: inline-block;\n  margin-left: 5px;\n}\n.item-con {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.item-con .flag {\n  margin-left: 5px;\n  padding: 2px 10px;\n  border-radius: 20px;\n  color: #ffffff;\n}\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACfSURBVChTY0xLS9vPwMDgAMQM////fwCkWmfPnj0HxIcBJiB2AEo2MjIyzgBiBSCeDdRYAJGGAJAiEOAHKuSAskGgH1khSNEToG6QQAJYBAHgCpmNjIw+AxX5gYUxgYexsfFH5nNAAGKABCDiqADoDBNmEOPs2bMnsCkEKvgCtMUXrAgE0BVCFXjOmjXrCFwRCMAUgqwAmQBSwMDAwAAAzU9ExeQKafsAAAAASUVORK5CYII="

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _bhTree = __webpack_require__(24);

	var _bhTree2 = _interopRequireDefault(_bhTree);

	var _pageUtil = __webpack_require__(29);

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

	    _pageUtil2.default.confirm('确认删除此节点？', function () {
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
	        var idField = vm.fields.id ? vm.fields.id : 'id';
	        if (data[idField] === id) {
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
	        },
	        defaultSelectLeaf: {
	            type: Boolean,
	            default: false
	        },
	        noLeaf: {
	            type: Boolean,
	            default: false
	        }
	    },
	    computed: {
	        opts: function opts() {
	            var operations = this.operations;
	            if (!operations) {
	                return null;
	            }

	            if (typeof operations === 'function') {
	                var vm = this;
	                return function (item) {
	                    var opts = operations(_getNodeData(vm, item)) || [];
	                    return _optConvert(opts);
	                };
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
	        getItem: function getItem(item) {
	            return this.$refs.tree.getItem(item);
	        },
	        addTo: function addTo(item, elem) {
	            return this.$refs.tree.addTo(item, elem);
	        },
	        remove: function remove(item) {
	            return this.$refs.tree.remove(item);
	        },
	        updateItem: function updateItem(item, newItem) {
	            return this.$refs.tree.updateItem(item, newItem);
	        },
	        newNode: function newNode(nodeData, parent) {
	            _addNode(this, nodeData, parent);
	        },
	        selectNode: function selectNode(item) {
	            this.$dispatch('select', _getNodeData(this, item));
	        },
	        selectItem: function selectItem(item) {
	            this.$refs.tree.selectItem(item);
	        },
	        selectItemByData: function selectItemByData(item) {
	            var newItem = this.$refs.tree.getItem(item);
	            this.$refs.tree.selectItem(newItem);
	        },
	        preprocessSource: function preprocessSource(source) {
	            return this.$refs.tree.preprocessSource(source);
	        },
	        getPrevItem: function getPrevItem(item) {
	            return this.$refs.tree.getPrevItem(item);
	        },
	        getNextItem: function getNextItem(item) {
	            return this.$refs.tree.getNextItem(item);
	        },
	        expandItem: function expandItem(item) {
	            return this.$refs.tree.expandItem(item);
	        },
	        getAll: function getAll() {
	            return this.$refs.tree.getAll();
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
	            if (!this.noLeaf) {
	                _addClassToParentNode();
	            }
	        }
	    }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(25)
	__vue_script__ = __webpack_require__(27)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] node_modules\\bh-vue\\bh-tree\\bhTree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
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
	  var id = "_v-bc81faa4/bhTree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-rewriter.js!../../less-loader/index.js!../../vue-loader/lib/selector.js?type=style&index=0!./bhTree.vue", function() {
				var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-rewriter.js!../../less-loader/index.js!../../vue-loader/lib/selector.js?type=style&index=0!./bhTree.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".jqx-tree.has-opt .jqx-tree-item-li .opt-panel {\n  padding: 3px;\n}\n.jqx-tree.has-opt .jqx-tree-item-li .opt-panel .opt-btn {\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 27 */
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

	var _getItem = function _getItem(el, element) {
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
	        el.jqxTree('removeItem', node.element);
	    });

	    el.jqxTree('render');
	};

	var addEvents = function addEvents(vm) {
	    var self = vm;
	    var el = $(self.$el);

	    el.on('select', function (event) {
	        var args = event.args;
	        var item = _getItem(el, args.element);

	        self.selectedItem = item;

	        el.find('li').removeClass('edit-tree-li-select');
	        $(item.element).addClass('edit-tree-li-select');
	        self.$dispatch('select', item);
	    });

	    el.on('checkChange', function (event) {
	        var args = event.args;

	        self.checkedItems = getCheckedItems(el);
	        var item = _getItem(el, args.element);

	        if (!item) {
	            return;
	        }

	        self.$dispatch('check-change', {
	            item: item,
	            checked: args.checked
	        });
	    });

	    el.on('expand', function (event) {
	        var args = event.args;
	        var item = _getItem(el, args.element);

	        self.$dispatch('expand', item);
	    });
	};

	var addDefaultSelectEvents = function addDefaultSelectEvents(vm) {
	    var self = vm;
	    var el = $(vm.$els.treeroot);

	    if (!vm.defaultSelect) {
	        return;
	    }

	    vm.$nextTick(function () {
	        var items = _getAll(el);
	        if (!items.length > 0) {
	            return;
	        }

	        var _item = items[0];
	        if (vm.defaultSelectLeaf === true) {
	            for (var i = 0; i < items.length; i++) {
	                if (items[i].hasItems === false) {
	                    _item = items[i];
	                    break;
	                }
	            }
	        }
	        selectItem(el, _item);

	        self.selectedItem = _item;
	        self.$dispatch('select', _item);
	        self.$dispatch('initialized');
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
	        var item = _getItem(root, li[0]);
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

	        var targetDiv = root.find('.opt-panel').parent().find('.jqx-tree-item');
	        var useWidth = $('.opt-panel').width();
	        var originWidth = targetDiv.width();
	        var desc = targetDiv.text();
	        targetDiv.css('padding-right', useWidth + 'px').addClass('bh-str-cut').attr('title', desc);
	    }).on('mouseleave', '.jqx-tree-item-li', function (event) {
	        root.find('.opt-panel').parent().find('.jqx-tree-item').css('padding-right', '').removeClass('bh-str-cut');
	        root.find('.opt-panel').remove();
	        $(this).removeClass('edit-tree-item-hover');
	    }).on('click', '.opt-btn', function (event) {
	        var target = $(event.target);
	        vm.$dispatch(target.data('action'), target.data('item'));
	    });
	};

	var _removeOperations = function _removeOperations(vm) {
	    var root = $(vm.$els.treeroot);
	    root.off('mouseenter').off('mouseleave').off('click');
	    root.find('.opt-panel').remove();
	};

	var createTree = function createTree(vm, options) {
	    _removeOperations(vm);
	    var el = $(vm.$els.treeroot);

	    vm.jqxObj = el.jqxTree(options);
	    addDefaultSelectEvents(vm);
	    vm.selectedItem = _getSelectedItem(el);
	    vm.checkedItems = getCheckedItems(el);

	    _addOperations(vm);

	    return vm.jqxObj;
	};

	var prepareSource = function prepareSource(vm) {
	    return _preprocessSource(vm, vm.source);
	};

	var _preprocessSource = function _preprocessSource(vm, dataSource) {
	    var fields = vm.fields;

	    if ($.isEmptyObject(fields)) {
	        return dataSource;
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
	        localdata: dataSource
	    };
	    var dataAdapter = new $.jqx.dataAdapter(source);
	    dataAdapter.dataBind();
	    var ret = dataAdapter.getRecordsHierarchy(params.id, params.pid, 'items', mapper);

	    mapper = null;
	    source = null;

	    return ret || [];
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
	        },
	        defaultSelectLeaf: {
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
	            var el = $(this.$el);
	            var ret = el.jqxTree('addTo', item, elem, false);
	            el.jqxTree('render');
	            return ret;
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
	        getItem: function getItem(item) {
	            return _getItem($(this.$el), item);
	        },
	        updateItem: function updateItem(item, newItem) {
	            return $(this.$el).jqxTree('updateItem', item, newItem);
	        },
	        preprocessSource: function preprocessSource(source) {
	            return _preprocessSource(this, source);
	        },
	        getPrevItem: function getPrevItem(item) {
	            return $(this.$el).jqxTree('getPrevItem', item.element);
	        },
	        getNextItem: function getNextItem(item) {
	            return $(this.$el).jqxTree('getNextItem', item.element);
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
	    }
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:treeroot></div>\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(30);

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

	                    if (title) {
	                        vm.$compile($header[0]); // 重新扫描动态插入的组件
	                    }

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
	            var btnsHtml = '';
	            var index = 0;
	            btns.forEach(function (btn) {
	                var className = btn.className || 'bh-btn-default';
	                btnsHtml += '<button class="bh-btn bh-window-btn ' + className + '" data-index=\'' + index++ + '\'>' + btn.text + '</button>';
	            });

	            btnsPanel = '\n                <div class=\'buttons\'>\n                    <hr style="border:none;border-top: 1px solid #efefef;margin-bottom: 10px;">\n                    ' + btnsHtml + '\n                </div>\n            ';
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
	            jqDom.jqxWindow('destroy');
	            jqDom.off('click').off('close').off('open').off('created');
	            jqDom.remove();
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
	        jqDom.css('position', 'fixed');
	    },

	    /**
	     * 关闭窗口（默认为销毁窗口，所以每次打开窗口都会重建）
	     */
	    hideWindow: function hideWindow() {
	        var jqDom = $('.bh-pageutil-window');
	        if (jqDom.length > 0) {
	            jqDom.jqxWindow('close');
	            jqDom.jqxWindow('destroy');
	            jqDom.off('click').off('close').off('open').off('created');
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
	     * 使用侧边栏属性弹窗
	     * @param  {Object} [vm]    当前页面vm，如果为空则不会执行vue.compile
	     * @param  {String} title   标题
	     * @param  {String} content 内容，支持包含vue组件的html字符串
	     * @param  {String} footer  页脚，支持包含vue组件的html字符串
	     * @param  {Function} onReady 渲染完成的回调事件
	     * @param  {Function} onClose 关闭弹框的回调事件
	     */
	    showSidePaper: function showSidePaper(vm, title, content, footer, onReady, onClose) {
	        var opts = {
	            title: title,
	            content: content,
	            ready: function ready($header, $section, $footer) {
	                if (vm) {
	                    vm.$compile($section[0]); // 重新扫描动态插入的组件

	                    if (title) {
	                        vm.$compile($header[0]); // 重新扫描动态插入的组件
	                    }

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

	        $.bhPropertyDialog.show(opts);
	    },
	    hideSidePaper: function hideSidePaper() {
	        $.bhPropertyDialog.hide();
	    },

	    /**
	     * 警告信息框
	     * @param  {String}   content  警告内容
	     * @param  {Function} callback 点击确定按钮的回调
	     * @param {Object} [options] 附加参数，支持自定义按钮和标题文字
	     * @param {String} options.title 标题文字，默认获取多语言 Vue.t('basic.alert')
	     * @param {String} options.btnText 按钮文字，默认获取多语言 Vue.t('basic.ok')
	     */
	    alert: function alert(content, callback, options) {
	        var title = !Vue.t || Vue.t('basic.alert') === 'basic.alert' ? '警告' : Vue.t('basic.alert');
	        var ok = !Vue.t || Vue.t('basic.ok') === 'basic.ok' ? '确定' : Vue.t('basic.ok');

	        var opts = $.extend({
	            title: title,
	            btnText: ok
	        }, options);

	        BH_UTILS.bhDialogWarning({
	            title: opts.title,
	            buttons: [{
	                text: opts.btnText,
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
	      * @param {Object} [options] 附加参数，支持自定义按钮、标题文字和取消回调
	      * @param {String} options.title 标题文字，默认获取多语言 Vue.t('basic.alert')
	      * @param {String} options.ok 确定按钮的文字，默认获取多语言 Vue.t('basic.ok')
	      * @param {String} options.cancel 取消按钮的文字，默认获取多语言 Vue.t('basic.cancel')
	      * @param {Function} options.callbackCancel 点击取消按钮的回调
	      */
	    confirm: function confirm(content, callback, options) {
	        var title = !Vue.t || Vue.t('basic.alert') === 'basic.alert' ? '警告' : Vue.t('basic.alert');
	        var ok = !Vue.t || Vue.t('basic.ok') === 'basic.ok' ? '确定' : Vue.t('basic.ok');
	        var cancel = !Vue.t || Vue.t('basic.cancel') === 'basic.cancel' ? '取消' : Vue.t('basic.cancel');
	        var opts = $.extend({
	            title: title,
	            ok: ok,
	            cancel: cancel
	        }, options);

	        BH_UTILS.bhDialogWarning({
	            title: opts.title,
	            buttons: [{
	                text: opts.ok,
	                className: 'bh-btn-primary',
	                callback: callback
	            }, {
	                text: opts.cancel,
	                className: 'bh-btn-default',
	                callback: opts.callbackCancel
	            }],
	            content: content
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

	        var title = !Vue.t || Vue.t('basic.select_export_cols') === 'basic.select_export_cols' ? '请选择要导出的列' : Vue.t('basic.select_export_cols');

	        $.bhCustomizeColumn({
	            title: title,
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
	    },

	    /**
	     *@property {Object} options 轮播初始化参数
	     * @property {String} [options.showType=page] 渲染的类型
	     * @property {String} [options.selector] 渲染的容器
	     * @property {Array} [options.dataSource=[{
	        image: 'http://res.wisedu.com/fe_components/galleria/gallery.png'
	    }, {
	        image: 'http://res.wisedu.com/fe_components/galleria/gallery_thin.png'
	    }, {
	        image: 'http://res.wisedu.com/fe_components/galleria/gallery.png'
	    }]] 轮播的图片列表
	     * @property {String} [options.height] 高度
	     * @property {String} [options.weight] 宽度
	     * @property{num}[options.show]从当前第几个开始轮播
	     */
	    galleryPic: function galleryPic(options) {
	        $.bhGallery(options);
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js!../../less-loader/index.js!./pageUtil.less", function() {
				var newContent = require("!!../../css-loader/index.js!../../less-loader/index.js!./pageUtil.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".bh-pageutil-window {\n  padding-bottom: 24px;\n}\n.bh-pageutil-window .buttons {\n  position: absolute;\n  bottom: 32px;\n  width: 100%;\n  left: 0;\n  float: right;\n  padding: 0 24px;\n  text-align: right;\n  display: none;\n}\n.bh-pageutil-window.has-button {\n  padding-bottom: 72px;\n}\n.bh-pageutil-window.has-button .buttons {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 32 */
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
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
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
/* 33 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:treeview class=\"wec-school-edit-tree\">\n    <bh-tree v-ref:tree\n        :default-select='defaultSelect'\n        :default-select-leaf='defaultSelectLeaf'\n        :source='source'\n        :fields='fields'\n        :operations='opts'\n        @select='selectNode'\n        @edit='editName'\n        @del='del'></bh-tree>\n</div>\n";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(35)
	__vue_script__ = __webpack_require__(37)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] s-ztree\\sZtree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(57)
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
	  var id = "_v-1b1d290b/sZtree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/less-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./sZtree.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/less-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./sZtree.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".ztree {\n  position: relative;\n}\n.ztree span.node_name {\n  margin-right: 130px;\n}\n.ztree .opt-panel {\n  display: inline-block;\n  width: 130px;\n  margin-left: -130px;\n}\n.ztree .opt-panel .opt-btn {\n  color: blue !important;\n}\n.ztree .opt-panel .opt-more {\n  color: blue !important;\n  display: inline-block;\n  position: relative;\n}\n.ztree .opt-panel-dropdown {\n  background-color: white;\n  border: 1px solid #ddd;\n}\n.ztree .opt-panel-dropdown .opt-btn {\n  display: block;\n  padding: 0 0.7rem;\n}\n.ztree .opt-panel-dropdown .opt-btn:hover {\n  background-color: #D2E7FD;\n}\n.ztree .hover-line {\n  padding-right: 100px;\n}\n", ""]);

	// exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(38);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _methods;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IDMark_A = '_a';

	var onExpand = function onExpand(vm) {
	    return function (event, treeId, treeNode) {
	        vm.$emit('expanded', treeNode);
	    };
	};
	var onSelected = function onSelected(vm) {
	    return function (event, treeId, treeNode) {
	        vm.$emit('selected', treeNode);
	    };
	};
	var onCheckChange = function onCheckChange(vm) {
	    return function (event, treeId, treeNode) {
	        vm.$emit('check-change', treeNode);
	    };
	};

	var _getSelectedNode = function _getSelectedNode(vm) {
	    var node;
	    var nodes = vm.zTreeObj.getSelectedNodes();
	    if (nodes && nodes.length > 0) {
	        node = nodes[0];
	    } else {
	        node = null;
	    }
	    return node;
	};

	var getCheckedNodes = function getCheckedNodes(vm) {
	    return vm.zTreeObj.getCheckedNodes();
	};

	var selectNode = function selectNode(vm, node) {
	    return vm.zTreeObj.selectNode(node);
	};

	var _setDefaultStates = function _setDefaultStates(vm) {
	    var self = vm;
	    var el = $(vm.$els.treeroot);

	    if (vm.default.selected) {
	        vm.$nextTick(function () {
	            var nodes = vm.zTreeObj.getNodes();

	            var _item = nodes[0];
	            if (vm.default.select_leaf === true) {
	                for (var i = 0; i < nodes.length; i++) {
	                    if (!nodes[i].children) {
	                        _item = nodes[i];
	                        break;
	                    }
	                }
	            }
	            vm.selectNode(_item);
	            vm.$emit('selected', _item);
	        });
	    }
	    self.$emit('initialized');
	};

	var _addOperations = function _addOperations(vm) {
	    var operations = vm.operations;
	    if (!operations) {
	        return;
	    }

	    var root = $(vm.$els.treeroot);
	    root.addClass('has-opt').on('mouseenter', '.hover-line', function (event) {
	        var target = $(this);
	        var aObj = target.find('a').first();

	        aObj.off();
	        aObj.find('.opt-panel .opt-more').off();
	        aObj.find('.opt-panel').remove();

	        var treeNode = vm.zTreeObj.getNodeByTId(aObj.parents('li').first().attr('id'));
	        var opts = null;
	        if (typeof operations === 'function') {
	            opts = operations(treeNode) || [];
	        } else {
	            opts = operations;
	        }

	        if (opts.length > 0) {
	            var optHtml = $('<div>').addClass('opt-panel');
	            var subOpts = opts.slice(0, 2);
	            subOpts.forEach(function (opt) {
	                $('<a>').text(opt.title).data('action', opt.name).data('item', treeNode).addClass('opt-btn bh-mh-4').appendTo(optHtml);
	            });
	            if (opts.length > 2) {
	                $('<a>').text('更多').data('opts', opts.slice(2)).addClass('opt-more bh-mh-4').appendTo(optHtml);
	            }
	            aObj.append(optHtml);

	            aObj.on('click', '.opt-btn', function (event) {
	                event.stopPropagation();
	                var target = $(event.target);
	                var action = target.data('action');
	                vm.$dispatch(action, treeNode);
	            });
	            aObj.on('click', '.opt-more', function (event) {
	                event.stopPropagation();
	            });

	            var btnMore = $('.opt-more');
	            btnMore.on('mouseenter', function (event) {
	                var more = $(this);


	                var optHtmlDrop = $('<div>').addClass('opt-panel-dropdown').css({
	                    top: 20,
	                    position: 'absolute'
	                });
	                var _subopts = more.data('opts');
	                _subopts.forEach(function (opt) {
	                    $('<a>').text(opt.title).data('action', opt.name).data('item', treeNode).addClass('opt-btn bh-mh-4').appendTo(optHtmlDrop);
	                });

	                more.append(optHtmlDrop);
	            });

	            btnMore.on('mouseleave', function (event) {
	                var more = $(this);
	                if (more.find('.opt-panel-dropdown').length > 0) {
	                    more.find('.opt-panel-dropdown').remove();
	                }
	                if (!$(event.relatedTarget).hasClass('opt-panel')) {
	                    $(this).off();
	                    $(this).parents('.opt-panel').remove();
	                }
	            });
	        }
	    }).on('mouseleave', '.hover-line', function (event) {
	        var target = $(this);
	        target.find('.opt-panel').remove();
	    });
	};

	var _removeOperations = function _removeOperations(vm) {
	    var root = $(vm.$els.treeroot);
	    root.off();
	    root.find('.opt-panel').remove();
	};

	var createTree = function createTree(vm) {
	    if (!$) {
	        console.error('未加载jQuery--ZTree');
	        return;
	    }
	    if (!$.fn.zTree) {
	        console.error('未加载zTree--ZTree');
	        return;
	    }

	    var setting = $.extend(true, {}, vm.defaultSetting, {
	        data: {
	            simpleData: {
	                idKey: vm.fields.idKey,
	                pIdKey: vm.fields.pIdKey,
	                rootPId: vm.fields.rootPId
	            },
	            key: {
	                name: vm.fields.name,
	                checked: vm.fields.checked
	            }
	        },
	        check: {
	            enable: vm.default.checkboxes ? true : false,
	            chkStyle: vm.default.chkStyle || "checkbox",
	            autoCheckTrigger: true
	        },
	        view: {
	            nameIsHTML: vm.default.nameIsHTML ? true : false
	        }
	    });

	    vm.zTreeObj = $.fn.zTree.init($(vm.$els.treeroot), setting, vm.source);

	    _setDefaultStates(vm);

	    _addOperations(vm);

	    return vm.zTreeObj;
	};

	var prepareSource = function prepareSource(vm) {
	    return preprocessSource(vm, vm.source);
	};

	exports.default = {
	    data: function data() {
	        return {
	            zTreeObj: null,
	            defaultOpts: {
	                hasThreeStates: false,
	                checkboxes: false
	            },
	            defaultSetting: {
	                data: {
	                    key: {
	                        checked: "checked",
	                        name: "name"
	                    },
	                    simpleData: {
	                        enable: true,
	                        idKey: "id",
	                        pIdKey: "pId",
	                        rootPId: null
	                    }
	                },
	                view: {
	                    showTitle: true,
	                    showLine: false,
	                    showIcon: false,
	                    dblClickExpand: false
	                },
	                callback: {
	                    onExpand: onExpand(this),
	                    onClick: onSelected(this),
	                    onCheck: onCheckChange(this)
	                }
	            },
	            rdm_ID: ('' + Math.random()).substr(2)
	        };
	    },

	    props: {
	        source: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        default: {
	            type: Object,
	            default: function _default() {
	                return {
	                    checkboxes: false,
	                    hasThreeStates: true,
	                    chkStyle: "checkbox",
	                    selected: false,
	                    selected_leaf: false
	                };
	            }
	        },
	        operations: [Array, Function],
	        fields: {
	            type: Object,
	            default: function _default() {
	                return { idKey: 'id', pIdKey: 'parentId', name: 'name', checked: 'checked', rootPId: null };
	            }
	        }
	    },
	    methods: (_methods = {
	        removeChildNodes: function removeChildNodes(node) {
	            return this.zTreeObj.removeChildNodes(node);
	        },
	        removeNode: function removeNode(node) {
	            return this.zTreeObj.removeNode(node);
	        },
	        addNodes: function addNodes(parentNode, nodes) {
	            return this.zTreeObj.addNodes(parentNode, nodes);
	        },
	        getNodes: function getNodes() {
	            return this.zTreeObj.getNodes();
	        },
	        expandNode: function expandNode(node) {
	            return this.zTreeObj.expandNode(node, true, false, true, true);
	        },
	        selectNode: function selectNode(node) {
	            return this.zTreeObj.selectNode(node, false, true);
	        },
	        updateNode: function updateNode(node) {
	            return this.zTreeObj.updateNode(node);
	        },
	        moveNode: function moveNode(targetNode, node, moveType, isSilent) {
	            return this.zTreeObj.moveNode(targetNode, node, moveType, isSilent);
	        }
	    }, (0, _defineProperty3.default)(_methods, 'addNodes', function addNodes(parentNodeJSON, nodes) {
	        return this.zTreeObj.addNodes(parentNodeJSON, nodes);
	    }), (0, _defineProperty3.default)(_methods, 'expandAll', function expandAll() {
	        return this.zTreeObj.expandAll(true);
	    }), (0, _defineProperty3.default)(_methods, 'getNodeByParam', function getNodeByParam(key, value, parentNode) {
	        return this.zTreeObj.getNodeByParam(key, value, parentNode);
	    }), (0, _defineProperty3.default)(_methods, 'getSelectedNode', function getSelectedNode() {
	        return _getSelectedNode(this);
	    }), _methods),
	    ready: function ready() {
	        var self = this;
	        createTree(self);

	        self.$watch('source', function (newVal) {
	            createTree(self);
	        });
	    },
	    beforeDestroy: function beforeDestroy() {
	        _removeOperations(this);
	        var root = $(this.$els.treeroot);
	        $.fn.zTree.destroy(root.attr('id'));
	    }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(39);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	var $Object = __webpack_require__(44).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(42);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(52), 'Object', { defineProperty: __webpack_require__(48).f });


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(43);
	var core = __webpack_require__(44);
	var ctx = __webpack_require__(45);
	var hide = __webpack_require__(47);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
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
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
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
/* 43 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ },
/* 44 */
/***/ function(module, exports) {

	var core = module.exports = { version: '2.5.3' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(46);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(48);
	var createDesc = __webpack_require__(56);
	module.exports = __webpack_require__(52) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(49);
	var IE8_DOM_DEFINE = __webpack_require__(51);
	var toPrimitive = __webpack_require__(55);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(52) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(50);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(52) && !__webpack_require__(53)(function () {
	  return Object.defineProperty(__webpack_require__(54)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(53)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(50);
	var document = __webpack_require__(43).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(50);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <ul :id=\"rdm_ID\" v-el:treeroot class=\"ztree\"></ul>\n</div>\n";

/***/ },
/* 58 */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(60)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] wec-widget\\widgetLoader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(61)
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
	  var id = "_v-d7a8f102/widgetLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 60 */
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
/* 61 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <component :is='app' :context-path='path' @widget-active='widgetActive'></component>\n</div>\n";

/***/ }
/******/ ]);