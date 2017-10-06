const config = require('./config.json')
const filter = message => message.author.id;
const ytdl = require('ytdl-core');
const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require('moment')

    const help = new Discord.RichEmbed()

    .setColor(0x4F7942)
      .setAuthor("Basic Commands", "https://cdn.discordapp.com/avatars/313747791329493002/f262ee93644056bb9366dbef70d29441.png?size=2048")
      .setDescription("**'help** - Displays this message.\n**'ping** - :ping_pong: Pong! (Used to show response time)\n**'invite** - Used to invite me to your server\n**'announce** - Used by admins to address the people of the guild\n**'clear <number of messages to delete (up to 100)>** - Deletes `x` number of messages\n**'rule** - Add a rule to a channel that includes `rules`\n**'info**-Learn more about me and my owner/programmer\n**'ban** - Bans a member, type ban to learn syntax of this command\n**'kick** - Kicks a member from the guild, type 'kick for command syntax\n**'vcmute** - mutes a given member\n**'vcunmute** - unmutes a given member\n**'deafen** - Deafens a given member\n**'undeafen** - undeafens a given member\n**'warn** - Warns a member that is mentioned (Requires the MANAGE_GUILD Permission)\n**'userinfo** - Used to find the info of a certain user, usage: <'userinfo> for info about yourself <'userinfo @user> for info about certain user\n**'google** - Search google for something\n**'hastebin** - Used to hastebin to share your code!\n**'flip** - Flips a two sided coin\n**'roll** - Rolls a 6 sided dice")
    const reloading = new Discord.RichEmbed()
    .setColor(0x4F7942)
      .setAuthor("Rebooting", "https://cdn.discordapp.com/avatars/313747791329493002/f262ee93644056bb9366dbef70d29441.png?size=2048")
      .setDescription("**Standby**\n Please Stand by as I am rebooted")
    const permhelp = new Discord.RichEmbed()
    .setColor(0x4F7942)
    const mobileinvite = new Discord.RichEmbed()
    .setColor(0x4F7942)
        .addField("Here's The Link You'll Need To Add Me To Your Server" ,"https://discordapp.com/oauth2/authorize?client_id=313747791329493002&scope=bot&permissions=2146958591 \n**OR...** \n**Join The Official Turtle Lounge By Clicking Here:** https://discord.gg/jFhrcsD")
    const musichelp = new Discord.RichEmbed()
    .setColor(0x4F7942)
        .setAuthor("Music Commands", "https://cdn.discordapp.com/avatars/313747791329493002/f262ee93644056bb9366dbef70d29441.png?size=2048")
      .setDescription("**'play <song/vid name/youtubeURL>** - Plays a **__SINGLE__** song, does not queue songs  (may not always work as this uses alot of bandwith)\n**'stop** - Stops currently playing YouTube URL or video")
      const secretai = new Discord.RichEmbed()
      .setColor(0x4F7942)
        .addField("Need help?" ,"Type `'help` to get full command list")

 client.login(config.token);



