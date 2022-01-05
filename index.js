const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { roll } = require('./roll');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', msg => {
    if (msg.author.username == "CyberRoll") {
        return;
    }
    if (msg.content.slice(0, 4) == "roll") {
        result = roll(msg.content.slice(5));
        msg.content.indexOf
        msg.reply(result)
    }
    else {
        msg.reply(msg.author.username + ": " + msg.content);
    }
});

client.login(token);