const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const reason = args.slice(1).join(' ');
  const user = message.mentions.users.first();
  const modlog = client.channels.find('name', 'mod-log');
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Un/mute\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }
};
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Moderator"
  };
  
  exports.help = {
    name: "mute",
    category: "Moderation",
    description: "Mutes or unmutes a mentioned user. (You need to set permissions for muted role in channel settings.)",
    usage: "un/mute [mention] [reason]"
  };
  