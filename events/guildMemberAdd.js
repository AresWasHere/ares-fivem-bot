
const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = member => {



 let embed = new Discord.RichEmbed()
    .setColor("RANDOM")

    .setTitle("Discord sunucumuza tekrardan katılmak istersen tıkla!")
    .setURL("https://discord.gg/eventus")

    .setAuthor("Sunucumuza Hoşgeldin! ")
    .setDescription("'Selamlar dostum Sunucumuza Hoşgeldin :sparkling_heart:, Sunucumuza kayıt olmak için **Sesli Odaya** giriş yapabilir ve **Kayıtsız Sohbet** odasından **!kayit** yazarak bize ulaşabilirsin. İyi eğlenceler :wink:")
    .setFooter("Ares RolePlay Discord Botu | Developed by ARES")

        member.sendEmbed(embed)




 


};
