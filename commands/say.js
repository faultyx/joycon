// The EVAL command will execute **ANY** arbitrary javascript code given to it.
// THIS IS PERMISSION LEVEL 10 FOR A REASON! It's perm level 10 because eval
// can be used to do **anything** on your machine, from stealing information to
// purging the hard drive. DO NOT LET ANYONE ELSE USE THIS


// However it's, like, super ultra useful for troubleshooting and doing stuff
// you don't want to put in a command.
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const everyone = ["everyone", "Everyone", "here", "Here"];
  if( everyone.some(word => message.content.includes(word)) ) return message.reply('You can\'t mention everyone.');
  const sayMessage = args.join(" ");
  if (!sayMessage) return message.reply('Must enter a text for me to say.');
  message.delete().catch(O_o=>{});
  message.channel.send(sayMessage);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tell"],
  permLevel: "User"
};

exports.help = {
  name: "say",
  category: "Miscelaneous",
  description: "Be me, and say stuff ;)",
  usage: "say [text]"
};
