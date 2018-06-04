const { chunkArray } = require('./utils')

const scale = (path, { scale = 1, scaleY, round = 3 } = {}) => {
  const doValue = val => (round ? +val.toFixed(round) : val)
  const _x = scale
  const _y = scaleY || scale

  return path.map(({ command, values }) => {
    const c = command.toLowerCase()
    if (c === 'v' || c === 'h') {
      const [val] = values
      return {
        command,
        values: [doValue(val * (c === 'v' ? _y : _x))],
      }
    }

    if (c === 'a') {
      const chunked = chunkArray(values, 7)
      const v = chunked.reduce((acc, next) => {
        const [rx, ry, xAxisRotation, largeArcFlag, sweepFLag, x, y] = next
        return [
          ...acc,
          doValue(rx * _x),
          doValue(ry * _y),
          xAxisRotation,
          largeArcFlag,
          sweepFLag,
          doValue(x * _x),
          doValue(y * _y),
        ]
      }, [])

      return {
        command,
        values: v,
      }
    }

    return {
      command,
      values: values.map((val, i) => {
        return doValue((val *= i % 2 ? _x : _y))
      }),
    }
  })
}

module.exports = scale
