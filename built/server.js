var _a = require('fs'), readFileSync = _a.readFileSync, writeFileSync = _a.writeFileSync;
var express = require('express');
var server = express();
server.use(express.static('public'));
// route
server.get('/', function (req, res) {
    var count = readFileSync('./src/viewed.txt', 'utf-8');
    var newCount = parseInt(count) + 1;
    writeFileSync('./src/viewed.txt', newCount.toString());
    res.send("\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    </head>\n    <body id=\"body\">\n        <h1>Rosecort</h1>\n        <h2>".concat(process.env.GREETINGS_TEXT, "</h2>\n        <p>Nettsiden har blitt \u00E5pnet: ").concat(newCount, " ganger!</p>\n    </body>\n    </html>\n    "));
});
server.listen(3000, function () { return console.log('Sever start'); });
