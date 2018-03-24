const Discord = require("discord.js");
const webdict = require('webdict');

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
const word = args.join(' ');
if (!word) return message.reply('Please type a word to search.');

webdict('urbandictionary', word).then(res => {
  let result;
  if (!res || !res.definition || !res.definition[0]) {
      result = 'No results found.';
  } else {
      result = res.definition[0];
  }
  const embed = new Discord.RichEmbed()
  .setTitle(`Urban Dict.`)
  .setColor(0xC93457)
  .addField("Input", `${word}`)
  .addField("Result", `${result}`)
  message.channel.send({embed});
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["urbandict"],
  permLevel: "User"
};

exports.help = {
  name: "urban",
  category: "Miscelaneous",
  description: "..?",
  usage: "urban [word]"
};
