const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Please specify a user');

        if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');

        if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t ban yourself!');

        let reason = args.slice(1).join(" ");

        const banembed = new Discord.MessageEmbed()
        .setTitle('Member Banned')
        .setColor("#29bbff")
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time Banned', client.user.displayAvatarURL())
        .setTimestamp()

        if(!reason) reason = 'Unspecified';

        member.ban({reason: 'your reason here' }).then(message.channel.send(banembed)).catch(err => { 
          message.channel.send('Something went wrong')
            console.log(err)
        })

}

module.exports.config = {
    name: "ban",
    aliases: ["ban","b"]
}