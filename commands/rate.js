function doRate() {
  var rand = ["Eww... You suck. `1/10`", "Not enough lmao. I'm better than you. `2/10`", "Can be better, but I'm still better. `3/10`", "Atleast you don't suck. `4/10`", "Half... Atleast It's not 1. `5/10`", "Woah. I'm jealous of you. `6/10`", "( ͡° ͜ʖ ͡°) `7/10`", "Omg... Too high for me! `8/10`", "AHHH!!! YOU ARE SO PERFECT!!! `9/10`", "OMG! 10/10 IGN! `10/10`"];
return rand[Math.floor(Math.random()*rand.length)];}

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const person = message.mentions.users.first();
    if (!person) return message.reply('You must mention someone to rate them.');
    message.channel.send(doRate())
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rate", "r8"],
  permLevel: "User"
};

exports.help = {
  name: "rate",
  category: "Miscelaneous",
  description: "Rate me pls :3",
  usage: "rate [user]"
};
