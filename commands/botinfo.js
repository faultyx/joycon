const { version } = require("discord.js");
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embed = new Discord.RichEmbed()
.setTitle(`${client.user.tag}'s stats`)
.setColor(0xC93457)
.setThumbnail("https://cdn.discordapp.com/avatars/406786066746441739/dfcab7324bcffe528a35179f1964a43a.png?size=2048")
.addField("Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
.addField("Uptime", `${duration}`, true)
.addField("Users", `${client.users.size.toLocaleString()}`, true)
.addField("Servers", `${client.guilds.size.toLocaleString()}`, true)
.addField("Channels", `${client.channels.size.toLocaleString()}`, true)
.addField("Discord.js ver.", `${version}`, true)
.addField("Node ver.", `${process.version}`, true)
.addField("Support server", `https://discord.gg/KVbAaJu`, true)
message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["info"],
  permLevel: "User"
};

exports.help = {
  name: "botinfo",
  category: "Miscelaneous",
  description: "Gives some useful bot statistics.",
  usage: "botinfo"
};
