const Discord = require("discord.js");
const client = new Discord.Client();
const request = require("superagent");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  request.get('https://random.dog/woof.json')
  .end((err, res) => {
    if (!err && res.status === 200) {
      const embed = new Discord.RichEmbed()
      .setTitle(`Woof~`)
      .setColor(0xC93457)
      .setImage(res.body.url)
      message.channel.send({embed});
    } else {
      client.logger.error(`Got an error: ${err}, status code: ${res.status}`)
    }})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dog"],
  permLevel: "User"
};

exports.help = {
  name: "randomdog",
  category: "Miscelaneous",
  description: "Woof~",
  usage: "randomdog"
};
