require('dotenv').config()
var express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

var app = express();
const port = 3000;

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(botToken);

app.use(bodyParser.json());

app.post('/supertrendAlerts', (req, res) => {
    // Handle webhook from TradingView
    console.log('req',req)

    const message = req.body.message;


    // Send message to Telegram
    bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message);

    res.status(200).send('Message sent to Telegram');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


