const ModeratorRoleModel = require('../models/ModeratorRoleModel');

function getMember(message, args) {
    if (!message) throw new Error('A message wasn\'t provided!');
    if (!args) throw new Error('No arguments were provided!');

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]) || message.member;

    return member;
}