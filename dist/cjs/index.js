"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Trail_1 = __importDefault(require("./Trail"));
var styled_components_1 = __importDefault(require("styled-components"));
var TrailContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  border-radius: 0;\n  mix-blend-mode: ", ";\n\n  span {\n    position: absolute;\n    display: block;\n    border-radius: 100%;\n    transform-origin: center;\n    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n  }\n"], ["\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  border-radius: 0;\n  mix-blend-mode: ", ";\n\n  span {\n    position: absolute;\n    display: block;\n    border-radius: 100%;\n    transform-origin: center;\n    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n  }\n"])), function (_a) {
    var inverted = _a.inverted;
    return inverted ? "difference" : "unset";
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var inverted = _a.inverted, color = _a.color;
    return inverted ? "#fff" : color;
});
var MouseTrail = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#fff" : _b, _c = _a.id, id = _c === void 0 ? "react-mouse-trail" : _c, _d = _a.idleAnimation, idleAnimation = _d === void 0 ? false : _d, _e = _a.idleAnimationCount, idleAnimationCount = _e === void 0 ? 5 : _e, _f = _a.inverted, inverted = _f === void 0 ? true : _f, _g = _a.size, size = _g === void 0 ? 20 : _g, _h = _a.trailCount, trailCount = _h === void 0 ? 10 : _h, props = __rest(_a, ["color", "id", "idleAnimation", "idleAnimationCount", "inverted", "size", "trailCount"]);
    var trails = [];
    var mousePosition = {
        x: 0,
        y: 0,
    };
    var animationId;
    var timer;
    var isIdle = false;
    var draw = function () {
        var x = mousePosition.x, y = mousePosition.y;
        trails.forEach(function (trail, index, trails) {
            var nextTrail = trails[index + 1] || trails[0];
            trail.x = x;
            trail.y = y;
            trail.draw(isIdle, idleAnimationCount);
            if (!isIdle || index >= trailCount - idleAnimationCount) {
                x += (nextTrail.x - trail.x) * 0.35;
                y += (nextTrail.y - trail.y) * 0.35;
            }
        });
    };
    var animate = function () {
        draw();
        animationId = window.requestAnimationFrame(animate);
    };
    var loadTrailElements = function () {
        for (var index = 0; index < trailCount; index++) {
            var trail = new Trail_1.default({
                elementId: id,
                idleAnimation: idleAnimation,
                index: index,
                size: size,
                trailCount: trailCount,
            });
            trails.push(trail);
        }
    };
    var cursorListener = function (event) {
        mousePosition.x = event.pageX;
        mousePosition.y = event.pageY;
        setIdleAnimations();
    };
    var touchListener = function (event) {
        mousePosition.x = event.touches[0].clientX;
        mousePosition.y = event.touches[0].clientY;
        setIdleAnimations();
    };
    var setIdleAnimations = function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            isIdle = true;
            for (var _i = 0, trails_1 = trails; _i < trails_1.length; _i++) {
                var trail = trails_1[_i];
                trail.lock();
            }
        }, trailCount * 7.5);
        isIdle = false;
    };
    var removeAllChildNodes = function (parent) {
        while (parent === null || parent === void 0 ? void 0 : parent.firstChild) {
            parent === null || parent === void 0 ? void 0 : parent.removeChild(parent === null || parent === void 0 ? void 0 : parent.firstChild);
        }
    };
    (0, react_1.useEffect)(function () {
        if (window) {
            loadTrailElements();
            window.addEventListener("mousemove", cursorListener);
            window.addEventListener("touchmove", touchListener);
            animate();
        }
        return function () {
            window.removeEventListener("mousemove", cursorListener);
            window.removeEventListener("touchmove", touchListener);
            window.cancelAnimationFrame(animationId);
            var trailContainer = document.getElementById(id);
            removeAllChildNodes(trailContainer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });
    return (react_1.default.createElement(TrailContainer, __assign({ color: color, id: id, inverted: inverted, size: size }, props)));
};
exports.default = MouseTrail;
var templateObject_1;
