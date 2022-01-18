// Twitch Bot | iCodify™ //
const tmi = require('tmi.js');
USER = process.env.TWITCHUSER
PASS = process.env.TWITCHPASS

const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: `${USER}`,
		password: `${PASS}`
	},
	channels: [ 'Simer00' ]
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === 'hi') {
		client.say(channel, `Hi @${tags.username}, Welcome To Our Channel!`);
	}
});