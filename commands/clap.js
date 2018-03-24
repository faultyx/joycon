const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
if (args.length < 1) {
  message.channel.send('Please provide some text to clapify');
}
message.channel.send(args.map(randomizeCase).join(':clap:'));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["clapify"],
  permLevel: "User"
};

exports.help = {
  name: "clap",
  category: "Miscelaneous",
  description: "Clapifies your text.",
  usage: "clap [text]"
};
