/*
Importing CommonJS modules with tsconfig.json 
esModuleInterop="true" requires ES6 compliant 
import syntax Module import syntax in relation 
to TypeScript. 
See https://stackoverflow.com/a/56348146
*/ 
import express from 'express';
import fs from 'fs';

const port = process.env.PORT || 3000;
const app = express();


// app.use(
//     express.static('public')
// );

// route
app.get('/', (req, res) => {
    const count = fs.readFileSync('./src/viewed.txt', 'utf-8');
    const newCount = parseInt(count) + 1;
    fs.writeFileSync('./src/viewed.txt', newCount.toString());

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body id="body">
        <h1>Rosecort</h1>
        <h2>${process.env.GREETINGS_TEXT}</h2>
        <p>Nettsiden har blitt åpnet: ${newCount} ganger!</p>
    </body>
    </html>
    `);
});

app.listen(port, () => console.log(`[Server] Server is running at localhost:${port}`));