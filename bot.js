require('dotenv').config();
const botKey = process.env.BOT_TOKEN; // Bot Token
const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

bot.once('ready', () => {
	console.log('Loading...');
	console.log('*** BOT ONLINE ***');
});

bot.login(botKey);

// Server Greeting
bot.on('guildMemberAdd', member => {
  console.log(`${member} has joined the server`);
   const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
   if (!channel) return;
   channel.send(`Welcome to the server ${member}!`);
 });

 // BOT Presennce
 bot.on('ready', () => {
  bot.user.setPresence({ activity: { name: 'https://mikejferguson.com' }, status: 'online' })
});

// Chat Commands
bot.on('message', message => {
  console.log(`${ message.author.username }: ${ message.content }`);
  if (message.content === '!ping') {
    message.reply('Pong!');
  } else if(message.content === '!avatar') {
    message.reply(message.author.displayAdvatarURL);
  } else if(message.content === '!dave') {
    message.reply('https://www.youtube.com/watch?v=BQgdOsjArig')
  } else if(message.content ==='!portfolio') {
		message.channel.send('Mike\'s Portfolio...');
		message.channel.send('http://www.mikejferguson.com/');
  } else if(message.content== '!flip') {
    message.channel.send('**Flipping a coin...**');
    message.channel.send(`It landed on ${flipCoin()}`);
  } else if(message.content== '!d20') {
    message.channel.send('**Rolling a d20!**');
    message.channel.send(`It landed on ${d20()}`);
  } // ! Help Menu 
    else if(message.content == '!help') {
      const embed = new MessageEmbed()
        .setTitle('* * * M.U.R.F Commands * * *')
        .setColor('#e91e63')
        .setDescription("All commands must be LOWERCASE and led by a '!' (Ex. '!command')")
        .addField(":exclamation:! avatar", ":white_small_square: - Returns a JPG of your Avatar", false)
        .addField(":exclamation:! dave", ":white_small_square: - Fuck you Dave", false)
        .addField(":exclamation:! portfolio", ":white_small_square: - Links you to Mike's Portfolio", false)
        .addField(":exclamation:! flip", ":white_small_square: - Flip a coin and see who wins!", false)
        .addField(":exclamation:! trivia", ":white_small_square: - Receive a random WoW related question! *[WIP]*", false)
        .addField(":exclamation:! play", ":white_small_square: - Plays a YouTube video via URL/Search. *[WIP]*" , false)
        message.channel.send(embed);
	}
  
});

// Coin Flip
function flipCoin() {
  const flipCalc = Math.floor(Math.random() * 2 + 1);
  if(flipCalc === 1) {
    flipResult = 'Heads';
  } else {
    flipResult = 'Tails';
  }; 
  return flipResult;
};

// Roll D20
function d20() {
  const rollCalc = Math.floor(Math.random() * 20 + 1);
  return rollCalc;
}