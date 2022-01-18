const fs = require('fs');

function loadgen(bot) {
    fs.readdir('commands/gen/', (err, files) => {

        if (err) console.log(err);
    
        const jsfile = files.filter(f => f.split('.').pop() === 'js');
        if (jsfile.length <= 0) {
            return console.log('Bot Couldn\'t Find Commands in commands Folder.');
        }
    
        jsfile.forEach((f, i) => {
            const pull = require(`../commands/gen/${f}`);
            bot.commands.set(pull.config.name, pull);
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name);
            });
        });
    });
}

module.exports = {
  loadgen
}