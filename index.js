const { Client, Intents } = require('discord.js');
const token = process.env.TOKEN;
const { roll } = require('./roll');
const { read } = require('./read');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async msg => {
    if (msg.author.username == "CyberRoll") {
        return;
    }
    if (msg.content.slice(0, 4) == "roll") {
        result = roll(msg.content.slice(5));
        msg.reply(result)
    }
    else if (msg.content.slice(0, 2) == "cp") {
        if (msg.content.slice(3) == "чарник") {
            const pers = JSON.stringify(require("./data/" + msg.author.id), null, '\t');
            console.log(pers);
            msg.reply(pers);
            return;
        }
        formulae = await read(msg.author.id, msg.content.slice(3));
        if (formulae == "err") {
            msg.reply("Навык не изучен");
        }
        else {
            res = formulae[0] + " = " + roll(formulae[1]);
            msg.reply(res);
        }
    }
    else if (msg.content == "ping") {
        msg.reply(msg.author.username + ": " + msg.content);
    }
});

client.login(token);