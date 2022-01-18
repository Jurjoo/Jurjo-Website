module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    const queue = bot.distube.getQueue(message)
    if (!queue) return message.channel.send(`${bot.emotes.error} | There is nothing in the queue right now!`)
    if (queue.pause) {
      bot.distube.resume(message)
      return message.channel.send("Resumed the song for you :)")
    }
    bot.distube.pause(message)
    message.channel.send("Paused the song for you :)")
}

module.exports.config = {
    name: "pause",
    aliases: ["hold"]
}
