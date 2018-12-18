const Discord = require('discord.js');
const Token = require('./auth.json');
const fs = require("fs");
const botconfig = require('./botconfig.json');

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./modules",(err, files) =>{

	if(err) console.log(err);

	let jsfile = files.filter(f=> f.split(".").pop() === "js");
	if (jsfile.length <= 0 ){
		console.log("no modules found");
		return;
	}

	jsfile.forEach((f,i) =>{
		let props = require( `./modules/${f}`);
		console.log(`${f} loaded!`);
    bot.commands.set(props.help.Name, props);
  });


});
bot.on("ready", async () =>{
  console.log(`${bot.user.username} is online!`);
	console.log(bot.commands);
  // let nbr = (Math.random * 2);
  // switch (nbr) {
  //   case 0:
  //   console.log()
  //     bot.user.setActivity("some sweet OST from mainstream Anime", {type:"LISTENING"});
  //     break;
  //   case 1:
  //     bot.user.setActivity("HuniePop", {type:"PLAYING"});
  //     break;
  //   default:
	//
	// }
});





bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

	let cmd = bot.commands.get(command.slice(prefix.length));

  // switch (cmd){
  //   case `${prefix}hello`:
  //       return message.channel.send("Hello there!");
  //       break;
  //   case `${prefix}ping`:
  //       return message.channel.send("PONG!");
  //       break;
  //   case `${prefix}botinfo`:
  //       let bicon = bot.user.displayAvatarUrl;
  //       let botembed = new Discord.RichEmbed()
  //       .setDescription("Bot Info")
  //       .setColor("#487aa0")
  //       .setThumbnail(bicon)
  //       .addField("Bot Name", bot.user.username)
  //       .addField("Created on", bot.user.createdAt);
  //       return message.channel.send(botembed);
  //       break;
  //   case `${prefix}serverinfo`:
  //       let sicon = message.guild.displayAvatarUrl;
  //       let serverembed = new Discord.RichEmbed()
  //       .setDescription("Server Information")
  //       .setColor("#ff000f")
  //       .addField("Server Name",message.guild.name)
  //       .addField("Created on",message.guild.createdAt)
  //       .addField("You joined at:", message.member.joinedAt)
  //       .addField("Total Members:", message.guild.memberCount);
  //       return message.channel.send(serverembed);
  //       break;
	//
	//
  //   default:
  //       break;
  // }

});

bot.login(Token.token);
