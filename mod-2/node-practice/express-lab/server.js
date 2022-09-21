const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, stranger</h1>');
});

app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
	res.send('Hello ' + req.params.name + " its so great to see you!");
});

app.get('/tip', (req, res) => {
    res.send('<h1>Hello, stranger</h1>');
});

app.get('/tip/:tip/:total', (req, res) => {
    const tipPercentage = (req.params.tip / req.params.total) * 100;
	res.send(`Your tip was ${tipPercentage}% of $${req.params.total}`);
});

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    const random = Math.floor(Math.random() * (answers.length - 0)) + 0;
	res.send(`<h1>Will I be a millionaire? ${answers[random]}</h1>`);
});

app.listen(PORT,() => {
    console.log('listening on port' , PORT);
});