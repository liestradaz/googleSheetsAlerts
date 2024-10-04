require('dotenv').config()
var express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const cron = require('./cron');

var app = express();
const port = process.env.PORT || 3000;

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(botToken);

// Setup morgan middleware for logging
app.use(morgan('combined'));

app.use(bodyParser.json());

app.post('/cerveceros', (req, res) => {
    // Handle webhook from TradingView
    console.log('req',req)
    const message = req.body;
    console.log('Message: ', message)

    // Send message to Telegram
    bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message);

    res.status(200).send('Message sent to Telegram');

});

app.get('/health', (req, res) => {
    res.status(200).send('Server is up and running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


