const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(true);
message.channel.send(" mesajları sildim").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};
