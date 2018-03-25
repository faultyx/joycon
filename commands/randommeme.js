const Discord = require("discord.js");
const client = new Discord.Client();
const meme = require('memejs');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  meme(function(data) {
  const embed = new Discord.RichEmbed()
  .setTitle(data.title[0])
  .setColor(0xC93457)
  .setImage(data.url[0])
  message.channel.send({embed});
  })};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "randommeme",
  category: "Miscelaneous",
  description: "Sweet memez~",
  usage: "randommeme"
};
