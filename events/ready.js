module.exports = async client => {
  await client.wait(1000);

  client.logger.log(`[READY] ${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");

  client.guilds.filter(g => !client.settings.has(g.id)).forEach(g => client.settings.set(g.id, client.config.defaultSettings));
  
  client.user.setActivity('github.com/honorsea/joycon')
  // Available statuses are: online, idle, dnd, invisible
  client.user.setStatus('online')
};
