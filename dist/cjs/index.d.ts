import React from "react";
export interface MouseTrailProps extends React.ComponentPropsWithRef<"div"> {
    color?: string;
    id?: string;
    idleAnimation?: boolean;
    idleAnimationCount?: number;
    inverted?: boolean;
    size?: number;
    trailCount?: number;
}
declare const MouseTrail: React.FC<MouseTrailProps>;
export default MouseTrail;
