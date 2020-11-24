const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: "şifreal",
    aliases: ["şifre-al"],
    description: "Oynatılan şarkıyı devam ettirir.",
    usage: "!şifreal",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {
        let prefix=db.fetch(`prefix_${message.guild.id}`)
        let şifre = db.fetch(`sifre_${message.author.id}`)
  if(!şifre) {
    var embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! ⚠️**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription(`Anlaşılan bir şifre almamışsınız :) \n **${prefix}şifre** yazarak şifrenizi alabilirsiniz.`)
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')

.setTimestamp()  
message.channel.send(embed)  
 return
  }
 message.channel.send(message.member.user.username + ' Kart Şifrenizi özelden yolladım') 
  
    var embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Banka Merkezi')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Selam '+ message.member.user.username + ', \n İşte kart Şifreniz:**' + şifre + '**')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')

.setTimestamp()  
  
  
message.author.send(embed)
    }
}