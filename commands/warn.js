const {RichEmbed} = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input.`;
  const embed = new RichEmbed()
  .setColor(0xC93457)
  .setTimestamp()
  .setTitle(`You have been warned. Please be careful next time.`)
  .setDescription('By `'+ message.author.tag +'`\nFor `'+ reason +'`')
  .setFooter(``);
  user.send(embed)
};
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Moderator"
  };
  
  exports.help = {
    name: "warn",
    category: "Moderation",
    description: "Issues a warning to the mentioned user.",
    usage: "warn [mention] [reason]"
  };
  