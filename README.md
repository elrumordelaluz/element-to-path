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

## API

### toPath(elem,[options])

#### elem

Type: `Object`
Element to convert. Default notation is [svgson](https://github.com/elrumordelaluz/svgson) based:

```js
{
  type: 'element', // could be ignored
  name: 'rect|circle|ellipse|line|polyline|polygon|path'
  attributes: {
    // depends on each element
  }
}
```

#### options

Type: `Object`

##### nodeName

Type: `string`<br>
Default: `name`

Use custom **name** key in `elem` input

##### nodeAttrs

Type: `string`<br>
Default: `attributes`

Use custom **attributes** key in `elem` input

## Related

[path-that-svg!](https://github.com/elrumordelaluz/path-that-svg) Convert an entire `SVG` using `path`s

All calculations are based on [W3C Spec](https://www.w3.org/TR/SVG2/shapes.html)

## License

MIT © [Lionel Tzatzkin](https://lionel.tzatzk.in)
