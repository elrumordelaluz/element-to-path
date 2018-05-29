<p align="center">
  <img alt="Element to Path" title="Element to Path" src="https://cdn.rawgit.com/elrumordelaluz/element-to-path/8f33cf5f/logo.svg" width="450">
</p>

<p align="center">
  Sometimes is useful to have an <code>svg</code> done with <code>path</code>s instead of elements <br />
  such as <code>rect</code>, <code>circle</code>, <code>ellipse</code>, <code>line</code>, <code>polyline</code> or <code>polygon</code>. <br/>
  Like when you apply <em>Compound Path</em> in <em>Adobe Illustrator</em>.
</p>

## Install

```zsh
yarn add element-to-path
```

## Usage

`Object` element: [svgson](https://github.com/elrumordelaluz/svgson-next) node notation

```js
{
  type: 'element',
  name: 'rect|circle|ellipse|line|polyline|polygon|path'
  attributes: {
    // depends on each element
  }
}
```

## Example

```js
const toPath = require('element-to-path')

const circle = {
  type: 'element',
  name: 'circle',
  attributes: {
    cx: 10,
    cy: 10,
    r: 5,
  },
}

const path = toPath(circle)
// 'M15 10 A5 5 0 0 1 10 15 A5 5 0 0 1 5 10 A5 5 0 0 1 15 10 z'
```
