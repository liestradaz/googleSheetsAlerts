require('dotenv').config()
var express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

var app = express();
const port = 3000;

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(botToken);

// Setup morgan middleware for logging
app.use(morgan('combined'));

app.use(bodyParser.json());

app.post('/supertrendAlerts', (req, res) => {
    // Handle webhook from TradingView
    const message = req.body.message;
    console.log('Message: ', message)

    // Send message to Telegram
    bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message);

    res.status(200).send('Message sent to Telegram');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


