const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms')
module.exports = {
    name: "kartım",
    aliases: [],
    description: "Oynatılan şarkıyı devam ettirir.",
    usage: "!kartım",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {
        let prefix=db.fetch(`prefix_${message.guild.id}`)
        let para = db.fetch(`para_${message.author.id}`)
let altın = db.fetch(`altın_${message.author.id}`)
let şirket = db.fetch(`şirket_${message.author.id}`)
let kredi = db.fetch(`kredi_${message.author.id}`)  
let amaç = db.fetch(`şirketamac_${message.author.id}`)
let sirketdeğer = db.fetch(`şirketdeger_${message.author.id}`)
let şifre = db.fetch(`sifre_${message.author.id}`)
let süre = db.fetch(`kartsure_${message.author.id}`)
 let timeObj = ms(Date.now() - süre); 
var embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('Banka Merkez')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Kart bilgileriniz özelden gönderiliyor!')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')

.setTimestamp()  
  message.channel.send(embed)
  
  
var kart = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('Banka Merkez')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Merhaba,' + message.member.user.username + ',Kart bilgileriniz aşağıda yer alıyor.Bir sorun ile karşılaşırsanız [Destek Sunucumuz](https://discord.gg/H4t2TmH) dan bizimle iletişime geçebilirsin!')
.addField(':credit_card: Kart Şifresi:', '**'+şifre+'**')
.addField(':small_blue_diamond: Kart Sahibi:', '**'+message.member.user.username+'**')   
.addField(':small_blue_diamond:  Kart Sahibi İD:', '**'+message.author.id+'**')
.addField(':question: Kart Bilgileri: :grey_question:', '-------------------------------')
.addField(':no_entry_sign: Kredi Kartı Şirketi:', '**VakıfBANK**')
.addField('Kart Bakiye Bilgisi:', '-------------------------------')
.addField(':dollar: Kart Bakiyesi', '**'+kredi+'**')
.addField('Kart Açılış Süresi:', ` **${timeObj.days}** Gün, **${timeObj.hours}** Saat, **${timeObj.minutes}** Dakika`)
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')

.setTimestamp()  
message.author.send(kart)
    }
}