interface IMouseTrailConstructor {
  elementId: string;
  idleAnimation: boolean;
  index: number;
  size: number;
  trailCount: number;
}

class Trail {
  public index: number;
  public x: number;
  public y: number;
  public scale: number;
  public trailCount: number;
  public range: number;
  public angleSpeed: number;
  public size: number;
  public idleAnimation: boolean;
  public trail: HTMLSpanElement;
  public lockX = 0;
  public lockY = 0;
  public angleX = 0;
  public angleY = 0;

  constructor({
    elementId,
    idleAnimation,
    index,
    size,
    trailCount,
  }: IMouseTrailConstructor) {
    const trailContainer = document.getElementById(elementId);

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
      this.index > 0 ? `scale(${this.scale}, ${this.scale})` : "";

    trailContainer?.appendChild(this.trail);
  }

  public lock() {
    this.lockX = this.x;
    this.lockY = this.y;
    this.angleX = 2 * Math.PI * Math.random();
    this.angleY = 2 * Math.PI * Math.random();
  }

  public draw(isIdle: boolean, idleAnimationCount: number) {
    if (
      this.idleAnimation &&
      isIdle &&
      this.index >= this.trailCount - idleAnimationCount
    ) {
      this.angleX += this.angleSpeed;
      this.angleY += this.angleSpeed;
      this.y = this.lockY + Math.sin(this.angleY) * this.range;
      this.x = this.lockX + Math.sin(this.angleX) * this.range;
    }

    this.trail.style.top = `${this.y - this.size / 2}px`;
    this.trail.style.left = `${this.x - this.size / 2}px`;
  }
}

export default Trail;
