module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    const seekRAW = message.content.trim().split(/ +/g);
    var seekingValue = seekRAW[1] + "0000"
    bot.distube.seek(message, Number(seekingValue));
}

module.exports.config = {
    name: "seek",
    aliases: ["ss","seek"]
}