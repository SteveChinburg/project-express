const express = require('express');
const app = express();

app.post('/', function (req, res) {
    res.send('Data can be created using this method (POST)');
    console.log('POST was called')
});

app.get('/', function (req, res) {
    res.send('Get is used to read information.');
    console.log('GET was called.')
});

app.delete('/', function (req, res) {
    res.send('Only use DELETE to remove the specified target.');
    console.log("DELETE was called")

app.put('/', function (req, res); {
    res.send('Use this (PUT) to upsate information'.);
    console.log("DELETE was called);
});

] 
app.listen(3000, () => {
    console.log('Simple Server is running on 3000');
});

app.use((require("body-parser")()));

app.post('/fullstory', (req, res) => {
    console.log("Name: " + req.body.name);
    console.log("Animal:" + req.body.animal);
    console.log("Years: " + req.body.years);
    res.redirect(303, '/success');
})

app.post('/fullstory', (req, res) => {
    if (req.xhr || req.accepts('json,html') === 'json') {
        // handle errors if any
        res.send({
            success: true
        });
    } else {
        // handle errors if any
        res.redirect(303, '/success');
    }
});