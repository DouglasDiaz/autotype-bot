const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Connected');
});

client.on('message', message => {
  if (message.content === "blablabla") {
    message.reply("blablabla?");
  }
});

client.login(process.env.BOT_TOKEN);