client.on('ready', () => {
  console.log('Get ready for some knives (submitted by @Rythmix#1692)');
  require("./antispam.js")(client, function(message){
     message.delete().then(loloz => {
	 message.author.send("**Please do not spam**, your server admins could demote you")
     message.channel.send(message.author+",**Please do __not__ spam**").then(spammer => {
		 spammer.delete(2000)
	 });
	 });
  });
});
client.on('guildCreate', (guild) => {

const emojicustom2 = client.emojis.get('314928550958465025')
const emojicustom = client.emojis.get('314251437271941131')
	const joinmessage = new Discord.RichEmbed()
	.setColor(0x4F7942)
	.setAuthor("Turtle by Rythmix#1692 & Dhairyag23#7326", "https://cdn.discordapp.com/avatars/313747791329493002/f262ee93644056bb9366dbef70d29441.png?size=2048")
	.setThumbnail('https://cdn.discordapp.com/avatars/313747791329493002/f262ee93644056bb9366dbef70d29441.png?size=2048')
	.setDescription("Hi! I am Turtle, a work-in-progress bot that can play music, has many moderation commands, and also have fun commands! I hope you will enjoy using me! I am coded by Rythmix#1692 and Dhairyag23#7326, a link to the Official `Turtle Support` server will be in the `social links` section! Type `'help` to get started and have fun using me! Make sure to create a channel called `welcome-out` and another one called `mod-log` to be able to log things!")
	.addField("Social Invites", `[${emojicustom2}](https://discord.gg/WrHMGZG)[${emojicustom}](https://discordapp.com/oauth2/authorize?client_id=313747791329493002&scope=bot&permissions=8)`)
	.addField("Developers", "Rythmix#1692 & Dhairyag23#7326")
    .addField("Server Count", `${client.guilds.size}`, true)
	.addField("Users", `${client.users.size}`, true)
	.addField("Library", "Discord.js (v11.1.0)",true)
		.addField("Library", "Discord.js (v11.1.0)",true)
	.addField("Language", "JavaScript", true)
    .setFooter("Powered by Node.js | v7.6.0", "https://images-ext-2.discordapp.net/.eJwNwskNgCAQAMBeKIDlWA7phoARjSCB9WXsXSfzsHucLLBC1GcASLnxvM90jRx75-mqEIliKnVtNEELYxejjNPuj0p40FJKtN5bRIFy0crDMXlvG3s_h-Ib1g.G13JOBsAFraONKGrxhlvYJCXtWc")

	guild.defaultChannel.send({embed: joinmessage})


});
  client.on("message", (message) => {


const user = message.mentions.users.first();

  if(message.author.bot) return;
  if(!user){
  if (message.content.includes("'help")){


	 message.author.sendEmbed(
	  help,
	  {disableEveryone: true}
	  ).then(yaaay => {
		  message.channel.send(message.author.username+" Sent you a DM")
	  });

  message.author.sendEmbed(
  musichelp,
  { disableEveryone: true }
  );
  };
  };
if(user){
	if(message.content.includes("'help")){
    message.channel.startTyping()
    user.send({embed: help});
    user.send({embed: musichelp})
    message.channel.stopTyping()
};
};


const hastebin = require("./hastebincommand.js")


const realtime = moment().format('MMMM Do YYYY | h:mm:ss a');

   if(message.content.startsWith("'setgame")){
      if(message.author.id === "269247746462973952" || message.author.id === "258656933131714561"){
  client.user.setGame(`${message.content.split(" ").slice(1).join(" ")} | ${client.guilds.size} servers`);
if(client.user.presence.game.name === `${message.content.split(" ").slice(1).join(" ")}`){
  message.channel.send(`Set the game to: **${message.content.split(" ").slice(1).join(" ")} | ${client.guilds.size} servers**`)
      };
    };
  };
});
client.on("guildMemberRemove", (member) =>{

		if(member.guild.channels.find(channel => channel.name.includes('welcome-out'))){
member.guild.channels.find(channel => channel.name.includes('welcome-out')).send("Goodbye "+(member)+", RIP...:cry:")
	};
});
client.on("guildMemberAdd", (member) =>{
  if(member.guild.channels.find(channel => channel.name.includes('welcome-out'))){
  member.guild.channels.find(channel => channel.name.includes('welcome-out')).send("Welcome "+(member)+", To "+member.guild.name+ "! Enjoy your stay! :smiley:")
};
});
	client.on("message", (message) => {










if(message.content == "'reboot"){
	if(message.author.id == "269247746462973952"){
		message.channel.send({embed: reloading}).then( funny => {message.channel.send("**Reloading\nStandby**\nPlease standby as I (Turtle) am rebooted.")
		funny.edit("**Reloading\nStandby**\nPlease standby as I (Turtle) am rebooted..").then(thatsfunny => {
			thatsfunny.edit("**Reloading\nStandby**\nPlease standby as I (Turtle) am rebooted...").then(thatsevenfunnier => {
				thatsevenfunnier.edit("**Reloading\nStandby**\nPlease standby as I (Turtle) am rebooted.").then(superfunny => {
					superfunny.edit("**Reloading\nStandby**\nPlease standby as I (Turtle) am rebooted..").then(stupendous => {
						stupendous.edit("**Reloading\nStandby**\nPlease standby as I (Turtle) am rebooted...").then(leave => {
							process.exit();
						});
						});
					});
				});
			});
		});
	};
};




		if(!message.author.id == "269247746462973952"){
			if (message.content.startsWith("'setgame")){
			message.delete()
			};
		};


  if (message.content.includes("'ping")) {


	var time1 = message.createdTimestamp
    message.channel.send("Pinging...").then(lol => {
      var time2 = lol.createdTimestamp
      lol.edit(":ping_pong: **Pong!** **Response Time:** `" +(time2-time1)+" `Miliseconds")
      { disableEveryone: true }
console.log(time2-time1+" miliseconds response time")
    });
  } else
if (message.author.bot){
  return;
};
  if (message.isMentioned(client.user.id)) {

	message.channel.sendEmbed(
      secretai,
      message.author,
    { disableEveryone: true }
    );
  } else
  if (message.content.includes("@A Turtle")) {

	message.channel.sendEmbed(
    secretai,
    message.author,
    { disableEveryone: true}
    );
  } else
  if (message.content.includes("'poop")) {

    message.channel.send("Suck IT:open_mouth:!");
  } else

if(message.content == "'permhelp"){
	message.delete();
	message.channel.send({embed: permhelp})
};
if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")){
if(message.content.includes("'clear")){
message.channel.send(":x: You do not have the manage messages permission")
};
};
if (message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")){
if (message.content.includes("'clear")){
	message.delete().then(clearing => {
  message.channel.fetchMessages({ limit: (`  ${message.content.split(" ").slice(1).join(" ")}`) }).then(messages => {
    const filteredMessages = messages.filter(filter);

    message.channel.bulkDelete(filteredMessages)

	});
  });

  };
};







const params = message.content.split(' ')
const cmd = params.shift()
if (cmd === "'vcmute"){
 if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) {
        message.reply('```An error has occured\nReason: You do not have mute permission```')
        return;
      };
console.log('#')
      let user = message.mentions.users.first();
console.log('#')
      if (user == null) {
        message.reply("User does not exist. (Make sure you mention the user)");
        return;
      };
console.log('#')
      let reason = message.content.replace(params[0] + " ", "").replace(cmd + "ban ", "");
      if (reason == null || reason == "" || params[0] == null || params[1] == null) {
        message.reply("Command syntax: ** " + cmd + " @User Reason**");
        return;
      };
console.log('#')
      if(message.channel.guild.member.muteable == false) {
        message.reply("I can not mute them!");
        return;
      };
console.log('#')
      let banner = "";
      let banned = "";

      if (message.channel.guild.member.nickname == null) {
        banner = message.author.username;
      } else {
        banner = message.channel.guild.member(message.author).nickname;
      };
console.log('#')
      if (message.channel.guild.member(user).nickname == null) {
        banned = user.username;
      } else {
        banned = message.channel.guild.member(user).nickname;
      };
console.log('#')

  console.log('#')
      setTimeout(function () {
        message.channel.guild.member(user).setMute(true)
          .then(() => {
            message.channel.send(":ok_hand:");
          }).catch(err => {
            message.reply(`\`${err}\``);
            return;
          });
      }, 1000);
};
if (cmd === "'vcunmute"){
 if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) {
        message.reply('```An error has occured\nReason: You do not have mute permission```')
        return;
      };
