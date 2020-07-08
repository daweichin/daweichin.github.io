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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);\n// imports\r\n\r\n\r\nconst canvas = document.querySelector(\"canvas\");\r\nconst c = canvas.getContext(\"2d\");\r\n\r\ncanvas.width = innerWidth;\r\ncanvas.height = innerHeight;\r\n\r\nconst colors = [\"#2185C5\", \"#7ECEFD\", \"#FFF6E5\", \"#FF7F66\"];\r\n\r\naddEventListener(\"resize\", () => {\r\n  canvas.width = innerWidth;\r\n  canvas.height = innerHeight;\r\n\r\n  init();\r\n});\r\n\r\n// Objects\r\nclass Star {\r\n  constructor(x, y, radius, color) {\r\n    this.x = x;\r\n    this.y = y;\r\n    this.radius = radius;\r\n    this.color = color;\r\n\r\n    this.velocity = {\r\n      x: (Math.random() - 0.5) * 8,\r\n      y: 3,\r\n    };\r\n\r\n    this.friction = 0.3;\r\n    this.gravity = 1.5;\r\n  }\r\n\r\n  draw() {\r\n    //rending of star\r\n    c.save();\r\n    c.beginPath();\r\n    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\r\n    c.fillStyle = this.color;\r\n    c.shadowColor = `rgba(277, 234, 239`;\r\n    c.shadowBlur = 20;\r\n    c.fill();\r\n    c.closePath();\r\n    c.restore();\r\n  }\r\n\r\n  update() {\r\n    this.draw();\r\n\r\n    // When ball hits bottom screen\r\n    if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {\r\n      // friction multiplier\r\n      this.velocity.y = -this.velocity.y * this.friction;\r\n      this.shatter();\r\n    } else {\r\n      //gravity\r\n      this.velocity.y += this.gravity;\r\n    }\r\n\r\n    // ball hits side screen\r\n    if (\r\n      this.x + this.radius + this.velocity.x > canvas.width ||\r\n      this.x - this.radius <= 0\r\n    ) {\r\n      this.velocity.x = -this.velocity.x * this.friction;\r\n      this.shatter();\r\n    }\r\n\r\n    this.x += 2 * this.velocity.x;\r\n    this.y += this.velocity.y;\r\n  }\r\n\r\n  shatter() {\r\n    console.log(\"shatter\");\r\n\r\n    // make sure star gets smaller each time it shatters\r\n    // runtime bug: also means that the radius has to be divisible by 3\r\n    this.radius -= 3;\r\n    for (let i = 0; i < 6; i++) {\r\n      // this refers to Star object as we are inside Star class\r\n      miniStars.push(new MiniStar(this.x, this.y, 2));\r\n    }\r\n  }\r\n}\r\n\r\n// i have a lot more to learn about javascript\r\nclass MiniStar extends Star {\r\n  // i needed x,y,radius,color in both super and constructor?\r\n  constructor(x, y, radius, color) {\r\n    // super calls the parent constructor\r\n    super(x, y, radius, color);\r\n\r\n    this.velocity = {\r\n      x: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-5, 5),\r\n      y: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-15, 15),\r\n    };\r\n    this.friction = 0.3;\r\n    this.gravity = 0.6;\r\n\r\n    // time to live\r\n    this.ttl = 300;\r\n    this.opacity = 1;\r\n  }\r\n\r\n  draw() {\r\n    //rending of star\r\n    c.save();\r\n    c.beginPath();\r\n    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\r\n    c.fillStyle = `rgba(277, 234, 239, ${this.opacity})`;\r\n    c.shadowColor = `rgba(277, 234, 239`;\r\n    c.shadowBlur = 20;\r\n    c.fill();\r\n    c.closePath();\r\n    c.restore();\r\n  }\r\n\r\n  update() {\r\n    this.draw();\r\n\r\n    // When ball hits bottom screen\r\n    if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {\r\n      // friction multiplier\r\n      this.velocity.y = -this.velocity.y * this.friction;\r\n    } else {\r\n      //gravity\r\n      this.velocity.y += this.gravity;\r\n    }\r\n\r\n    this.x += this.velocity.x;\r\n    this.y += this.velocity.y;\r\n    this.ttl -= 1;\r\n\r\n    // minut by a ratio\r\n    this.opacity -= 3 / this.ttl;\r\n  }\r\n}\r\n\r\nfunction createMountainRange(mountainAmount, height, color) {\r\n  for (let i = 0; i < mountainAmount; i++) {\r\n    const mountainWidth = canvas.width / mountainAmount;\r\n\r\n    c.beginPath();\r\n    // create a triangle\r\n    c.moveTo(i * mountainWidth, canvas.height);\r\n    c.lineTo(i * mountainWidth + mountainWidth, canvas.height);\r\n    c.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height);\r\n    c.lineTo(i * mountainWidth, canvas.height);\r\n    c.fillStyle = color;\r\n    c.fill();\r\n    c.closePath;\r\n  }\r\n}\r\n\r\nfunction createShrine() {\r\n  const half = canvas.width / 2;\r\n  c.beginPath();\r\n  c.moveTo(half - 50, canvas.height - 150);\r\n  c.lineTo(half + 50, canvas.height - 150);\r\n  c.strokeStyle = \"red\";\r\n  c.stroke();\r\n  c.closePath;\r\n}\r\n/////////////////\r\n// Implementation\r\n\r\n// note the order is important\r\n\r\nconst backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);\r\nbackgroundGradient.addColorStop(0, \"#171e26\");\r\nbackgroundGradient.addColorStop(1, \"#3f586b\");\r\n\r\nlet stars;\r\nlet backgroundStars;\r\nlet miniStars;\r\nlet ticker = 0;\r\nlet randomSpawnRate = 75;\r\nlet groundHeight = 100;\r\n\r\nfunction init() {\r\n  stars = [];\r\n  miniStars = [];\r\n  backgroundStars = [];\r\n\r\n  for (let i = 0; i < 150; i++) {\r\n    const x = Math.random() * canvas.width;\r\n    const y = Math.random() * canvas.height;\r\n    const radius = Math.random() * 3;\r\n    backgroundStars.push(new Star(x, y, radius, \"#e3eaef\"));\r\n  }\r\n}\r\n\r\n// Animation Loop\r\nfunction animate() {\r\n  requestAnimationFrame(animate);\r\n  // c.clearRect(0, 0, canvas.width, canvas.height);\r\n  c.fillStyle = backgroundGradient;\r\n  c.fillRect(0, 0, canvas.width, canvas.height);\r\n\r\n  backgroundStars.forEach((backgroundStars) => {\r\n    backgroundStars.draw();\r\n  });\r\n\r\n  createShrine();\r\n\r\n  // use canvas.height for dynamic scaling\r\n  // createMountainRange(1, canvas.height - 50, \"#384551\");\r\n  createMountainRange(2, canvas.height - 200, \"#2b3843\");\r\n  // createMountainRange(3, canvas.height - 400, \"#26333e\");\r\n\r\n  // create floor\r\n  c.fillStyle = \"#182028\";\r\n  c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);\r\n\r\n  stars.forEach((star, index) => {\r\n    star.update();\r\n    if (star.radius == 0) {\r\n      stars.splice(index, 1);\r\n    }\r\n  });\r\n\r\n  miniStars.forEach((miniStar, index) => {\r\n    miniStar.update();\r\n    if (miniStar.ttl == 0) {\r\n      miniStars.splice(index, 1);\r\n    }\r\n  });\r\n\r\n  ticker++;\r\n\r\n  if (ticker % randomSpawnRate == 0) {\r\n    const radius = 12;\r\n    const x = Math.max(radius, Math.random() * canvas.width - radius);\r\n    stars.push(new Star(x, -100, 12, \"white\"));\r\n    randomSpawnRate = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(75, 250);\r\n  }\r\n}\r\n\r\ninit();\r\nanimate();\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function randomIntFromRange(min, max) {\r\n  return Math.floor(Math.random() * (max - min + 1) + min);\r\n}\r\n\r\nfunction randomColor(colors) {\r\n  return colors[Math.floor(Math.random() * colors.length)];\r\n}\r\n\r\nfunction distance(x1, y1, x2, y2) {\r\n  const xDist = x2 - x1;\r\n  const yDist = y2 - y1;\r\n\r\n  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));\r\n}\r\n\r\nmodule.exports = { randomIntFromRange, randomColor, distance };\r\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });