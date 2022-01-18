module.exports.run = async (bot, message, args) => {
  const db = require("quick.db");
  const discord = require("discord.js");
  owner = '844098725823512576';
  if (message.author == owner) {
    if(!args.length) {
    return message.channel.send("Please enter a status message for the bot followed by .status")
    }
    db.set(`status`, args.join(" "));
    bot.user.setActivity(args.join(" ")); 
    message.channel.send("Updated the bot status");
    }
 else return message.channel.send(`This Command is restrictive to the Owner of this server ${message.guild.owner}`);
}
module.exports.config = {
    name: "status",
    aliases: ["setstatus","status"]
}