console.log('#')
      let user = message.mentions.users.first();
console.log('#')
      if (user == null) {
        message.reply("User does not exist. (Make sure you mention the user)");
        return;
      };
console.log('#')
      let reason = message.content.replace(params[0] + " ", "").replace(cmd + "ban ", "");
      if (reason == null || reason == "" || params[0] == null || params[1] == null) {
        message.reply("Command syntax: ** " + cmd + " @User Reason**");
        return;
      };
console.log('#')
      if(message.channel.guild.member.muteable == false) {
        message.reply("I can not mute them!");
        return;
      };
console.log('#')
      let banner = "";
      let banned = "";

      if (message.channel.guild.member.nickname == null) {
        banner = message.author.username;
      } else {
        banner = message.channel.guild.member(message.author).nickname;
      };
console.log('#')
      if (message.channel.guild.member(user).nickname == null) {
        banned = user.username;
      } else {
        banned = message.channel.guild.member(user).nickname;
      };
console.log('#')

  console.log('#')
      setTimeout(function () {
        message.channel.guild.member(user).setMute(false)
          .then(() => {
            message.channel.send(":ok_hand:");
          }).catch(err => {
            message.reply(`\`${err}\``);
            return;
          });
      }, 1000);
};



if (cmd === "'vcdeafen"){
 if (!message.guild.member(message.author).hasPermission("DEAFEN_MEMBERS")) {
        message.reply('```An error has occured\nReason: You do not have deafen permission```')
        return;
      };
console.log('#')
      let user = message.mentions.users.first();
console.log('#')
      if (user == null) {
        message.reply("User does not exist. (Make sure you mention the user)");
        return;
      };
console.log('#')
      let reason = message.content.replace(params[0] + " ", "").replace(cmd + "ban ", "");
      if (reason == null || reason == "" || params[0] == null || params[1] == null) {
        message.reply("Command syntax: ** " + cmd + " @User Reason**");
        return;
      };
console.log('#')
      if(message.channel.guild.member.muteable == false) {
        message.reply("I can not deafen them!");
        return;
      };
console.log('#')
      let banner = "";
      let banned = "";

      if (message.channel.guild.member.nickname == null) {
        banner = message.author.username;
      } else {
        banner = message.channel.guild.member(message.author).nickname;
      };
console.log('#')
      if (message.channel.guild.member(user).nickname == null) {
        banned = user.username;
      } else {
        banned = message.channel.guild.member(user).nickname;
      };
console.log('#')

  console.log('#')
      setTimeout(function () {
        message.channel.guild.member(user).setDeaf(true)
          .then(() => {
            message.channel.send(":ok_hand:");
          }).catch(err => {
            message.reply(`\`${err}\``);
            return;
          });
      }, 1000);
};
if (cmd === "'vcundeafen"){
 if (!message.guild.member(message.author).hasPermission("DEAFEN_MEMBERS")) {
        message.reply('```An error has occured\nReason: You do not have deafen permission```')
        return;
      };
console.log('#')
      let user = message.mentions.users.first();
console.log('#')
      if (user == null) {
        message.reply("User does not exist. (Make sure you mention the user)");
        return;
      };
console.log('#')
      let reason = message.content.replace(params[0] + " ", "").replace(cmd + "ban ", "");
      if (reason == null || reason == "" || params[0] == null || params[1] == null) {
        message.reply("Command syntax: ** " + cmd + " @User Reason**");
        return;
      };
console.log('#')
      if(message.channel.guild.member.muteable == false) {
        message.reply("I can not deafen them!");
        return;
      };
console.log('#')
      let banner = "";
      let banned = "";

      if (message.channel.guild.member.nickname == null) {
        banner = message.author.username;
      } else {
        banner = message.channel.guild.member(message.author).nickname;
      };
console.log('#')
      if (message.channel.guild.member(user).nickname == null) {
        banned = user.username;
      } else {
        banned = message.channel.guild.member(user).nickname;
      };
console.log('#')

  console.log('#')
      setTimeout(function () {
        message.channel.guild.member(user).setDeaf(false)
          .then(() => {
            message.channel.send(":ok_hand:");
          }).catch(err => {
            message.reply(`\`${err}\``);
            return;
          });
      }, 1000);
};





  const voiceChannel = message.member.voiceChannel;
if(message.content.startsWith("'queue")){
	if(message.content !== "'queue"){
	queuearr = []
	queuearr.push(`${message.content.split(" ").slice(1).join(" ")}`)
	};
	if(queuearr !== null){
		queue = voiceChannel.join()
        .then(connnection => {
            search(`${
				queuearr[0]
			}`, {
                maxResults: 1,
                key: 'AIzaSyDcp4pGZ2YampvZp-Fa8kNi-oYafZyUGVs'
            }, function (err, results) {
                if (err) return console.log(err);
console.log(results[0].link)
                const stream = ytdl(results[0].link, {

                    filter: 'audio'
                });
message.channel.send(`Now Playing: ${results[0].link}`)

                const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => queue);
            });
        });
	};
