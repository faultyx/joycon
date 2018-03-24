const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const currenttime = moment().format('kk:mm:ss').replace(':', '');
  const currentdate = moment().format('DDDD')
  const score = client.points.get(message.author.id) || { points: 0, level: 0, lastdailytime: 0, lastdailydate: 0};
  const settings = message.guild ? client.settings.get(message.guild.id) : client.config.defaultSettings;
  if (currenttime> score.lastdailytime, currentdate> score.lastdailydate) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(0xC93457)
  .addField(`Daily`, 'Here is your daily! `' + '100 ' + settings.defaultCurrency + '`')
  message.channel.send({embed});
  var currentmoney = score.points;
  var dailymoney = 100;
  var newmoney = currentmoney + dailymoney;
  score.points = newmoney
  score.lastdailytime = currenttime
  score.lastdailydate = currentdate;
  client.points.set(message.author.id, score);
  } else {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(0xC93457)
  .addField(`Daily`, 'Sorry but you already got your daily points. You need to wait 24 hours to get daily again.')
  message.channel.send({embed});
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Global Banker"
};

exports.help = {
  name: "daily",
  category: "Economy",
  description: "MOREMONEYMONEYMONEY",
  usage: "daily"
};
