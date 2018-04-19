"use strict";

const Discord = require('discord.js');
const disco = new Discord.Client();
const prefix = "d>;
const allowedUsers = config.allowedUsers;
const roles = ["🅺🅸🅽🅶", "𝓠𝓾𝓮𝓮𝓷"];

disco.on('ready', () => {
  console.log('Connected');
});

disco.on('message', message => {
  if (message.content === ">blablabla") {
    message.reply("blablabla?");
  }
  
  function discoRole() {
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      theRole.edit({color: random}).catch(e => {
        return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }

  if(message.content.startsWith(prefix + "startdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, config.ms);
    message.channel.sendMessage("```css\nDiscoing...```");
    message.channel.sendMessage("Please make sure you read the README, you could get IP banned from discord because of ratelimits.");
  } else {
    message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
} else

if(message.content.startsWith(prefix + "stopdisco")) {
  if(allowedUsers.includes(message.author.id)) {
  message.channel.sendMessage("I've stopped discoing.");
  setTimeout(() => { console.log(process.exit(0)); }, 300);
} else {
  message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
}
});

disco.login(process.env.BOT_TOKEN);
