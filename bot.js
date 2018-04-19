var Discord = require('discord.io');

var bot = new Discord.Client();

bot.on('ready', function () {
  console.log('Connected');
  console.log('Logged in as: ');
  console.log(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, event) {
  if (message === "blablabla") {
    console.log(channelID);
    bot.sendMessage({
      to: channelID,
      message: "pong"
    });
  }
});

bot.login(process.env.BOT_TOKEN);
