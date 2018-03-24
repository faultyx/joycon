exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.guild.leave()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["leaveserver"],
  permLevel: "Server"
};

exports.help = {
  name: "leave",
  category: "Moderation",
  description: "***LEAVE*** me alone!",
  usage: "leave"
};
