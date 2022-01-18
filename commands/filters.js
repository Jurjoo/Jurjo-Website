module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
  const queue = bot.distube.getQueue(message)
  if (!queue) return message.channel.send(`${bot.emotes.error} | There is nothing in the queue right now!`)
  if (args[0] === "off" && queue.filter) bot.distube.setFilter(message, queue.filter)
  else if (Object.keys(bot.distube.filters).includes(args[0])) bot.distube.setFilter(message, args[0])
  else if (args[0]) return message.channel.send(`${bot.emotes.error} | Not a valid filter`)
  message.channel.send(`Current Queue Filter: \`${queue.filter || "Off"}\``)
}

module.exports.config = {
    name: "filter",
    aliases: ['f','filters']
}
