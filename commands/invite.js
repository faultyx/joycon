exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send("Use this invite link to invite bot to your server. https://discordapp.com/api/oauth2/authorize?client_id=406786066746441739&permissions=8&scope=bot");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "invite",
  category: "Miscelaneous",
  description: "Sends a link to add bot to your server.",
  usage: "invite"
};
