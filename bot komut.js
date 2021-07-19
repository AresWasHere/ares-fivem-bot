const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`[ARES] FiveM RolePlay botu aktif ve sorunsuz hizmet veriyor!`);
});
client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) {
     return;
}



});
