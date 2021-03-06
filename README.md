🔍 React Imagezoomer 🔎
===

![imagezoomergif](https://github.com/caffeinalab/react-imagezoomer/blob/master/docs/video.gif)


**React Imagezoomer** is an `zoomer` component for [React.js](https://facebook.github.io/react/).

With **React Imagezoomer** you can specify an image and zoom it using your mouse or your finger.

You can find the preview on [Storybook](https://caffeinalab.github.io/react-imagezoomer/)

Getting started
---

1. To include the code locally install `@caffeina.dev/react-imagezoomer` using npm:

  ```
  npm install @caffeina.dev/react-imagezoomer --save
  ```

2. To include the code globally from a cdn:
  ```html
  <script src="https://unpkg.com/@caffeina.dev/react-imagezoomer/dist/lib/"></script>
  ```

Dependencies
---
`react-imagezoomer` has no external dependencies, aside for the usual `react` and `prop-types`.


Documentation
---
Include `react-imagezoomer` in your component:

```js
// using an ES6 transpiler, like babel
import ImageZoomer from 'react-imagezoomer'

// otherwise
let ImageZoomer = require('react-imagezoomer')
```

and set a source image to zoom

```js
const myComponent = () => <ImageZoomer image="https://source.unsplash.com/random">
```

you can also pass your personal classes to change the default style of the package

```js
const conf = {
 zommerContainerClass: 'imagezoomer',
 zommerClass: 'imagezoomer__inner'
}
const myComponent = () => <ImageZoomer conf={conf} image="https://source.unsplash.com/random">
```

you can change the default zoom level passing it in the config props

```js
const conf = {
 zoom: 12
}
const myComponent = () => <ImageZoomer conf={conf} image="https://source.unsplash.com/random">
```


Contributing
---

#### **Reporting bugs**

* Open a GitHub issue 

#### **Contributing with patches and bug fixes**

* Open a new GitHub pull request with the patch.
* Ensure the PR description clearly describes the problem and solution.


Contributors
---

- Riccardo Canella [@thecreazy](https://github.com/thecreazy)
- Alberto Parziale [@lavolpecheprogramma](https://github.com/lavolpecheprogramma)


License
---

MIT