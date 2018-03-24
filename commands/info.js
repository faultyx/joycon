const Discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  const embed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor(0xC93457)
.setThumbnail(message.author.avatarURL, true)
.addField("ID", `${message.member.id}`, true)
.addField("Permission level", `${level} - ${friendly}`, true)
.addField("Status", `${message.author.presence.status}`, true)
.addField("Registration date", `${message.author.createdAt}`, true)
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["userinfo", "information", "userinformation"],
  permLevel: "User"
};

exports.help = {
  name: "info",
  category: "Miscelaneous",
  description: "Use when you want to check your information.",
  usage: "info"
};