if(message.content === "'queue"){
message.channel.send(":x: Please tell me a song to add to the queue")

};
	if(queuearr === null){
		queue = voiceChannel.leave()
	};
};
	if (message.content.startsWith("'play")) {

const voiceCon = message.guild.voiceConnection;
var search = require('youtube-search');


    if (!voiceChannel) return message.reply(`, You must be in a voice channel **__IN THIS GUILD__** for this command to be used, so please joine a voice channel`);
    if (voiceChannel){
      if(voiceCon) {
        message.delete()
        message.channel.send("I am already playing music!")
    };
if(!voiceCon) {
  voiceChannel.join()
        .then(connnection => {
            search(`${message.content.split(" ").slice(1).join(" ")}`, {
                maxResults: 1,
                key: 'AIzaSyDcp4pGZ2YampvZp-Fa8kNi-oYafZyUGVs'
            }, function (err, results) {
                if (err) return console.log(err);
console.log(results[0].link)
                const stream = ytdl(results[0].link, {

                    filter: 'audio'
                });
message.channel.send(`Now Playing: ${results[0].link}`)

                const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave);
            });
        });

};
};
};

if (message.content.startsWith("'announce")) {
    if (message.member.permissions.has("MANAGE_GUILD")) {
      const chaanel = message.guild.channels.find(channel => channel.name.includes("announcements"))
      if (!chaanel) {
        message.channel.send(":x: Please create a channel including phrase `announcements`.")
      } else {
        if ((message.content === "'announce") || (message.content === "'announce")) {
          message.channel.send(":x: Tell me what to announce!")
        } else {
          message.delete();
          args = message.content.split(" ").slice(1).join(" ");
          announcement = args;
          message.channel.send("✅ Done!").then((m) => m.delete(3000))
          message.guild.channels.find(channel => channel.name.includes("announcements")).send(`📢 **Announcement from __${message.author.tag}__:**\n\n${announcement}`)
        }
      }
    } else {
      message.channel.send("🚫 You need the `Manage Server` permission.")
    }
  }



const web = client.emojis.get('319228237613891584')
const fun3 = client.emojis.get('314928550958465025')
const funny = client.emojis.get('314251437271941131')
	const info = new Discord.RichEmbed()
	.setColor(0x4F7942)
	.setAuthor("Turtle: the Discord bot", "https://cdn.discordapp.com/avatars/313747791329493002/f262ee93644056bb9366dbef70d29441.png?size=2048")
	.setThumbnail('https://cdn.discordapp.com/avatars/313747791329493002/f262ee93644056bb9366dbef70d29441.png?size=2048')
	.setDescription("Hi! I am Turtle, a work-in-progress bot that can play music, has many moderation commands, and also has fun commands! I hope you will enjoy using me! I am coded by Rythmix#1692 and Dhairyag23#7326, a link to the Official `Turtle Support` server will be in the `social links` section! My `Official Moderator` is Romulus947#5247, he helps out with ideas and is overall an **AMAZING** moderator and manager! Type `'help` to get started and have fun using me! Make sure to create a channel called `welcome-out` and another one called `mod-log` to be able to log things!")
	.addField("Social Invites", `[${fun3}](https://discord.gg/WrHMGZG)[${funny}](https://discordapp.com/oauth2/authorize?client_id=313747791329493002&scope=bot&permissions=8) [${web}](http://turtlebot.weebly.com/)`)
	.addField("Developers", "Rythmix#1692 & Dhairyag23#7326")
    .addField("Server Count", `${client.guilds.size}`, true)
	.addField("Users", `${client.users.size}`, true)
	.addField("Library", "Discord.js (v11.1.0)",true)
	.addField("Language", "JavaScript", true)
    .setFooter("Powered by Node.js | v7.6.0", "https://images-ext-2.discordapp.net/.eJwNwskNgCAQAMBeKIDlWA7phoARjSCB9WXsXSfzsHucLLBC1GcASLnxvM90jRx75-mqEIliKnVtNEELYxejjNPuj0p40FJKtN5bRIFy0crDMXlvG3s_h-Ib1g.G13JOBsAFraONKGrxhlvYJCXtWc")
 if (message.content.includes("'info")) {

	message.channel.send({embed: info})




 };





if (message.content.startsWith("'play")) {

const voiceCon = message.guild.voiceConnection;


    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`, You must be in a voice channel **__IN THIS GUILD__** for this command to be used, so please joine a voice channel`);
    if (voiceChannel){
      if(voiceCon) {
        message.delete()
        message.channel.send("I am already playing music!")
    };
if(!voiceCon) {
  voiceChannel.join()
        .then(connnection => {
            search(`${message.content.split(" ").slice(1).join(" ")}`, {
                maxResults: 1,
                key: 'AIzaSyDcp4pGZ2YampvZp-Fa8kNi-oYafZyUGVs'
            }, function (err, results) {
                if (err) return console.log(err);
console.log(results[0].link)
                const stream = ytdl(results[0].link, {

                    filter: 'audioonly'
                });
message.channel.send(`Now Playing: ${results[0].link}`)
				message.channel.send(info)
                const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());
            });
        });

};
};
};




if(message.content.startsWith("'stop")){
  let voiceCon = message.guild.voiceConnection;
  if(!voiceCon) {
    message.delete()
    message.channel.send("I am not playing music right now!")
};
if(voiceCon) {
	message.delete()
	voiceChannel.leave()
	message.channel.send(":white_check_mark: Successfully stopped playing music! :white_check_mark:")
};
};

 inviteurl = '';
