const express = require('express');

var app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.send({
        name: 'Ankit',
        likes: [
            'biking',
            'cities'
        ]
    });
});

app.listen(3000, () => {
    console.log('Server up and running...')
});