const svgson = require('svgson-next').default
const stringify = require('svgson-next').stringify
const copy = require('fast-copy').default
const toPath = require('./index')
const { write: copyToClipboard } = require('clipboardy')

const SVG = `
<svg viewBox="0 0 65 65">
  <rect x="0.5" y="0.5" fill="none" stroke="#000000" stroke-miterlimit="10" width="64" height="64"/>
  <line fill="none" stroke="#000000" stroke-miterlimit="10" x1="45.3" y1="4.4" x2="11.9" y2="62.2"/>
  <circle fill="none" stroke="#000000" stroke-miterlimit="10" cx="19" cy="18.1" r="9.6"/>
  <ellipse fill="none" stroke="#000000" stroke-miterlimit="10" cx="46.2" cy="47" rx="7.7" ry="10.3"/>
  <polyline fill="none" stroke="#000000" stroke-miterlimit="10" points="7.5,32.5 21.3,33.3 14.4,47 "/>
  <polygon fill="none" stroke="#000000" stroke-miterlimit="10" points="48.4,10.3 57.2,23.7 42.3,28.4 "/>
  <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M21.8,60.4c0,0,0.2-18.3,4.4-10.1s6.5,3.2,6.5,3.2"/>
</svg>
`

const elemToPath = node => {
  let o = copy(node)

  if (/(rect|circle|ellipse|polygon|polyline|line|path)/.test(o.name)) {
    o.attributes = Object.assign({}, o.attributes, {
      d: toPath(o),
    })
    for (const attr in o.attributes) {
      if (!/fill|stroke|opacity|d/.test(attr)) {
        delete o.attributes[attr]
      }
    }
    o.name = 'path'
  } else if (o.children && Array.isArray(o.children)) {
    o.children = o.children.map(elemToPath)
  }

  return o
}

const init = async input => {
  const json = await svgson(input)
  const converted = elemToPath(json)
  const result = stringify(converted)
  console.log(result)
  await copyToClipboard(result)
}

init(SVG)
