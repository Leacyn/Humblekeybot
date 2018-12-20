const Discord = require("Discord.js");

module.exports.run = async (bot, message, args) =>{
  return message.channel.send("PONG!");

}

module.exports.help = {
    name: "ping",
    usage: "just Ping me!"
}
