/*
Importing CommonJS modules with tsconfig.json 
esModuleInterop="true" requires ES6 compliant 
import syntax Module import syntax in relation 
to TypeScript. 
See https://stackoverflow.com/a/56348146
*/
import express from 'express';
import { makeCarFactory } from './infrastructure/carFactory';
import { makeCarBuilder } from './usecases/createCar/carFactory';


const port = process.env.PORT || 3000;
const app = express();
const carFactory = makeCarFactory({
    electric: true,
    fourWheelDrive: true,
    used: false
});
const carBuilder = makeCarBuilder(carFactory);

const success = carBuilder.createCar({
    brand: 'Toyota',
    model: 'Prius',
    date: new Date()
});
var resultMessage = 'Car creation still in progress.';
if (success) {
    resultMessage = 'Car creation successful';
} else {
    resultMessage = 'Car creation failed';
}

// TODO: Handle routes, API calls, etc.
app.get('/', (req, res) => {
    res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body id="body">
                <h1>Status update</h1>
                <h2>${process.env.GREETINGS_TEXT}</h2>
                <p>${resultMessage}</p>
            </body>
            </html>
        `);
});

app.listen(port, () => console.log(`[Server] Server is running at localhost:${port}`));