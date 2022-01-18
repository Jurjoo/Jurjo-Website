module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

    let queue = await bot.distube.getQueue(message);
    const playing = bot.distube.isPlaying(message)

    if(queue) { 
      if(!playing) { //Checking if thers any song in pause
        bot.distube.resume(message) // if so, resume it
        bot.distube.skip(message) // then skip it 
        message.channel.send('Skipped the song in queue!')
      }
      else{
      bot.distube.skip(message)

      message.channel.send('Skipped!')
      }
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "skip",
    aliases: ["n","skip","next"]
}