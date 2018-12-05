const Discord = require('discord.js');
const Token = require('./auth.json');
const botconfig = require('./botconfig.json');


const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () =>{
  console.log(`${bot.user.username} is online!`)
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  switch (cmd){
    case `${prefix}hello`:
        return message.channel.send("Hello there!");
        break;
    case `${prefix}ping`:
        return message.channel.send("PONG!");
        break;
    case `${prefix}botinfo`:
        let bicon = bot.user.displayAvatarUrl;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Info")
        .setColor("#487aa0")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username);
        return message.channel.send(botembed);


    default:
        break;
  }

});

bot.login(Token.token);
