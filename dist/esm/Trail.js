var Trail = /** @class */ (function () {
    function Trail(_a) {
        var elementId = _a.elementId, idleAnimation = _a.idleAnimation, index = _a.index, size = _a.size, trailCount = _a.trailCount;
        this.lockX = 0;
        this.lockY = 0;
        this.angleX = 0;
        this.angleY = 0;
        var trailContainer = document.getElementById(elementId);
        this.index = index;
        this.trailCount = trailCount;
        this.size = size;
        this.x = 0;
        this.y = 0;
        this.idleAnimation = idleAnimation;
        this.angleSpeed = 1 / trailCount;
        this.scale = 1 - (1 / trailCount) * index;
        this.trail = document.createElement("span");
        this.range = size / 2 - (size / 2) * this.scale + 2;
        this.trail.style.transform =
            this.index > 0 ? "scale(".concat(this.scale, ", ").concat(this.scale, ")") : "";
        trailContainer === null || trailContainer === void 0 ? void 0 : trailContainer.appendChild(this.trail);
    }
    Trail.prototype.lock = function () {
        this.lockX = this.x;
        this.lockY = this.y;
        this.angleX = 2 * Math.PI * Math.random();
        this.angleY = 2 * Math.PI * Math.random();
    };
    Trail.prototype.draw = function (isIdle, idleAnimationCount) {
        if (this.idleAnimation &&
            isIdle &&
            this.index >= this.trailCount - idleAnimationCount) {
            this.angleX += this.angleSpeed;
            this.angleY += this.angleSpeed;
            this.y = this.lockY + Math.sin(this.angleY) * this.range;
            this.x = this.lockX + Math.sin(this.angleX) * this.range;
        }
        this.trail.style.top = "".concat(this.y - this.size / 2, "px");
        this.trail.style.left = "".concat(this.x - this.size / 2, "px");
    };
    return Trail;
}());
export default Trail;
