function do8ball() {
  var rand = ["Why not?", "I think It's a no.", "JUST NO, OMG NO!", "I'm not sure. You should try again.", "Maybe? Idk.", "( ͡° ͜ʖ ͡°)", "Yes!", "I think Internet is enough for today. So no.", "YASSSS! OMG YES!"];
return rand[Math.floor(Math.random()*rand.length)];}

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (!args || args.length < 1) 
  return message.reply("Please ask a question for me to predict.");

  message.channel.send(":8ball: " + do8ball())
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["magicball", "magic8ball"],
  permLevel: "User"
};

exports.help = {
  name: "8ball",
  category: "Miscelaneous",
  description: "gasp... Did it predicted the future? jk",
  usage: "8ball [question]"
};
