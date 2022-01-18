module.exports.run = async (bot, message, args) => {

owner = '844098725823512576';
if (message.author == owner) {
  const msg = await message.channel.send("Saving changes...");
  msg.edit("Saved!");
  msg.edit(`<:sirSword:862170196068663306> Goodbye!`);
  msg.react(`<:sirShield:862170196034977792>`);
  console.log("Shutdown was Initiated!")
}
else return message.channel.send(`This Command is restrictive to the Owner of this server ${message.guild.owner}`);
}

module.exports.config = {
  name: "shutdown",
  aliases: ['shut']
}
