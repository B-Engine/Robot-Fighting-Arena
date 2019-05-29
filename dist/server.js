/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/map.js":
/*!***************************!*\
  !*** ./src/server/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar world =\n/*#__PURE__*/\nfunction () {\n  function world(width, height) {\n    _classCallCheck(this, world);\n\n    this.tiles = [];\n    this.width = width;\n    this.height = height;\n    this.tileSize = 24;\n\n    for (var y = 0; y < height; y++) {\n      this.tiles.push([]);\n\n      for (var x = 0; x < width; x++) {\n        if (y == 0 || y == height - 1) {\n          this.tiles[y].push(8);\n        } else {\n          if (x == 0 || x == width - 1) {\n            this.tiles[y].push(11);\n          } else {\n            this.tiles[y].push(0);\n          }\n        }\n      }\n    }\n  }\n\n  _createClass(world, [{\n    key: \"tileAt\",\n    value: function tileAt(x, y) {\n      return this.tiles[y][x];\n    }\n  }]);\n\n  return world;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (world);\n\n//# sourceURL=webpack:///./src/server/map.js?");

/***/ }),

/***/ "./src/server/player.js":
/*!******************************!*\
  !*** ./src/server/player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return player; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar player = function player(imageIndex, x, y) {\n  _classCallCheck(this, player);\n\n  this.index = imageIndex;\n  this.characterSize = 24;\n  this.x = x;\n  this.y = y;\n};\n\n\n\n//# sourceURL=webpack:///./src/server/player.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map.js */ \"./src/server/map.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player.js */ \"./src/server/player.js\");\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(),\n    DIST_DIR = __dirname,\n    HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(DIST_DIR, 'index.html'),\n    compiler = webpack__WEBPACK_IMPORTED_MODULE_4___default()(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7___default.a);\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5___default()(compiler, {\n  publicPath: _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7___default.a.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6___default()(compiler));\napp.get('*', function (req, res, next) {\n  compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {\n    if (err) {\n      return next(err);\n    }\n\n    res.set('content-type', 'text/html');\n    res.send(result);\n    res.end();\n  });\n});\nvar PORT = process.env.PORT || 8080;\nvar server = http__WEBPACK_IMPORTED_MODULE_2___default.a.Server(app);\nvar io = new socket_io__WEBPACK_IMPORTED_MODULE_3___default.a(server);\n\nvar world1 = new _map_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](20, 20);\n\nvar player1 = new _player_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"](0, 10, 10);\nio.on('connection', function (socket) {});\nserver.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log('Press Ctrl+C to quit.');\n});\nsetInterval(function () {\n  io.emit('map', world1);\n}, 1000);\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nmodule.exports = {\n  entry: {\n    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js']\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    publicPath: '/',\n    filename: '[name].js'\n  },\n  mode: 'development',\n  target: 'web',\n  devtool: '#source-map',\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: \"babel-loader\"\n    }, {\n      // Loads the javacript into html template provided.\n      // Entry point is set below in HtmlWebPackPlugin in Plugins \n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\" //options: { minimize: true }\n\n      }]\n    }, {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n    }, {\n      test: /\\.(png|svg|jpg|gif)$/,\n      use: ['file-loader']\n    }]\n  },\n  plugins: [new HtmlWebPackPlugin({\n    template: \"./src/html/index.html\",\n    filename: \"./index.html\",\n    excludeChunks: ['server']\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });