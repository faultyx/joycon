const Discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const settings = message.guild ? client.settings.get(message.guild.id) : client.config.defaultSettings;
  const user = message.mentions.users.first() || message.author
  const scorePoints = client.points.get(user.id).points || '0'
  const userLevel = client.points.get(user.id).level || '0'
  const embed = new Discord.RichEmbed()
  .setAuthor(user.tag, user.avatarURL)
  .setColor(0xC93457)
  .addField(`${user.username}'s ${settings.defaultCurrency}`, `${scorePoints}`, true)
  .addField(`${user.username}'s level`, `${userLevel}`, true)
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "Economy",
  description: "Check mentioned user's or your points and level.",
  usage: "stats [user]"
};
