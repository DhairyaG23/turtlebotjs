exports.run = function(client, message, args) {
  if(message.content.startsWith("'google")){
  const Discord = require('discord.js')
  const moment = require(`moment`)
  const search = message.content.split(' ').slice(1).join('_');
  const search2 = message.content.split(' ').slice(1).join(' ');
  const Time = moment().format('MMMM Do YYYY | h:mm:ss a');
  let embed = new Discord.RichEmbed()
  .setAuthor(`Google search`, `https://cdn.discordapp.com/emojis/311824300166479872.png`)
  .setDescription(`:arrows_counterclockwise: Searching for: **${search2}**`)
  .setFooter(`${Time}`, `https://cdn.discordapp.com/emojis/311824356689051652.png`)
  .setColor(0x00ff00)
  message.channel.send({embed}).then(msg => {
    if(!search) return message.channel.send(`**[Robot]** No search term specified`)
    const google = require('google')
    google.resultsPerPage = 1
    var nextCounter = 0
    embed1 = new Discord.RichEmbed()
    .setAuthor(`Google search`, `https://cdn.discordapp.com/emojis/311824300166479872.png`)
    .setDescription(`:negative_squared_cross_mark: Term: **${search2}** not found`)
    .setFooter(`${Time}`, `https://cdn.discordapp.com/emojis/311824356689051652.png`)
    .setColor(0xffa500)
    google(search, function (err, res){
      if (err) {
        error = new Discord.RichEmbed()
        .setAuthor(`Google search`, `https://cdn.discordapp.com/emojis/311824300166479872.png`)
        .setDescription(`:name_badge:  An error occured: \`${err}\``)
        .setFooter(`${Time}`, `https://cdn.discordapp.com/emojis/311824356689051652.png`)
        .setColor(0xff0000)
        msg.edit({embed : error})
      }
      if(!res.links.length) return msg.edit({embed : embed1})
      for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
        embed2 = new Discord.RichEmbed()
        .setAuthor(`Google search`, `https://cdn.discordapp.com/emojis/311824300166479872.png`)
        .setDescription(`:white_check_mark: search found: [${link.title}](${link.href})\n \n${link.description}`)
        .setFooter(`${Time}`, `https://cdn.discordapp.com/emojis/311824356689051652.png`)
        .setColor(0x00ff00)
        msg.edit({embed : embed2})
      }
    })
  });
}
};