if(message.member.hasPermission("CREATE_INSTANT_INVITE")){
message.guild.defaultChannel.createInvite({temporary: false, maxAge: 0, maxUses:0}).then(invitelink => {inviturl = invitelink.url}).then(invite2 => {
 const invite = new Discord.RichEmbed()
    .setColor(message.member.displayHexColor)
        .addField("Here's the link you need to add me to your server" ,"[**Click This To Add Me!**](https://discordapp.com/oauth2/authorize?client_id=313747791329493002&scope=bot&permissions=2146958591)\nOR... \n[**Join The Official Turtle Lounge By Clicking Here**](https://discord.gg/jFhrcsD)")
 .setDescription(`Link to join this guild: (${inviturl})`)
 if (message.content.includes("'invite")){





message.channel.send({embed: invite}).then(invitemain => {
message.author.send({embed: mobileinvite}).then(fundays => {
	message.channel.send("I sent you a DM just in case you are using a mobile device.")
	  });
	 });
	 };
 });
}
 inviteurl = '';
if(!message.member.hasPermission("CREATE_INSTANT_INVITE")){
message.guild.defaultChannel.createInvite({temporary: false, maxAge: 0, maxUses:0}).then(invitelink => {inviturl = invitelink.url}).then(invite2 => {
 const invite = new Discord.RichEmbed()
    .setColor(message.member.displayHexColor)
        .addField("Here's The Link You'll Need To Add Me To Your Server" ,"[**Click This To Add Me!**](https://discordapp.com/oauth2/authorize?client_id=313747791329493002&scope=bot&permissions=2146958591)\nOR... \n[**Join The Official Turtle Lounge By Clicking Here**](https://discord.gg/jFhrcsD)")
 .setDescription(`You do not have the create instant invite :cry:`)
 if (message.content.includes("'invite")){





message.channel.send({embed: invite}).then(invitemain => {
message.author.send({embed: mobileinvite}).then(fundays => {
	message.channel.send(message.author.username+", I sent you a DM just in case you are using a mobile device (Phone or Tablet)")
	  });
	 });
	 };
 });
}










if (message.content.includes("discord.gg")){
	if(!message.guild.channels.find(channel => message.channel.name.includes('partnered-servers'))){ message.delete();
	message.channel.send("This message Was __NOT__ sent In the #partnered-servers channels, so please make one that includes the text `partnered-servers` or send this message in it.")
};
};

if (message.content.startsWith("'rule ")){
message.delete();
	if (!message.member.roles.exists('name', 'Ruler')){
		message.channel.send("You Do Not Have A Role Called `Ruler`, please Get A Role Called `Ruler` to use This Command")
	};
	if(!message.guild.channels.find(channel => channel.name.includes('rules'))){
		message.channel.send("I could not find a channel that includes the phrase `rules` please make one that includes the phrase")
	};
	if (message.member.roles.exists('name', 'Ruler')){
	if(message.guild.channels.find(channel => channel.name.includes('rules'))){
 if(message.guild.channels.find(channel => channel.name.includes('rules'))){
   message.delete();
	message.guild.channels.find(channel => channel.name.includes('rules')).send(`${message.author.username} added the following rule: \n ${message.content.split(" ").slice(1).join(" ")}`)
	};
  };
	};

};









if(!message.mentions.users.first()){
  authorinfo3 = message.member
}
if(message.mentions.users.first()){
  authorinfo3 = message.mentions.members.first()
}

if(!message.mentions.users.first()){
  authorinfo2 = message.member
}
if(message.mentions.users.first()){
  authorinfo2 = message.mentions.members.first()
}
if(!message.mentions.users.first()){
  authorinfo = message.author
}
if(message.mentions.users.first()){
  authorinfo = message.mentions.users.first()
}
if (authorinfo.presence.game === null) {
      game = "Not playing any games.\n\u200b"
    } else {
      game = "Playing **" + authorinfo.presence.game.name + "**\n\u200b"
}
if(authorinfo3.nickname == null){
  nick = "No nickname"
}else{

  if(authorinfo3.nickname !== null){
      nick = authorinfo3.nickname

    }
  }
  if(authorinfo.bot){
    botornot = "[BOT]"
  }else{
    botornot = "[USER]"
  }
  if(authorinfo.displayAvatarURL === null){
	  url = "Does not have a custom avatar"
  }else{
	  url = authorinfo.displayAvatarURL
  }
console.log(authorinfo)
 if (authorinfo.presence.status === "online") {
        status = "Online"
      } else if (authorinfo.presence.status === "offline") {
        status = "Offline"
      } else if (authorinfo.presence.status === "idle") {
        status = "Idle"
      } else if (authorinfo.presence.status === "dnd") {
        status = "Do Not Disturb"
      };
	  // ${ keys.join(", ") }
	 // "MANAGE_GUILD".split(/[\s_]+/).map(s => s[0].toUpperCase() + s.substr(1).toLowerCase()).join(" ");
	  const permissions = authorinfo2.permissions.serialize(); let keys = Object.keys(permissions); keys = keys.filter(k => permissions[k]); keys
