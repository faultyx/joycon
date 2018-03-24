function doDDos() {
  var rand = ['Connecting to target... Starting program... DONE. Your target got DDOSed.', '***OOf***, you made a mistake and made your IP unsecure... AND you are getting DDOSed by your own program. rip', '**>/randomfakeddoscodexd\n>/Sending packets...\n>/Waiting for targets IP Address to crash because of requests\nDone\nPress any key to continue...**', 'DDOSing software didn\'t started because target didn\'t paid fees for wifi.'];
return rand[Math.floor(Math.random()*rand.length)];
}

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const person = message.mentions.users.first();
    if (!person) return message.reply('You must mention someone to ddos them.');
    message.channel.send(doDDos())
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ddos",
  category: "Miscelaneous",
  description: "dOn't ToUcH mE, i WiLL dDos u.",
  usage: "ddos [user]"
};
