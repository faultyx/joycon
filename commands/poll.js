const Discord = require("discord.js");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const question = args.join(" ");
  if (!question) return message.reply('You must enter a question.');
  const embed = new Discord.RichEmbed()
.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
.setColor(0xC93457)
.addField("Poll", `${question}`)
message.channel.send({embed}).then(message => message.react("👍").then(message.react("👎")))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "poll",
  category: "Miscelaneous",
  description: "Use this command when you want to decide on something.",
  usage: "poll [question]"
};
