# React Mouse Trail component by Pj Salita

A mouse trail component for React.

[![npm version][npm-image]][npm-url]
[![npm downloads][npm-downloads-image]][npm-url]
![License][license]

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

## License

MIT License: Pj Salita &lt;pj.salita@gmail.com&gt;

### Reference: [JavaScript mouse trail - Codepen](https://codepen.io/falldowngoboone/pen/PwzPYv)

[npm-image]: https://img.shields.io/npm/v/@pjsalita/react-mouse-trail.svg
[npm-url]: https://npmjs.org/package/@pjsalita/react-mouse-trail
[npm-downloads-image]: https://img.shields.io/npm/dm/@pjsalita/react-mouse-trail.svg
[license]: https://img.shields.io/npm/l/@pjsalita/react-mouse-trail.svg