module.exports = bot => {
    console.log(`Logged in as ${bot.user.tag}! (From Event)`)
    bot.user.setPresence({
        status: "online",  // You can show online, idle... Do not disturb is dnd
        activity: {
            name: ".help",  // The message shown
            type: "WATCHING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
}


