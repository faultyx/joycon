exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
  if (!amount) return message.reply('Must specify an amount to delete.');
  message.channel.fetchMessages({
      limit: amount,
  }).then((messages) => {
      message.channel.bulkDelete(messages).catch(console.error);
  });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Moderator"
  };
  
  exports.help = {
    name: "purge",
    category: "Moderation",
    description: "Don't mind me. I'm just cleaning this mess.",
    usage: "purge [amount]"
  };
  