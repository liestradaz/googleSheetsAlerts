require('dotenv').config()
var express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const cron = require('./cron');
const { parseBetMessage } = require('./Services/messageParser');

var app = express();
const port = process.env.PORT || 3000;

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(botToken);

// Setup morgan middleware for logging
app.use(morgan('combined'));

app.use(bodyParser.json());

app.post('/cerveceros', (req, res) => {
    // Handle webhook from TradingView
    const data = req.body.data
    console.log('data: ', JSON.stringify(data))
    
    const message = parseBetMessage(data)

    // Send message to Telegram
    bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, { parse_mode: 'HTML' });

    res.status(200).send('Message sent to Telegram');

});

app.get('/health', (req, res) => {
    res.status(200).send('Server is up and running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


