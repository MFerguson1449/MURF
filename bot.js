require('dotenv').config();
const botKey = process.env.BOT_TOKEN; // Bot Token
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.once('ready', () => {
	console.log('*** BOT ONLINE ***');
});

bot.login(botKey);

// Server Greeting
bot.on('guildMemberAdd', member => {
   const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
   if (!channel) return;
   channel.send(`Welcome to the server, ${member}`);
 });

// Ping Pong
bot.on('message', message => {
   if (message.content === 'ping') {
      message.channel.send('Pong!');
   }
})

// Server Moderation
bot.on('message', message => {
   if (!message.guild) return;
     const user = message.mentions.users.first();
     if (user) {
       const member = message.guild.member(user);
       if (member) {
         member
           .kick('Optional reason that will display in the audit logs')
           .then(() => {
             message.reply(`Successfully kicked ${user.tag}`);
           })
           .catch(err => {
             message.reply('I was unable to kick the member');
             console.error(err);
           });
       } else {
         message.reply("That user isn't in this guild!");
       }
     } else {
       message.reply("You didn't mention the user to kick!");
   }
});
