const {readFileSync, writeFileSync } = require('fs');

const express = require('express');
const app = express();


// route
app.get('/', (req, res) => {
    const count = readFileSync('./viewed.txt', 'utf-8');
    console.log(count);
    const newCount = parseInt(count) + 1;
    writeFileSync('./viewed.txt', newCount.toString());

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <h1>Hello</h1>
        <p>World..</p>
        <p>Viewed: ${newCount}</p>
    </body>
    </html>
    `);
});


app.listen(5000, () => console.log('test'));