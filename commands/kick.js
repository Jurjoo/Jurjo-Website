const discord = require('discord.js');
const moment = require('moment');
module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permissions to run this command.")
let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if (!User) return message.channel.send("Invalid User")
if (User == message.member) return message.reply("Cannot Kick Yourself Baka!")
let banReason = args.join(" ").slice(22);
if (!banReason) {
banReason = "None"
}

let embed = new discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Kicked ${User} (${User.id})`)
    .setThumbnail("https://cdn.simer00.repl.co/content/simer00/simer00/logo.gif")
    .addField("Joined At", moment(User.joinedAt).format("LLLL"))
    .addField("Account Created At", moment(User.user.createdAt).format("LLLL"))
    .setColor("#29bbff")
    .setTimestamp()
    .setFooter(`Kicked by ${message.author.username}`);

User.kick({reason: banReason}).then(message.channel.send(embed))
}

module.exports.config = {
    name: "kick",
    aliases: ['k','kick']
}