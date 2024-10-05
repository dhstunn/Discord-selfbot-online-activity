const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const token = '';  // Use process.env.TOKEN in production for safety
const startTime = Date.now();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}!`);

    client.user.setPresence({
        status: 'idle',  // set the status to 'dle
        activities: [{
            name: 'game name',  // game name
            type: 'PLAYING',  // Activity type (PLAYING, STREAMING, etc.)
            timestamps: { start: startTime },  // This will show how long you've been playing
            application_id: 'id here',  // Replace with your application id for a picture
        }]
    });

    console.log('working saar');
});

client.on('error', (error) => {
    console.error('Error:', error);
});

client.on('disconnect', () => {
    console.log('disconnected trying to reconnect');
    client.login(token);
});

client.login(token);
