var aws = require('aws-sdk');
var ses = new aws.SES({region: 'eu-west-1'});

const getGamePrice = require('./ps_store');
// Need for Speed
const gameUrl = "https://store.playstation.com/en-fi/product/EP0006-CUSA01866_00-NFS16SE000000001"

exports.handler = (event, context, callback) => {
  getGamePrice(gameUrl).then(function(result) {
    console.log(result)

    var params = {
        Destination: {
            ToAddresses: ["kir@kirshatrov.com"]
        },
        Message: {
            Body: {
                Text: { Data: "Price of NFS: " + result }
            },
            Subject: { Data: "Test Email" }
        },
        Source: "kir@kirshatrov.com"
    };

    ses.sendEmail(params, function (err, data) {
      callback(null, {err: err, data: data});
      if (err) {
          console.log(err);
          context.fail(err);
      } else {
          console.log(data);
          context.succeed(event);
      }
    });
  }).catch(function(err) { context.fail(err) })
};

