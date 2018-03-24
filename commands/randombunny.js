const Discord = require("discord.js");
const client = new Discord.Client();
const request = require("request");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let imgs = Math.floor(Math.random() * 80);
  let url = ['https://www.reddit.com/r/Rabbits/.json?sort=rising&t=hour&limit=100'];
  request({ 
    method: 'GET', 
    uri: url[Math.floor(Math.random() * url.length)]
  }, function (err, response, data) {
    if(err) {
      console.log(err, null);
      return;
    }

  data = JSON.parse(data);
  var mainObj = data.data.children;	
  var urls = {};
    
  for(let i = 0; i < mainObj.length; i++) {
  //let url = mainObj[i].data.preview.images[0].source.url;
  let url = mainObj[i].data.url;
  urls[i+1] = url; 
    }
  const embed = new Discord.RichEmbed()
  .setTitle("Jump, jump!")
  .setColor(0xC93457)
  .setImage(urls[imgs])
  message.channel.send({embed});

  if(client.user && message.content === "undefined") {
      message.delete()
  }})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bunny"],
  permLevel: "User"
};

exports.help = {
  name: "randombunny",
  category: "Miscelaneous",
  description: "Jump, jump!",
  usage: "randombunny"
};
