exports.run = async (client, message, [mention, ...reason]) => { // eslint-disable-line no-unused-vars
    if (message.mentions.members.size === 0)
      return message.reply("Please mention a user to ban.");
  
    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.reply("");
  
    const banMember = message.mentions.members.first();
  
    banMember.ban(reason.join(" ")).then(member => {
      message.reply(`${member.user.username} was succesfully banned.`);
    });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Moderator"
  };
  
  exports.help = {
    name: "ban",
    category: "Moderation",
    description: "AGHH!!! THE... BAN... HAMMER... TOO... STRONG...",
    usage: "ban [user] [reason]"
  };
  