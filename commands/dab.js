exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
message.channel.sendFile('./imgs/dab.gif')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "dab",
  category: "Miscelaneous",
  description: "<o/",
  usage: "dab"
};