var userinfo = new Discord.RichEmbed()
.setColor(authorinfo3.displayHexColor)
.setAuthor(`${authorinfo.tag} ${botornot}`,`${authorinfo.displayAvatarURL}`)
.setThumbnail(`${authorinfo.displayAvatarURL}`)
.setDescription(game, "\u200b")
.addField(`User ID`,`${authorinfo.id}`, true)
.addField(`Roles [${authorinfo2.roles.size}]` ,`${authorinfo2.roles.map(c=>c.name).join(", ")}`, true)
.addField(`Status`,`${status}`, true)
.addField(`Permissions`,`Working on this`, true)
.addField(`Nickname`, nick)
.addField(`Joined Guild`,`${authorinfo2.joinedAt}`)
.addField(`Joined Discord`,`${authorinfo.createdAt}`)
.addField(`Avatar URL`, url)
.setFooter("Turtle 'userinfo",`https://cdn.discordapp.com/avatars/313747791329493002/f262ee93644056bb9366dbef70d29441.png?size=2048`)
.setTimestamp()

var guildinfo = new Discord.RichEmbed()
.setColor(authorinfo3.displayHexColor)
.setAuthor(`${message.guild.name} `,`${message.guild.iconURL}`)
.setThumbnail(`${message.guild.iconURL}`)
.addField(`Guild ID`,`${message.guild.id}`, true)
.addField(`Roles [${message.guild.roles.size}]` ,`${message.guild.roles.map(c=>c.name).join(", ")}`, true)
.addField(`Created`,`${message.guild.createdAt}`)
.addField(`Owner`, `${message.guild.owner}`)
.addField(`Icon URL`,`[Click Here](${message.guild.iconURL})`)
.setFooter("Turtle 'guildinfo",`https://cdn.discordapp.com/avatars/313747791329493002/f262ee93644056bb9366dbef70d29441.png?size=2048`)
.setTimestamp()



if(message.content.includes("'guildinfo")){
	message.reply({embed: guildinfo})
};







if(message.content.startsWith("'userinfo")){
message.delete(5000);
  message.channel.send({embed: userinfo})
console.log(authorinfo)
};
const moment = require('moment')
console.log(authorinfo)
var warn = new Discord.RichEmbed()
.setColor(authorinfo3.displayHexColor)
.setAuthor(`${authorinfo.tag} ${botornot}`,`${authorinfo.displayAvatarURL}`)
.setThumbnail(`${authorinfo.displayAvatarURL}`)
.setDescription(`**Action:** Warn\n**User Warned:** ${authorinfo.tag} (${authorinfo.id})\n**Reason:** ${message.content.split(" ").slice(2).join(" ")}\n**Status:** ${authorinfo.presence.status}\n**Discriminator:** ${message.author} (${message.author.id})`)
.setTimestamp()

const kicked = new Discord.RichEmbed()
.setColor(authorinfo3.displayHexColor)
.setAuthor(`${authorinfo.tag} ${botornot}`,`${authorinfo.displayAvatarURL}`)
.setThumbnail(`${authorinfo.displayAvatarURL}`)
.setDescription(`**Action:** Kick\n**User Kicked:** ${authorinfo.tag} (${authorinfo.id})\n**Reason:** ${message.content.split(" ").slice(2).join(" ")}\n**Status:** ${authorinfo.presence.status}\n**Discriminator:** ${message.author} (${message.author.id})`)
.setTimestamp()

const banned = new Discord.RichEmbed()
.setColor(authorinfo3.displayHexColor)
.setAuthor(`${authorinfo.tag} ${botornot}`,`${authorinfo.displayAvatarURL}`)
.setThumbnail(`${authorinfo.displayAvatarURL}`)
.setDescription(`**Action:** Ban\n**User Banned:** ${authorinfo.tag} (${authorinfo.id})\n**Reason:** ${message.content.split(" ").slice(2).join(" ")}\n**Status:** ${authorinfo.presence.status}\n**Discriminator:** ${message.author} (${message.author.id})`)
.setTimestamp()











if(message.content.startsWith("'warn")){
if(message.guild.member(message.author).hasPermission("MANAGE_GUILD")){
message.delete(5000);
if(message.author !== authorinfo)
if(message.guild.channels.find('name', 'mod-log')) {
          message.guild.channels.find('name', 'mod-log').send({embed: warn});


};
if(message.author == authorinfo){
  message.channel.send('Please mention a **User** (You cannot mention yourself)', {tts: true})
}
if(!message.guild.channels.find('name', 'mod-log')) {
  message.channel.send('Could not find a channel called mod-log, please create a channel called `mod-log`')
}
}
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")){
	message.reply('You must have the Manage Server/Guild permission to use this command')
};
};

if(message.content.startsWith("'google")){
const workinggoogle = new Discord.RichEmbed()
.setDescription(`[Click Here](https://www.google.com/search?q=${message.content.split(' ').slice(1).join('+')})`)
message.channel.send({embed: workinggoogle})
console.log(workinggoogle.description)
}





if (cmd === "'kick"){
 if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
        message.reply('```An error has occured\nReason: You do not have kick permission```')
        return;
      };
console.log('#')
      let user = message.mentions.users.first();
console.log('#')
      if (user == null) {
		  message.react("⚠")
        message.reply("User does not exist. (Make sure you mention the user)");
        return;
      };
console.log('#')
      let reason = message.content.replace(params[0] + " ", "").replace(cmd + "ban ", "");
      if (reason == null || reason == "" || params[0] == null || params[1] == null) {
        message.react("⚠")
		message.reply("Command syntax: ** " + cmd + " @User Reason**");
        return;
      };
console.log('#')
      if(!message.channel.guild.member.kickable) {
        message.react("⚠")
		message.reply("I can not kick them!");
        return;
      };
