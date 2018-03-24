exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send(":ping_pong: Pong!");
  let NewMs = msg.createdTimestamp - message.createdTimestamp
  let ApiMs = Math.round(client.ping)
  msg.edit(':ping_pong: Pong! `' + NewMs + ' ms`' + ' `' + Math.round(client.ping) + 'ms`');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Miscelaneous",
  description: "pingpongpingpong...",
  usage: "ping"
};
