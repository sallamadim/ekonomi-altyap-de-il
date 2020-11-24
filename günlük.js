const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
module.exports = {
    name: "günlük",
    aliases: [],
    description: "Oynatılan şarkıyı devam ettirir.",
    usage: "!günlük",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {
        let prefix=db.fetch(`prefix_${message.guild.id}`)
        let user = message.author
        let timeout = 86400000;
        let daily = await db.fetch(`daily_${message.author.id}_${user.id}`);
        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));
            

            return message.channel.send(`Günlük ödülünü topladın. ${time.days} gün, ${time.hours} saat, ${time.minutes} dakika, ve ${time.seconds} saniye sonra tekrar gel.`)

            
        } else {
        let para = db.fetch(`para_${message.author.id}`)
let altın = db.fetch(`altın_${message.author.id}`)
let şirket = db.fetch(`şirket_${message.author.id}`)
let kredi = db.fetch(`kredi_${message.author.id}`)  
let amaç = db.fetch(`şirketamac_${message.author.id}`)
let sirketdeğer = db.fetch(`şirketdeger_${message.author.id}`)
  
  if(!şirket) {
    var banka = new Discord.MessageEmbed()
.setColor('#FB529C')
.setTitle('Banka-ATM')
.setDescription('Günlük maaşınız çekildi.Detaylar aşağıda yer alıyor.')
.addField('**:dollar:Çekilen maaş:**', '**100**')
.addField('**:credit_card:Kredi Kartı Kredisi:**', '**'+kredi+'**')
 .addField('Şirket Üzerine çekilen maaş:', '------------------------')
.addField('**Hata :warning:**', message.member.user.username + ' Adlı kullanıcının bir şirketi bulunmuyor!')
.addField('Genellikle Sorulan Sorular:', '------------------------------')
.addField('Kredi Kartı Kredisini nasıl hesabıma geçirebilirim?:', `**${prefix}kredi** yazarak hesabınıza geçirebilir,kredi kartınıza para yükleyebilirsiniz.`)
.addField('Nasıl Para Kazanabilirim?:', `Rakers size,gündelik olarak para verir.Bu değeri şirket açarak arttırabilirsiniz! şirket açmak için,**${prefix}şirket** kullanın.`)
.addField('Şirket Ne işe yarar?:', 'Gündelik olarak kazandığınız parayı arttırır.')
.addField('Bot kurucusu ile nasıl iletişime geçerim?:', '[Destek Sunucumuza](https://discord.gg/dRXMhee) gelerek yapımcı ile iletişime geçebilirsin.')
.addField('Günlük Paramı nasıl alırım?:', `**${prefix}günlük** yazarak gündelik paranızı alabilirsiniz.`)  
    .setThumbnail('https://image.flaticon.com/icons/svg/57/57426.svg')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')

.setTimestamp()
message.channel.send(banka) 
db.add(`para_${message.author.id}`, 100)    
return
  }

    var banka = new Discord.MessageEmbed()
.setColor('#FB529C')
.setTitle('Banka-ATM')
.setDescription('Günlük maaşınız çekildi.Detaylar aşağıda yer alıyor.')
.addField('**:dollar:Çekilen maaş:**', '**100**')
.addField('**:credit_card:Kredi Kartı Kredisi:**', '**'+kredi+'**')
 .addField('Şirket Üzerine çekilen maaş:', '------------------------')
.addField(şirket + ' Üzerinden çekilen maaş:', '**1000**')
.addField('Sirket Para Değeri:', '**1000 Arttırıldı!**')
.addField('Genellikle Sorulan Sorular:', '------------------------------')
.addField('Kredi Kartı Kredisini nasıl hesabıma geçirebilirim?:', `**${prefix}kredi** yazarak hesabınıza geçirebilir,kredi kartınıza para yükleyebilirsiniz.`)
.addField('Nasıl Para Kazanabilirim?:', `Rakers size,gündelik olarak para verir.Bu değeri şirket açarak arttırabilirsiniz! şirket açmak için,**${prefix}şirket** kullanın.`)
.addField('Şirket Ne işe yarar?:', 'Gündelik olarak kazandığınız parayı arttırır.')
.addField('Bot kurucusu ile nasıl iletişime geçerim?:', '[Destek Sunucumuza](https://discord.gg/dRXMhee) gelerek yapımcı ile iletişime geçebilirsin.')
.addField('Günlük Paramı nasıl alırım?:', `**${prefix}günlük** yazarak gündelik paranızı alabilirsiniz.`) 
    .setThumbnail('https://image.flaticon.com/icons/svg/57/57426.svg')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')

.setTimestamp()
message.channel.send(banka) 
  db.add(`para_${message.author.id}`, 1100)
  db.add(`şirketdeger_${message.author.id}`, 1000)
  db.set(`daily_${message.author.id}_${user.id}`, Date.now());
}
    }
}