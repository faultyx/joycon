const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  if (!args[0]) {
    const settings = message.guild ? client.settings.get(message.guild.id) : client.config.defaultSettings;
    const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);
    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = "";
    let output = `Use ${settings.prefix}help <commandname> for details\n`;
    const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
    sorted.forEach( c => {
      const cat = c.help.category.toProperCase();
      if (currentCategory !== cat) {
        output += `**\n${cat}\n**`;
        currentCategory = cat;
      }
      output += `${settings.prefix}${c.help.name}\n`;
    });
    const embed = new Discord.RichEmbed()
    .setColor(0xC93457)
    .setTitle("Help")
    .addField("Website", "https://github.com/honorsea/joycon")
    .addField("Command List", output)
    message.author.send({embed});
    message.channel.send(':mailbox_with_mail:')
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      if (level < client.levelCache[command.conf.permLevel]) return;
      const aliasesdetection = command.conf.aliases.join(", ")
    if (aliasesdetection) {
      const embed = new Discord.RichEmbed()
    .setTitle(`${command.help.name} help`)
    .setColor(0xC93457)
    .addField("Description", `${command.help.description}`)
    .addField("Usage", `${command.help.usage}`)
    .addField("Aliases", `${command.conf.aliases.join(", ")}`)
    message.channel.send({embed});} else {
      const embed = new Discord.RichEmbed()
    .setTitle(`${command.help.name} help`)
    .setColor(0xC93457)
    .addField("Description", `${command.help.description}`)
    .addField("Usage", `${command.help.usage}`)
    message.channel.send({embed});}
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp", "cmds"],
  permLevel: "User"
};

exports.help = {
  name: "help",
  category: "System",
  description: "Displays all the available commands for your permission level.",
  usage: "help [command]"
};
