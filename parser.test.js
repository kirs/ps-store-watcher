const priceParser = require('./parser');

test('parses the sum', () => {
  expect(priceParser("€19,95")).toBe(19.95);
  expect(priceParser("€3,95")).toBe(3.95);
  expect(priceParser("€0,95")).toBe(0.95);
  expect(priceParser("€1,00")).toBe(1.0);
});