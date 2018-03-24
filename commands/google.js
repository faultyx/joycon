// The modules we are using are cheerio, snekfetch, and querystring.
const cheerio = require('cheerio');
const snekfetch = require('snekfetch');
const querystring = require('querystring');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
   // These are our two variables. One of them creates a message while we preform a search,
   // the other generates a URL for our crawler.
   const termMessage = args.join(" ");
   if (!termMessage) return message.reply('Must enter a text for me to search.');
   let searchMessage = await message.reply(':arrows_counterclockwise: Searching...');
   let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(termMessage)}`;

   // We will now use snekfetch to crawl Google.com. Snekfetch uses promises so we will
   // utilize that for our try/catch block.
   return snekfetch.get(searchUrl).then((result) => {

      // Cheerio lets us parse the HTML on our google result to grab the URL.
      let $ = cheerio.load(result.text);

      // This is allowing us to grab the URL from within the instance of the page (HTML)
      let googleData = $('.r').first().find('a').first().attr('href');

      // Now that we have our data from Google, we can send it to the channel.
      googleData = querystring.parse(googleData.replace('/url?', ''));
      searchMessage.edit(`:white_check_mark: Result found!\n${googleData.q}`);

  // If no results are found, we catch it and return 'No results are found!'
  }).catch((err) => {
     searchMessage.edit(':x: No results found!');
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "google",
  category: "Miscelaneous",
  description: "Lemme Google that for you.",
  usage: "google [term]"
};
