const jsdom = require("jsdom");
const request = require('request');
const { JSDOM } = jsdom;
const priceParser = require('./parser');

function getGamePrice(url) {
  return new Promise(function(resolutionFunc, rejectionFunc) {
    request(url, { }, (err, res, body) => {
      if (err) { return rejectionFunc(err); }

      const dom = new JSDOM(body);
      const domEl = dom.window.document.querySelector(".price-display__price");
      if(domEl == null) {
        return rejectionFunc("Unable to find CSS selector")
      }
      const priceContent = domEl.textContent;
      return resolutionFunc(priceParser(priceContent));
    });
  })
}

module.exports = getGamePrice;