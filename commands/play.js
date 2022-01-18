module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    const string = args.join(" ")
    if (!string) return message.channel.send(`${bot.emotes.error} | Please enter a song url or query to search.`)
    try {
      bot.distube.play(message, string)
    } catch (e) {
        message.channel.send(`${bot.emotes.error} | Error: \`${e}\``)
    }
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}
