const cron = require('node-cron');
const axios = require('axios');

// Schedule a task to send an HTTP request every 10 minutes
cron.schedule('*/14 * * * *', () => {
    const URL = process.env.APP_URL || 'http://localhost:3000'
    axios.get( URL + '/health')
        .then(response => {
            console.log('Ping sent successfully');
        })
        .catch(error => {
            console.error('Error sending ping:', error.message);
        });
});
