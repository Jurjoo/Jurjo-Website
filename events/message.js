module.exports = async (bot, message) => {
	if (message.author.bot) return;

	const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

	if (message.author.bot || message.channel.type === 'dm') return;
	const prefix = ".";
  atbot= {
    title: "Hey!",
    description: `${message.guild.name}'s Prefix is **${prefix}**\nPara ver mis comandos **pon ${prefix}help**\n`,
    color: 2735103,
    footer: {
      text: "xurxo_rod",
      icon_url: "https://images-ext-2.discordapp.net/external/bV8we0aHLGWkBgqR4NIqDEpSgF77hCOiZkWwZiB1IwE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/902202388927115364/c23d443137aa2c7364d69d255a7eb7e6.png?width=411&height=411"
    },
    timestamp: new Date(),
    thumbnail: {
      url: "https://images-ext-2.discordapp.net/external/bV8we0aHLGWkBgqR4NIqDEpSgF77hCOiZkWwZiB1IwE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/902202388927115364/c23d443137aa2c7364d69d255a7eb7e6.png?width=411&height=411"
    } 
  };

	if (message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`))) return message.channel.send({ embed: atbot }).catch(console.error);;

	if (!message.content.startsWith(prefix)) return;
	const commandfile = bot.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length).toString().toLowerCase()));;
	if (commandfile) {
		commandfile.run(bot, message, args);
	}

}
