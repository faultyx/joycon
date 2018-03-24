const Discord = require("discord.js");

exports.run = async (client, message, gamename, level) => { // eslint-disable-line no-unused-vars
  const game = gamename.join(" ");
  if (!game) return message.reply('You must enter a game name for me to announce.');
const embed = new Discord.RichEmbed()
.setTitle(`${game}`)
.setColor(0xC93457)
.addField("Announcement", `${message.author} would like to know if anyone is up for ${game}.`)
.addField("Author", `${message.author}`)
.addField("Game", `${game}`)
message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "game",
  category: "Miscelaneous",
  description: "CALLING EVERYBODY TO JOIN MY GAME!!!",
  usage: "game [game]"
};
