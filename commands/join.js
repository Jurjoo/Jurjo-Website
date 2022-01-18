module.exports.run = async (bot, message, args) => {
  const voice = message.member.voice.channel;
  if (!voice) return console.error("The channel does not exist!");
  voice.join().then(connection => {
    // Yay, it worked!
    console.log(`Joined ${voice}!`);
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  })
}

module.exports.config = {
    name: "join",
    aliases: ['j']
}