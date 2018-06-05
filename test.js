import test from 'ava'
import toPath from './dist/element-to-path.cjs'

const rect = {
  type: 'element',
  name: 'rect',
  attributes: {
    x: 0.5,
    y: 0.5,
    width: 10,
    height: 10,
  },
}

const rectToPath = 'M0.5 0.5 H10.5 V10.5 H0.5 V0.5 z'

test('Rect to Path', t => {
  const path = toPath(rect)
  t.is(path, rectToPath)
})

const circle = {
  type: 'element',
  name: 'circle',
  attributes: {
    cx: 10,
    cy: 10,
    r: 5,
  },
}

const circleToPath =
  'M15 10 A5 5 0 0 1 10 15 A5 5 0 0 1 5 10 A5 5 0 0 1 15 10 z'

test('Circle to Path', t => {
  const path = toPath(circle)
  t.is(path, circleToPath)
})

const ellipse = {
  type: 'element',
  name: 'ellipse',
  attributes: {
    cx: 10,
    cy: 10,
    rx: 5,
    ry: 7,
  },
}

const ellipseToPath =
  'M15 10 A5 7 0 0 1 10 17 A5 7 0 0 1 5 10 A5 7 0 0 1 15 10 z'

test('Ellipse to Path', t => {
  const path = toPath(ellipse)
  t.is(path, ellipseToPath)
})

const line = {
  type: 'element',
  name: 'line',
  attributes: {
    x1: 3,
    y1: 2,
    x2: 10,
    y2: 7,
  },
}

const lineToPath = 'M3 2 L10 7'

test('Line to Path', t => {
  const path = toPath(line)
  t.is(path, lineToPath)
})

const polyline = {
  type: 'element',
  name: 'polyline',
  attributes: {
    points: '5,2.5 10,3 12.5,14.3',
  },
}

const polylineToPath = 'M5 2.5 L10 3 L12.5 14.3'

test('Polyline to Path', t => {
  const path = toPath(polyline)
  t.is(path, polylineToPath)
})

const polygon = {
  type: 'element',
  name: 'polygon',
  attributes: {
    points: '5,2.5 10,3 12.5,14.3',
  },
}

const polygonToPath = 'M5 2.5 L10 3 L12.5 14.3 Z'

test('Polygon to Path', t => {
  const path = toPath(polygon)
  t.is(path, polygonToPath)
})

const d = 'M21.8,60.4c0,0,0.2-18.3,4.4-10.1s6.5,3.2,6.5,3.2'
const path = {
  type: 'element',
  name: 'path',
  attributes: {
    d,
  },
}

test('Same when is Path', t => {
  t.is(toPath(path), d)
})

const rectCustomKeys = {
  type: 'element',
  foo: 'rect',
  props: {
    x: 0.5,
    y: 0.5,
    width: 10,
    height: 10,
  },
}

const rectToPathCustomKeys = 'M0.5 0.5 H10.5 V10.5 H0.5 V0.5 z'

test('Custom keys', t => {
  const path = toPath(rectCustomKeys, {
    nodeName: 'foo',
    nodeAttrs: 'props',
  })
  t.is(path, rectToPathCustomKeys)
})

// Results: https://codepen.io/elrumordelaluz/pen/JZjaxw?editors=1000
