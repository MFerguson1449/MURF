const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js'); // Attachment Extract
const bot = new Discord.Client(); // Create Discord client
// clientInformation.music = require('discord.js-musicbot-addon'); // Put the Music module in the the bot object
require ('dotenv').config();

bot.once('ready', () => {
   console.log('***BOT ONLINE***');
   console.log(process.env);
});

