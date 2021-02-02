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
  } else if(message.content === '!trivia') {
    message.channel.send(`${randomTrivia()}`);
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
        .addField(":exclamation:! portfolio", ":white_small_square: - Links you to Mike's Portfolio", false)
        .addField(":exclamation:! flip", ":white_small_square: - Flip a coin!", false)
        .addField(":exclamation:! d20", ":white_small_square: - Roll a D20 die!", false)
        .addField(":exclamation:! trivia", ":white_small_square: - Receive a random WoW related question!", false)
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
};

// Randomize Trivia Question
function randomTrivia() {
  const triviaSize = Object.keys(trivia.triviaQuestions).length;
  const randomNumber = Math.floor(Math.random() * triviaSize);
  const randomQuestion = trivia.triviaQuestions[randomNumber].question;
  return randomQuestion;
};

// ! Trivia Object
const trivia = {
  "name": "Trivia Questions",
  "triviaQuestions": [
    {
      "id": "trivia1",
      "question": "Who is Medivh's apprentice?",
      "answer": ""
    },
    {
    "id": "trivia2",
    "question": "What room in Stormwind City did you used to have to visit to qeue for a battleground?",
    "answer": ""
  },
  {
    "id": "trivia3",
    "question": "What was the name of the Legendary that dropped only once?",
    "answer": ""
  },
  {
      "id": "trivia4",
    "question": "What dungeon dropped the key to Shadow Labs?",
    "answer": ""
  },
  {
    "id": "trivia5",
    "question": "What raid leader was famous for the quote 'Many whelps, handle it!'",
    "answer": ""
  },
  {
    "id": "trivia6",
    "question": "What was the name of the guild that is known today for their guild leader's rage on Onyxia in Vanilla WoW?",
    "answer": ""
  },
  {
    "id": "trivia7",
    "question": "What rare world drop trinket drops anywhere within Wrath of the Lich King?",
    "answer": ""
  },
  {
    "id": "trivia8",
    "question": "Who used to be renown for playing porn over our Ventrilo server?",
    "answer": ""
  },
  {
    "id": "trivia9",
    "question": "What paladin got so upset with Unholy Dynasty that he spam shamed our guild name in trade chat?",
    "answer": ""
  },
  {
    "id": "trivia10",
    "question": "What was the minimum reputation needed to enter Naxxramas?",
    "answer": ""
  },
  {
    "id": "trivia11",
    "question": "Who was the star of the famous YouTube video featuring the quote 'Imma chargin muh Fireball!'",
    "answer": ""
  },
  {
    "id": "trivia12",
    "question": "Who says the famous quote 'Hello beautiful lady, you buy cat?'",
    "answer": ""
  },
  {
    "id": "trivia13",
    "question": "What YouTube channel was known for their Machinima Warcraft videos. (Ex. Crick in the Back!, ROFLMAO!, The Anti-Elf Anthem, Tank Tank Heal Tank)",
    "answer": ""
  },
  {
    "id": "trivia14",
    "question": "What YouTube channel was known for their Warcraft Music videos. (Ex. Hard Like Heroic, M.A.G.E., Ni Hao, Assassinate)",
    "answer": ""
  },
  {
    "id": "trivia15",
    "question": "How do you log out via chat?",
    "answer": ""
  },
  {
    "id": "trivia16",
    "question": "What was the name of the guild led by the almighty warrior 'Catscratch'?",
    "answer": ""
  },
  {
    "id": "trivia17",
    "question": "What was the night elf shadow priest racial ability called?",
    "answer": ""
  },
  {
    "id": "trivia18",
    "question": "Which of the dreadlords was Arthas hell bent on killing?",
    "answer": ""
  },
  {
    "id": "trivia19",
    "question": "What was Deathwing's name before he became corrupted by the old gods?",
    "answer": ""
  },
  {
    "id": "trivia20",
    "question": "Which race did the shadow priest racial ability 'Devouring Plague' belong to?",
    "answer": ""
  },
  {
    "id": "trivia21",
    "question": "What part of Thousand Needles that is now underwater was once expansively barren and flat?",
    "answer": ""
  },
  {
    "id": "trivia22",
    "question": "Which weapon would initiate an event if worn while within The Scarlet Monastary?",
    "answer": ""
  },
  {
    "id": "trivia23",
    "question": "What was the name of the item that if used would kill all enemies within 30 yards of you? * * Hint * * : It was used as an exploit in Ulduar.",
    "answer": ""
  },
  {
    "id": "trivia24",
    "question": "The use of what abilitity/item led to the banning of a guild upon their World First Heroic Lich King kill?",
    "answer": ""
  },
  {
    "id": "trivia25",
    "question": "What item was used to open a locked door within Ulduman?",
    "answer": ""
  },
  {
    "id": "trivia26",
    "question": "Which encounter was was said to be statistically impossible during the Burning Crusade, until fixed in a later patch?",
    "answer": ""
  },
  {
    "id": "trivia27",
    "question": "During the Warlords of Draenor expansion, what was the name of the zone was set to be released but never was?",
    "answer": ""
  },
  {
    "id": "trivia28",
    "question": "Which melee DPS trinket that dropped in Icecrown Citadel would morph your appearance ?",
    "answer": ""
  },
  {
    "id": "trivia29",
    "question": "Which class in Wrath of the Lich King was fabled to increase their DPS by standing in fire?",
    "answer": ""
  },
  {
    "id": "trivia30",
    "question": "Which Unholy Dynasty member enjoying using 'brutal' as an adjective?",
    "answer": ""
  },
  {
    "id": "trivia31",
    "question": "What is the name of the shadow priest artifact weapon?",
    "answer": ""
  },
  {
    "id": "trivia32",
    "question": "What was Varian Wrynn's gladiator name?",
    "answer": ""
  },
  {
    "id": "trivia33",
    "question": "Who is the Loa of Kings?",
    "answer": ""
  },
  {
    "id": "trivia34",
    "question": "In Classic, what level would a priest learn Shadowform?",
    "answer": ""
  },
  {
    "id": "trivia35",
    "question": "When did Unholy Dynasty get the first Festergut kill? (month/day/year) :^)",
    "answer": ""
  },
  {
    "id": "trivia36",
    "question": "How many Dragon Aspects are there?",
    "answer": ""
  },
  {
    "id": "trivia37",
    "question": "Where is Sentinel Hill?",
    "answer": ""
  },
  {
    "id": "trivia38",
    "question": "Which patch added Black Temple?",
    "answer": ""
  },
  {
    "id": "trivia39",
    "question": "What is the name of the Alliance specific Pandaren Faction?",
    "answer": ""
  },
  {
    "id": "trivia40",
    "question": "What did spirit originally do?",
    "answer": ""
  },
  {
    "id": "trivia41",
    "question": "What was the minimum reputation needed to get into Naxxramas in Classic?",
    "answer": ""
  },
  {
    "id": "trivia42",
    "question": "What was the name of the special event boss in BC Karazhan",
    "answer": ""
  },
  {
    "id": "trivia43",
    "question": "Where did Millhouse Manastorm first appear?",
    "answer": ""
  },
  {
    "id": "trivia44",
    "question": "Who created the Emerald Dream?",
    "answer": ""
  },
  {
    "id": "trivia45",
    "question": "What was Varian Wrynn's wifes name?",
    "answer": ""
  },
  {
    "id": "trivia46",
    "question": "What is the name of the island that is home to the Night Elves World Tree?",
    "answer": ""
  },
  {
    "id": "trivia47",
    "question": "Who is the female Maghar Orc mate of Thrall?",
    "answer": ""
  },
  {
    "id": "trivia48",
    "question": "The two-headed wolf, Omen, can be fought during which world event?",
    "answer": ""
  },
  {
    "id": "trivia49",
    "question": "What was the first type of bandage learned with the First Aid proffession?",
    "answer": ""
  },
  {
    "id": "trivia50",
    "question": "What scepter could only be acquired by one player per server and was needed to open the gates of Ahn\'Qiraj?",
    "answer": ""
  },
  {
    "id": "trivia51",
    "question": "Who was Jaina Proudmoore\'s mentor in the Kirin Tor?",
    "answer": ""
  },
  {
    "id": "trivia52",
    "question": "In which zone can the abomination known as Stitches be found?",
    "answer": ""
  },
  {
    "id": "trivia53",
    "question": "Which Dragon Aspect leads the bronze dragonflight?",
    "answer": ""
  },
  {
    "id": "trivia54",
    "question": "Who was the elemental lord of air?",
    "answer": ""
  },
  {
    "id": "trivia55",
    "question": "Garona Halforcen killed which Human king?",
    "answer": ""
  },
  {
    "id": "trivia56",
    "question": "Don Carlos Famous Hat allows owners to summon what type of incorporeal spirit?",
    "answer": ""
  },
  {
    "id": "trivia57",
    "question": "Which ogre was once an apprentice of Gul\'dan and would later lead the Twilight Hammer?",
    "answer": ""
  },
  {
    "id": "trivia58",
    "question": "Dalaran was originally located in which Eastern Kingdoms zone?",
    "answer": ""
  },
  {
    "id": "trivia59",
    "question": "What Dark Iron Dwarf boss can be fought in Blackrock Depths during Brewfest?",
    "answer": ""
  },
  {
    "id": "trivia60",
    "question": "Which Tauren leader was killed by Garrosh Hellscream?",
    "answer": ""
  },
  {
    "id": "trivia61",
    "question": "In which zone can the Gallywix Pleasure Palace be found?",
    "answer": ""
  },
  {
    "id": "trivia62",
    "question": "Who was the last Pandaren emperor of Pandaria?",
    "answer": ""
  },
  {
    "id": "trivia63",
    "question": "Nightsong Battlefear is a raid tier set for which class?",
    "answer": ""
  },
  {
    "id": "trivia64",
    "question": "What zone did Goblins reshape to more resemble the symbol of the horde?",
    "answer": ""
  },
  {
    "id": "trivia65",
    "question": "What was the name of the former leader of the Kirin Tor and husband Vereesa Windrunner?",
    "answer": ""
  },
  ]
};