console.log('#')
      let banner = "";
      let banned = "";

      if (message.channel.guild.member.nickname == null) {
        banner = message.author.username;
      } else {
        banner = message.channel.guild.member(message.author).nickname;
      };
console.log('#')
      if (message.channel.guild.member(user).nickname == null) {
        banned = user.username;
      } else {
        banned = message.channel.guild.member(user).nickname;
      };
console.log('#')
      user.send(message.author.username + "#" + message.author.discriminator + " has kicked you from " + message.guild.name + "!" );
	  user.send({embed: kicked})
      if(message.guild.channels.find('name', 'mod-log')) {
                message.guild.channels.find('name', 'mod-log').send({embed: kicked});
              message.guild.channels.find('name' , 'mod-log').send('@everyone')
			  } else {
                message.guild.defaultChannel.send({embed: kicked});
  message.guild.defaultChannel.send("@everyone")
  };
  console.log('#')
      setTimeout(function () {
        message.channel.guild.member(user).kick()
          .then(() => {
            message.channel.send(":ok_hand:");
          }).catch(err => {
            message.reply(`\`${err}\``);
            return;
          });
      }, 1000);
};

if (cmd === "'ban"){
 if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
        message.reply('```An error has occured\nReason: You do not have ban permission```')
        return;
      };
console.log('#')
      let user = message.mentions.users.first();
console.log('#')
      if (user == null) {
        message.reply("User does not exist. (Make sure you mention the user)");
        return;
      };
console.log('#')
      let reason = message.content.replace(params[0] + " ", "").replace(cmd + "ban ", "");
      if (reason == null || reason == "" || params[0] == null || params[1] == null) {
        message.reply("Command syntax: ** " + cmd + " @User Reason**");
        return;
      };
console.log('#')
      if(message.channel.guild.member.bannable == false) {
        message.reply("I can not ban them!");
        return;
      };
console.log('#')
      let banner = "";
      let banned = "";

      if (message.channel.guild.member.nickname == null) {
        banner = message.author.username;
      } else {
        banner = message.channel.guild.member(message.author).nickname;
      };
console.log('#')
      if (message.channel.guild.member(user).nickname == null) {
        banned = user.username;
      } else {
        banned = message.channel.guild.member(user).nickname;
      };
console.log('#')
      user.send({embed: banned});
      if(message.guild.channels.find('name', 'mod-log')) {
                message.guild.channels.find('name', 'mod-log').send({embed: banned});
              } else {
                message.guild.defaultChannel.send({embed: banned});
  };
  console.log('#')
      setTimeout(function () {
        message.channel.guild.member(user).ban()
          .then(() => {
            message.channel.send(":ok_hand:");
          }).catch(err => {
            message.reply(`\`${err}\``);
            return;
          });
      }, 1000);
};



exports.run = function(client, message, args) {
  if(message.content.startsWith("'search")){
  const Discord = require('discord.js')
  const moment = require(`moment`)
  const search = message.content.split(' ').slice(1).join('_');
  const search2 = message.content.split(' ').slice(1).join(' ');
  const Time = moment().format('MMMM Do YYYY | h:mm:ss a');
  let embed = new Discord.RichEmbed()
  .setAuthor(`Google search`, `https://cdn.discordapp.com/emojis/311824300166479872.png`)
  .setDescription(`:arrows_counterclockwise: Searching for: **${search2}**`)
  .setFooter(`${Time}`, `https://cdn.discordapp.com/emojis/311824356689051652.png`)
  .setColor(0x4F7942)
  message.channel.send({embed}).then(message => {
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
        message.edit({embed : error})
      }
      if(!res.links.length) return message.edit({embed : embed1})
      for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
        embed2 = new Discord.RichEmbed()
        .setAuthor(`Google search`, `https://cdn.discordapp.com/emojis/311824300166479872.png`)
        .setDescription(`:white_check_mark: search found: [${link.title}](${link.href})\n \n${link.description}`)
        .setFooter(`${Time}`, `https://cdn.discordapp.com/emojis/311824356689051652.png`)
        .setColor(0x4F7942)
        message.edit({embed : embed2})
      }
    })
  });
}
};




