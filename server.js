const {readFileSync, writeFileSync } = require('fs');

const express = require('express');
const server = express();

server.use(
    express.static('public')
);

// route
server.get('/', (req, res) => {
    const count = readFileSync('./viewed.txt', 'utf-8');
    const newCount = parseInt(count) + 1;
    writeFileSync('./viewed.txt', newCount.toString());

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body id="body">
        <h1>Hello</h1>
        <p>World..</p>
        <p>Viewed: ${newCount}</p>
    </body>
    </html>
    `);
});



server.listen(3000, () => console.log('Sever start'));