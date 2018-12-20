const Discord = require("Discord.js");

module.exports.run = async (bot, message, args) =>{
        return message.channel.send({embed: {
          description: "Bot Info",
          color:0x487aa0,
          fields:[{
            name:"Bot name",
            value: bot.user.username},
            {
              name:"Created on",
              value: bot.user.createdAt
            }]
        }});

}

module.exports.help = {
    name: "Botinfo",
    usage: "I just give info. Coincedentally about me!"
}
