"use strict";
const Discord = require('discord.js');
const disco = new Discord.Client();
const prefix = "d>";
const allowedUsers = ["@Gigi#0979 ", "@Douglas#0969", "@Bunny#9897", "@DD#1462"];
const roles = ["KingDisco", "QueenDisco"];
let partyOn = false;

disco.on('ready', () => {
  console.log('Connected');
});

disco.on('message', message => {
  function discoRole() {
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      let random = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
      theRole.edit({ color: random }).catch(e => {
        return
      });
    });
  }
  
  if ((message.content).toLowerCase() === "d>blablabla") {
    message.reply("bla what bish?!", message.channel);
      //.then(msg => console.log(`New message content: ${msg}`))
      //.catch(console.error);
  } else if ((message.content).toLowerCase() === "d>startdisco" && partyOn == false) {
    //if (allowedUsers.includes(message.author.id)) {
      message.reply("Sure thing boss!");
      partyOn = true;
      setInterval(() => { discoRole(); }, 1000);
    //} else {
      //message.reply("U wish u were that important");
    //}
  } else if ((message.content).toLowerCase() === "d>stopdisco" && partyOn == true) {
    //if (allowedUsers.includes(message.author.id)) {
      message.reply("Ok wrap it up, Party is over.");
      partyOn = false;
      setTimeout(() => { console.log(process.exit(0)); }, 1000);
    //}
  }
  
  //if (message.channel
  
});

disco.login(process.env.BOT_TOKEN);
