const Discord = require("Discord.js");

module.exports.run = async (bot, message, args) =>{
        return message.channel.send({embed: {
          description: "Server Info",
          color:0xff000f,
          fields:[{
            name:"Server Name",
            value: message.guild.name},
            {
              name:"Created on",
              value: message.guild.createdAt
            },
            {
              name: "You joined at:",
              value: message.member.joinedAt
            },
            {
              name: "Total Members",
              value: message.guild.memberCount
            }]
        }});

}

module.exports.help = {
    name: "Serverinfo",
    usage: "I just give info. Coincedentally about this server!"
}