if(message.content.includes("'hastebin")){
  const snekfetch = require('snekfetch');
  snekfetch.post('https://hastebin.com').send(`${message.content.split(" ").slice(1).join(" ")}\n\n-Hastebin Bot by ${client.user.tag}`).then(function(res, err) {
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

if(message.content.startsWith("'googe")){
exports.run = function(client, message, args) {

  const moment = require(`moment`)
  const search = message.content.split(' ').slice(1).join('_');
  const search2 = message.content.split(' ').slice(1).join(' ');
  const Time = moment().format('MMMM Do YYYY | h:mm:ss a');
  let embedsearch = new Discord.RichEmbed()
  .setAuthor(`Google search`, `https://cdn.discordapp.com/emojis/311824300166479872.png`)
  .setDescription(`:arrows_counterclockwise: Searching for: **${search2}**`)
  .setFooter(`${Time}`, `https://cdn.discordapp.com/emojis/311824356689051652.png`)
  .setColor(0x4F7942)
  message.channel.send({embed: embedsearch}).then(haus => {
    if(!search) return message.channel.send(`**[Turtle]** No search term specified`)
    const google = require('google')
    google.resultsPerPage = 1
    var nextCounter = 0
   let embednotfound = new Discord.RichEmbed()
    .setAuthor(`Google search`, `https://cdn.discordapp.com/emojis/311824300166479872.png`)
    .setDescription(`:negative_squared_cross_mark: Term: **${search2}** not found`)
    .setFooter(`${Time}`, `https://cdn.discordapp.com/emojis/311824356689051652.png`)
    .setColor(0xffa500)
    google(search, function (err, res){
      if (err) {
       let error = new Discord.RichEmbed()
        .setAuthor(`Google search`, `https://cdn.discordapp.com/emojis/311824300166479872.png`)
        .setDescription(`:name_badge:  An error occured: \`${err}\``)
        .setFooter(`${Time}`, `https://cdn.discordapp.com/emojis/311824356689051652.png`)
        .setColor(0xff0000)
        haus.edit({embed : error})
      }
      if(!res.links.length) return haus.edit({embed : embednotfound})
      for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
      let  embedfound = new Discord.RichEmbed()
        .setAuthor(`Google search`, `https://cdn.discordapp.com/emojis/311824300166479872.png`)
        .setDescription(`:white_check_mark: search found: [${link.title}](${link.href})\n \n${link.description}`)
        .setFooter(`${Time}`, `https://cdn.discordapp.com/emojis/311824356689051652.png`)
        .setColor(0x4F7942)
       haus.edit({embed : embedfound})
      }
    })
  });
}
};
if(message.content == "'servercount"){
  message.channel.send(`I am in **${client.guilds.size}** servers!`)
};
if(message.content.startsWith("'8ball")){
if(message.content !== "'8ball"){
  array = ["As I see it, yes", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don’t count on it", "It is certain", "It is decidedly so", "Most likely", "My reply is no", "My sources say no", "Outlook good", "Outlook not so good", "Reply hazy, try again", "Signs point to yes", "Very doubtful", "Without a doubt", "Yes","Yes, definitely","You may rely on it."]
 var rand = array[Math.floor(Math.random() * array.length)];
const arraytest = new Discord.RichEmbed()
.setColor(0x060606)
.setAuthor(rand, "https://cdn.discordapp.com/attachments/301463061892694027/314870968294047747/f73a8294c3ac519665af224d98bf411e_1.png")


message.channel.send({embed: arraytest});
};
if(message.content === "'8ball"){
	message.channel.send(":x: Please ask me something!")
};
};

const {inspect} = require("util");
const nano = require("nanoseconds");
if(message.content.startsWith("'eval")){
async function update(bot, message, promise, embed) {
    const start = process.hrtime();

    let done = await promise;

    const end = nano(process.hrtime(start));

    if (typeof done !== "string") done = inspect(done);

    logger.log(done);

    embed.addField("Promise", (done.length < 900 ? `\`\`\`${done}\`\`\`` : "```\nPromise return too long.\nLogged to console\n```") + `\nResolved in ${(end / 1000).toFixed(3)}\u03bcs`);

    message.edit(message.content, {embed});
}

exports.run = (bot, message, args) => {
    const code = args.join(" ");
    let promise;

    try {
        if (!code) return logger.log("No code provided!");

        const start = process.hrtime();

        let evaled = eval(code);

        const runTime = nano(process.hrtime(start));

        if (typeof evaled !== "string") {
            if (evaled instanceof Promise) promise = evaled;
            evaled = inspect(evaled);
        }

        logger.log(code);
        logger.log(evaled);

        const embed = new Discord.RichEmbed()
			.setTitle("**OUTPUT**")
			.setDescription(evaled.length < 2036 ? "```js\n" + evaled.replace(/`/g, "`\u200b").replace(new RegExp(`${bot.token}${bot.config.customsearch ? `|${bot.config.customsearch.token}|${bot.config.customsearch.id}` : ""}`, "g"), "[SECRET]") + "\n```" : "Output too long.\nSaved to console.")
			.setFooter(`Runtime: ${(runTime / 1000).toFixed(3)}\u03bcs`, "https://cdn.discordapp.com/attachments/286943000159059968/298622278097305600/233782775726080012.png")
			.setColor(24120);

        message.edit(`**INPUT:** \`${code}\``, {embed}).then(async message => {
            if (promise) update(bot, message, promise, embed);
        }).catch(logger.error);
    } catch (err) {
        logger.error(err);
        message.edit("**INPUT:** `" + code + "`", {embed: {
            title:       "<:panicbasket:267397363956580352>ERROR<:panicbasket:267397363956580352>",
            description: `\`\`\`xl\n${err}\n\`\`\``,
            color:       13379110
        }});
    }
};

exports.name = "eval";
exports.type = "utility";
exports.description = "Evaluates code from a provided string.";
exports.use = "eval [code]";
exports.aliases = [
    "run"
];



};

  if (message.content.startsWith("'roll")){
    var responses = ["🎲 Rolled a **1**.", "🎲 Rolled a **2**.", "🎲 Rolled a **3**.", "🎲 Rolled a **4**.", "🎲 Rolled a **5**.", "🎲 Rolled a **6**."]
    var rand =  responses[Math.floor(Math.random() * responses.length)];
    message.channel.send("🎲 Rolling...").then((m) => m.edit(rand));
  }
  if (message.content.startsWith("'flip")){
    var responses = ["Flipped **Heads!**", "Flipped **Tails!**"]
    var rand =  responses[Math.floor(Math.random() * responses.length)];
    message.channel.send("Flipping...").then((m) => m.edit(rand));
  }




});






process.on('unhandledRejection', err => console.error('Uncaught Promise Error: \n'+`${err.stack}`)
	);
