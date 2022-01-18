const Discord = require('discord.js');
const moment = require('moment');
module.exports.run = async (bot, message, args) => {
  const membersembed = new Discord.MessageEmbed()
        .setTitle('Membercount')
        .setColor("#29bbff")
        .setThumbnail('https://images-ext-2.discordapp.net/external/bV8we0aHLGWkBgqR4NIqDEpSgF77hCOiZkWwZiB1IwE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/902202388927115364/c23d443137aa2c7364d69d255a7eb7e6.png?width=411&height=411')
        .addField("Member Count", `This server has ${message.guild.memberCount} members`)
        .setFooter('Jurjo™', 'https://images-ext-2.discordapp.net/external/bV8we0aHLGWkBgqR4NIqDEpSgF77hCOiZkWwZiB1IwE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/902202388927115364/c23d443137aa2c7364d69d255a7eb7e6.png?width=411&height=411')
        .setTimestamp()
      message.channel.send(membersembed)
}

module.exports.config = {
    name: "membercount",
    aliases: ['members']
}