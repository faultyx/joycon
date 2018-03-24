module.exports = (client, message) => {
  if (message.author.bot) return;
  client.pointsMonitor(client, message);

  const settings = message.guild
    ? client.settings.get(message.guild.id)
    : client.config.defaultSettings;

  message.settings = settings;

  const swearWords = ["nigger", "cunt", "whanker", "shit", "nigga", "fuckk", "twat", "bellend", "bitch", "asshole", "bloejob", "blowjob", "dick", "sex", "f u c k", "n i g g e r", "wanker", "boobs", "penis", "vagina", "pussy", "fag", "nonce", "fu ck",];
  if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
  if (settings.swearBlock === "true") {
  message.delete();
  } else {
    return;
    }
  }

  if (message.content.indexOf(settings.prefix) !== 0) return;

  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const level = client.permlevel(message);

  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

  if (!cmd) return;

  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("This command is unavailable via private message. Please run this command in a guild.");

  if (level < client.levelCache[cmd.conf.permLevel]) {
    if (settings.systemNotice === "true") {
      return message.channel.send(`You do not have permission to use this command.
  Your permission level is ${level} (${client.config.permLevels.find(l => l.level === level).name})
  This command requires level ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`);
    } else {
      return;
    }
  }

  message.author.permLevel = level;
  
  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }

  client.logger.cmd(`[CMD] ${client.config.permLevels.find(l => l.level === level).name} ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);
  cmd.run(client, message, args, level);
};
