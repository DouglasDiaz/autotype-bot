"use strict";
const Discord = require('discord.js');
const disco = new Discord.Client();
const prefix = "d>";
const allowedUsers = ["Gigi#0979 ", "Douglas#0969", "Bunny#9897", "DD#1462"];
const roles = ["🅺🅸🅽🅶", "𝓠𝓾𝓮𝓮𝓷"];

disco.on('ready', () => {
  console.log('Connected');
});

disco.on('message', message => {
  if (message.content === "d>blablabla") {
    message.reply("blablabla?");
  }

  function discoRole() {
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      let random = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
      theRole.edit({ color: random }).catch(e => {
        return
      });
    });
  }

  if (message.content === "d>startdisco") {
    if (allowedUsers.includes(message.author.id)) {
      setInterval(() => { discoRole(); }, 300);
    }
  } else {
    if (message.content === "d>stopdisco") {
      if (allowedUsers.includes(message.author.id)) {
        setTimeout(() => { console.log(process.exit(0)); }, 300);
      }
    }
  }
});

disco.login(process.env.BOT_TOKEN);
