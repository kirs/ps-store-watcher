function parsePrice(str) {
  let re = str.match(/(\d+),(\d+)/)

  const f = parseInt(re[1])
  const l = parseInt(re[2])

  return f + (l / 100);
}

module.exports = parsePrice;
