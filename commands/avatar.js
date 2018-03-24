const Discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const user = message.mentions.users.first();
  if (!user) return message.reply('You must mention someone to get their avatar.');
  const embed = new Discord.RichEmbed()
  .setTitle('Avatar of ' + user.tag)
  .setColor(0xC93457)
  .setImage(user.avatarURL)
  .addField("Avatar URL:", user.avatarURL)
  .addField("Avatar:", "Avatar or requested person:",)
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "avatar",
  category: "Miscelaneous",
  description: "Show me your avatr B0I.",
  usage: "avatar [user]"
};
