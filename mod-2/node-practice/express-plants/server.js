const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

app.get('/:index', (req, res) => {
    res.send(plants[req.params.index]);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});