const Discord = require("discord.js");

exports.run = async (client, message, [value], level) => { // eslint-disable-line no-unused-vars
  if (value.length < 1) {
    message.channel.send('You must provide a value to set!');
  }
  const user = message.mentions.users.first() || message.author
  const embed = new Discord.RichEmbed()
  .setAuthor(user.tag, user.avatarURL)
  .setColor(0xC93457)
  .setTitle('Succesful.')
  message.channel.send({embed});
  const score = client.points.get(message.author.id)
  score.points = value;
  client.points.set(user.id, score);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["setpoint"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "setpoints",
  category: "Economy",
  description: "Set mentioned user's or your points.",
  usage: "setpoints [value] [user]"
};
