const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Connected');
});

client.on('message', message => {
  if (message.content === "blablabla") {
    message.reply("blablabla?");
  }
  if (message.substring(0, 1) == '>') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'blablabla':
                client.sendMessage({
                    to: channelID,
                    message: 'Blablabla'
                });
            break;
         }
     }
});

client.login(process.env.BOT_TOKEN);
