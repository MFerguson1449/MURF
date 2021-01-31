require('dotenv').config();
const botKey = process.env.BOT_TOKEN; // Bot Token
const Discord = require('discord.js');
const bot = new Discord.Client();

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

// Chat Commands
bot.on('message', message => {
  console.log(`${ message.author.username }: ${ message.content }`);
  if (message.content === '!ping') {
    message.reply('Pong!');
  } else if(message.content === '!avatar') {
    message.reply(message.author.displayAdvatarURL);
  } else if(message.content === '!dave') {
    message.reply('https://www.youtube.com/watch?v=BQgdOsjArig')
  } else if(message.content== '!flip') {
    //flipCoin();
    message.channel.send('Flipping a coin...');
    message.channel.send(`It landed on ${flipCoin()}`)
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
}