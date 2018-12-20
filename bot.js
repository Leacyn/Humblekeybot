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
		let props = require(`./Modules/${f}`);
		console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });


});
bot.on("ready", async () =>{
  console.log(`${bot.user.username} is online!`);
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
	if(cmd)cmd.run(bot,message,args);

});

bot.login(Token.token);
