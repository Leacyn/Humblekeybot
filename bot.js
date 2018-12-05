const Discord = require('discord.js');
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



    default:
        break;
  }

});

bot.login(botconfig.token);
