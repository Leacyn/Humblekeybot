const Discord = require("Discord.js");

module.exports.run = async (bot, message, args) =>{
  return message.channel.send("Hello there!");

}

module.exports.help = {
  Name: "Ping"
}
