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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// imports

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
var colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];
addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
}); // Objects

var Star = /*#__PURE__*/function () {
  function Star(x, y, radius, color) {
    _classCallCheck(this, Star);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: (Math.random() - 0.5) * 8,
      y: 3
    };
    this.friction = 0.3;
    this.gravity = 1.5;
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw() {
      //rending of star
      c.save();
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.shadowColor = "rgba(277, 234, 239";
      c.shadowBlur = 20;
      c.fill();
      c.closePath();
      c.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw(); // When ball hits bottom screen

      if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {
        // friction multiplier
        this.velocity.y = -this.velocity.y * this.friction;
        this.shatter();
      } else {
        //gravity
        this.velocity.y += this.gravity;
      } // ball hits side screen


      if (this.x + this.radius + this.velocity.x > canvas.width || this.x - this.radius <= 0) {
        this.velocity.x = -this.velocity.x * this.friction;
        this.shatter();
      }

      this.x += 2 * this.velocity.x;
      this.y += this.velocity.y;
    }
  }, {
    key: "shatter",
    value: function shatter() {
      console.log("shatter"); // make sure star gets smaller each time it shatters
      // runtime bug: also means that the radius has to be divisible by 3

      this.radius -= 3;

      for (var i = 0; i < 6; i++) {
        // this refers to Star object as we are inside Star class
        miniStars.push(new MiniStar(this.x, this.y, 2));
      }
    }
  }]);

  return Star;
}(); // i have a lot more to learn about javascript


var MiniStar = /*#__PURE__*/function (_Star) {
  _inherits(MiniStar, _Star);

  var _super = _createSuper(MiniStar);

  // i needed x,y,radius,color in both super and constructor?
  function MiniStar(x, y, radius, color) {
    var _this;

    _classCallCheck(this, MiniStar);

    // super calls the parent constructor
    _this = _super.call(this, x, y, radius, color);
    _this.velocity = {
      x: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-5, 5),
      y: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-15, 15)
    };
    _this.friction = 0.3;
    _this.gravity = 0.6; // time to live

    _this.ttl = 300;
    _this.opacity = 1;
    return _this;
  }

  _createClass(MiniStar, [{
    key: "draw",
    value: function draw() {
      //rending of star
      c.save();
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = "rgba(277, 234, 239, ".concat(this.opacity, ")");
      c.shadowColor = "rgba(277, 234, 239";
      c.shadowBlur = 20;
      c.fill();
      c.closePath();
      c.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw(); // When ball hits bottom screen

      if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {
        // friction multiplier
        this.velocity.y = -this.velocity.y * this.friction;
      } else {
        //gravity
        this.velocity.y += this.gravity;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.ttl -= 1; // minut by a ratio

      this.opacity -= 3 / this.ttl;
    }
  }]);

  return MiniStar;
}(Star);

function createMountainRange(mountainAmount, height, color) {
  for (var i = 0; i < mountainAmount; i++) {
    var mountainWidth = canvas.width / mountainAmount;
    c.beginPath(); // create a triangle

    c.moveTo(i * mountainWidth, canvas.height);
    c.lineTo(i * mountainWidth + mountainWidth + 350, canvas.height);
    c.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height);
    c.lineTo(i * mountainWidth - 350, canvas.height);
    c.fillStyle = color;
    c.fill();
    c.closePath;
  }
}

function createQuad() {
  c.beginPath();
  c.moveTo(0, canvas.height - groundHeight);
  c.lineTo(200, canvas.height - 100 - groundHeight);
  c.lineTo(canvas.width - 200, canvas.height - 100 - groundHeight);
  c.lineTo(canvas.width, canvas.height - groundHeight);
  c.lineTo(0, canvas.height - groundHeight);
  c.fillStyle = "grey";
  c.fill();
  c.closePath;
}

function createShrine(x, y) {
  c.save();
  var half = x; // horizontal poles

  c.beginPath();
  c.ellipse(half, canvas.height - 170 - y, 100, 20, 0, Math.PI - Math.sin(Math.PI / 2), Math.sin(Math.PI / 2), true);
  c.lineWidth = 2;
  c.strokeStyle = "black";
  c.stroke();
  c.beginPath();
  c.moveTo(half - 45, canvas.height - 135 - y);
  c.lineTo(half + 45, canvas.height - 135 - y);
  c.strokeStyle = "red";
  c.stroke();
  c.beginPath();
  c.moveTo(half - 45, canvas.height - 148 - y);
  c.lineTo(half + 45, canvas.height - 148 - y);
  c.strokeStyle = "red";
  c.stroke(); // vertical poles

  c.beginPath();
  c.moveTo(half + 25, canvas.height - groundHeight - y);
  c.lineTo(half + 25, canvas.height - 149 - y);
  c.strokeStyle = "red";
  c.stroke();
  c.beginPath();
  c.moveTo(half - 25, canvas.height - groundHeight - y);
  c.lineTo(half - 25, canvas.height - 149 - y);
  c.strokeStyle = "red";
  c.stroke();
  c.restore();
} /////////////////
// Implementation
// note the order is important


var backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, "#171e26");
backgroundGradient.addColorStop(1, "#3f586b");
var stars;
var backgroundStars;
var miniStars;
var ticker = 0;
var randomSpawnRate = 75;
var groundHeight = 100;

function init() {
  stars = [];
  miniStars = [];
  backgroundStars = [];

  for (var i = 0; i < 150; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var radius = Math.random() * 3;
    backgroundStars.push(new Star(x, y, radius, "#e3eaef"));
  }
} // Animation Loop


function animate() {
  requestAnimationFrame(animate); // c.clearRect(0, 0, canvas.width, canvas.height);

  c.fillStyle = backgroundGradient;
  c.fillRect(0, 0, canvas.width, canvas.height);
  backgroundStars.forEach(function (backgroundStars) {
    backgroundStars.draw();
  }); // use canvas.height for dynamic scaling

  createMountainRange(2, canvas.height - 200, "#2b3843");
  createMountainRange(3, canvas.height - 500, "#384551"); // createMountainRange(3, canvas.height - 400, "#26333e");

  createQuad();
  createShrine(canvas.width / 2, 100); // create floor

  c.fillStyle = "#182028";
  c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
  stars.forEach(function (star, index) {
    star.update();

    if (star.radius == 0) {
      stars.splice(index, 1);
    }
  });
  miniStars.forEach(function (miniStar, index) {
    miniStar.update();

    if (miniStar.ttl == 0) {
      miniStars.splice(index, 1);
    }
  });
  ticker++;

  if (ticker / 2 % randomSpawnRate == 0) {
    var radius = 12;
    var x = Math.max(radius, Math.random() * canvas.width - radius);
    stars.push(new Star(x, -100, 12, "white"));
    randomSpawnRate = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(100, 250);
  }
}

init();
animate();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map