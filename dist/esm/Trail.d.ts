interface IMouseTrailConstructor {
    elementId: string;
    idleAnimation: boolean;
    index: number;
    size: number;
    trailCount: number;
}
declare class Trail {
    index: number;
    x: number;
    y: number;
    scale: number;
    trailCount: number;
    range: number;
    angleSpeed: number;
    size: number;
    idleAnimation: boolean;
    trail: HTMLSpanElement;
    lockX: number;
    lockY: number;
    angleX: number;
    angleY: number;
    constructor({ elementId, idleAnimation, index, size, trailCount, }: IMouseTrailConstructor);
    lock(): void;
    draw(isIdle: boolean, idleAnimationCount: number): void;
}
export default Trail;
