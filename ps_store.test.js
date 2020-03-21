const getGamePrice = require('./ps_store');

test('parses valid page', () => {
  const gameUrl = "https://store.playstation.com/en-fi/product/EP0006-CUSA01866_00-NFS16SE000000001"

  return getGamePrice(gameUrl).then(function(price) {
    expect(price).toBeGreaterThan(0);
  })
});

test('parses invalid page', () => {
  const gameUrl = "https://ya.ru"
  return getGamePrice(gameUrl).catch(function(err) {
    expect(err).toBe("Unable to find CSS selector");
  })
});