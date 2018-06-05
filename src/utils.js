export const chunkArray = (arr, size = 2) => {
  let results = []
  while (arr.length) {
    results.push(arr.splice(0, size))
  }
  return results
}

export const calcValue = (val, base) => {
  return /%$/.test(val) ? (val.replace('%', '') * 100) / base : +val
}
