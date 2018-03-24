exports.run = async (client, message, [mention, ...reason]) => { // eslint-disable-line no-unused-vars
  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick.");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(`${member.user.username} was succesfully kicked.`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: "kick",
  category: "Moderation",
  description: "I'm gonna kick you, and you too. I'm  gonna KICK EVERYBODY!",
  usage: "kick [user] [reason]"
};
