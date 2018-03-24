exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    if (!args || args.length < 1) 
      return message.reply("Must provide a role to remove.");

    if (message.mentions.members.size === 0)
      return message.reply("Please mention a user to remove their role.");
  
    if (!message.guild.me.hasPermission("MANAGE_ROLES_OR_PERMISSIONS"))
      return message.reply("");
  
    const roleMember = message.mentions.members.first();

    let role = message.guild.roles.find("name", `${args[0]}`);
  
    roleMember.removeRole(role).then(member => {
      message.reply(`${member.user.username} was succesfully added to role.`);
    });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["removerole"],
    permLevel: "Moderator"
  };
  
  exports.help = {
    name: "delrole",
    category: "Moderation",
    description: "If you ever want to remove a role from a person.",
    usage: "delrole [role] [user]"
  };
  