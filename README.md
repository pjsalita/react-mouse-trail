# React Mouse Trail component by Pj Salita

A mouse trail component for React.

Live demo: [here](https://pjsalita.github.io/react-mouse-trail)

## Installation

```bash
npm i @pjsalita/react-mouse-trail
```

or

```bash
yarn add @pjsalita/react-mouse-trail
```

## Usage

```js
import MouseTrail from "@pjsalita/react-mouse-trail";

function MyComponent() {
  const config = {
    color: "#000000",
    idleAnimation: true,
    idleAnimationCount: 10,
    inverted: true,
    size: 20,
    trailCount: 20,
  };

  return <MouseTrail {...config} />;
}
```

### Reference: [JavaScript mouse trail - Codepen](https://codepen.io/falldowngoboone/pen/PwzPYv)
