const Discord = require("discord.js");
const client = new Discord.Client();

 client.on("message", (message) => {

if(message.content.includes("'hastebin")){
  const snekfetch = require('snekfetch');
  snekfetch.post('https://hastebin.com/documents').send(`${message.content.split(" ").slice(1).join(" ")}\n\n-Hastebin Bot by ${client.user.tag}`).then(function(res, err) {
const Time = moment().format('MMMM Do YYYY | h:mm:ss a');        
		message.channel.send("Posting...").then(hastebinedit => {
		embed = new Discord.RichEmbed()
        .setColor(message.member.displayHexColor)
		.setAuthor(`Hastebin`, `https://cdn.discordapp.com/attachments/305695257377374208/313803821547651072/haste.png`)
        .setDescription(`✅Uploaded: https://hastebin.com/${res.body.key}.ban`)
        .setFooter(`${Time}`, `https://cdn.discordapp.com/avatars/313747791329493002/7ca8542082c3a3382a94d8343cf14b98.png?size=2048`)
        hastebinedit.edit({embed})
		});
  });
		};
		});