


const Discord = require("discord.js")
const mysql= require('mysql');

// database.connect();












exports.run = (client, message, args, color) => {






  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'essentialmode',
  });






  if(!message.member.roles.has(`YETKİYİ KULLANABİLECEK ROLÜN ID'SİNİ GİR`)) return message.channel.send(`Bu komutu kullanabilmek için özel yetkiye sahip olmalısın!`);


  if (!args[0]) return message.reply('Lütfen kayıdını görmek istediğin oyuncunun Steam isimini giriş yap!')













  let sqlta = `SELECT count(*) as total FROM giriscikis WHERE oyuncu = '${args[0]}'`;


        connection.query(sqlta, 1, (error, results, fields) => {
          if (error)
            return console.error(error.message);

          console.log("Giriş Çıkış Kayıt Bilgisi kaydedildi! Toplam Kayıt: "+ results[0].total);



var kackez = results[0].total;

  let sqltak = `SELECT * FROM giriscikis WHERE oyuncu = '${args[0]}'`;



        connection.query(sqltak, 1, (error, results, fields) => {
          if (error)
            return console.error(error.message);







var logsayisi = 0;


let embed = new Discord.RichEmbed()
   .setColor("#ff7b00")
   .setAuthor(`${args[0]} İsimli Oyuncunun Giriş Çıkış Kayıtları`)

            while (logsayisi < kackez){











      embed.addField(`${results[logsayisi].oyuncu} Kullanıcısı ${results[logsayisi].bilgi}`, `${results[logsayisi].Time}`);

      logsayisi++;




}

message.channel.send(embed);


});

connection.end();

});










}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gçlog'],
  permLevel: 0,
};

exports.help = {
  name: "gçlog",
  description: "Shows all the servers the bot is in.",
  usage: "gçlog"
};
