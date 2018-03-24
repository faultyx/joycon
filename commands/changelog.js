const Discord = require("discord.js");
const changelog = require("../changelog.json");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
const embed = new Discord.RichEmbed()
.setTitle("Changelog")
.setColor(0xC93457)
.addField("What's new?", `${changelog.whatsnew}`)
.addField("New commands", `${changelog.newcommands}`)
.addField("Update status", `${changelog.updatestatus}`)
.addField("Version", `${changelog.version}`)
message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["whatsnew"],
  permLevel: "User"
};

exports.help = {
  name: "changelog",
  category: "Miscelaneous",
  description: "owo What's new??? <o/",
  usage: "changelog"
};
