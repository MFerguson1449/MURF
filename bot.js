require('dotenv').config();
const botKey = process.env.BOT_TOKEN; // Bot Token
const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

// Bot Ready
bot.once('ready', () => {
	console.log(`

  __    __     __  __     ______     ______  
 /\\ "-./  \\   /\\ \\\/\\ \\   /\\  == \\   /\\  ___\\ 
 \\ \\ \\-./\\ \\  \\ \\ \\\_\\ \\  \\ \\  __<   \\ \\  __\\ 
  \\ \\\_\\ \\ \\\_\\  \\ \\_____\\  \\ \\_\\ \\\_\\  \\ \\\_\\   
   \\/_/  \\/_/   \\/_____/   \\/_/ /_/   \\/_/   

BOT Online!
 `);});

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

// Chat Log
bot.on('message', message => {
  let time = new Date();
  let dd = String(time.getDate()).padStart(2, '0');
  let mm = String(time.getMonth() + 1).padStart(2, '0');
  let yyyy = time.getFullYear();
  if (!message.author.bot) {
    console.log(`
[${ mm + '/' + dd + '/' + yyyy }|${ time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() }](${ message.guild.name }) ${ message.author.username }: ${ message.content }`);
  }
});

// Chat Commands
bot.on('message', message => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  } else if(message.content === '!avatar') {
    message.reply(message.author.displayAvatarURL());
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
  } else if(message.content== '!d100') {
    message.channel.send('**Rolling a d100!**');
    message.channel.send(`It landed on ${rollDice(100)}`);
  } else if(message.content== '!d20') {
    message.channel.send('**Rolling a d20!**');
    message.channel.send(`It landed on ${rollDice(20)}`);
  }else if(message.content== '!d12') {
    message.channel.send('**Rolling a d12!**');
    message.channel.send(`It landed on ${rollDice(12)}`);
  }else if(message.content== '!d10') {
    message.channel.send('**Rolling a d10!**');
    message.channel.send(`It landed on ${rollDice(10)}`);
  }else if(message.content== '!d8') {
    message.channel.send('**Rolling a d8!**');
    message.channel.send(`It landed on ${rollDice(8)}`);
  }else if(message.content== '!d6') {
    message.channel.send('**Rolling a d6!**');
    message.channel.send(`It landed on ${rollDice(6)}`);
  }else if(message.content== '!d20') {
    message.channel.send('**Rolling a d4!**');
    message.channel.send(`It landed on ${rollDice(4)}`);
  }
  // ! Help Menu 
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

// Roll D&D Dice
function rollDice (diceMax) {
  const rollResult = Math.floor(Math.random() * diceMax + 1)
  return rollResult;
};

// Randomize Trivia Question
function randomTrivia() {
  const triviaSize = Object.keys(trivia.triviaQuestions).length;
  const randomNumber = Math.floor(Math.random() * triviaSize);
  const randomQuestion = trivia.triviaQuestions[randomNumber].question;
  return randomQuestion;
};

// Trivia Game
// function triviaGame {
//   const isGameActive = true;
//   if (isGameActive = true) {
//     triviaGameO
//   }
// };

// ! Trivia Object
const trivia = {
  "name": "Trivia Questions",
  "triviaQuestions": [
    {
      "id": "trivia1",
      "question": "Who is Medivh's apprentice?",
      "answer": "Khadgar"
    },
    {
    "id": "trivia2",
    "question": "What room in Stormwind City did you used to have to visit to qeue for a battleground?",
    "answer": "War Room"
  },
  {
    "id": "trivia3",
    "question": "What was the name of the Legendary that dropped only once?",
    "answer": "Talisan of Binding Shard"
  },
  {
      "id": "trivia4",
    "question": "What dungeon dropped the key to Shadow Labs?",
    "answer": "Sethekk Halls"
  },
  {
    "id": "trivia5",
    "question": "What raid leader was famous for the quote 'Many whelps, handle it!'",
    "answer": "Dives"
  },
  {
    "id": "trivia6",
    "question": "What was the name of the guild that is known today for their guild leader's rage on Onyxia in Vanilla WoW?",
    "answer": "Wipe Club"
  },
  {
    "id": "trivia7",
    "question": "What rare world drop toy(It used to be a trinket) drops anywhere within Wrath of the Lich King?",
    "answer": "Super Simian Sphere"
  },
  {
    "id": "trivia9",
    "question": "What paladin got so upset with Unholy Dynasty that he spam shamed our guild name in trade chat?",
    "answer": "Vanilor"
  },
  {
    "id": "trivia10",
    "question": "In order to become attuned to Naxrammas, when reputation did you need to first reach Honored with?",
    "answer": "Argent Dawn"
  },
  {
    "id": "trivia11",
    "question": "What famous YouTube video did the quote 'Imma chargin muh Fireball!' come from",
    "answer": "Jimmy: The World of Warcraft Story"
  },
  {
    "id": "trivia12",
    "question": "What famous YouTube video did the quote 'Hello beautiful lady! You buy cat?' come from",
    "answer": "Pepitoz: The World of Warcraft Story"
  },
  {
    "id": "trivia13",
    "question": "What YouTube channel was known for their Machinima Warcraft videos. (Ex. Crick in the Back!, ROFLMAO!, The Anti-Elf Anthem, Tank Tank Heal Tank)",
    "answer": "Oxhorn"
  },
  {
    "id": "trivia14",
    "question": "What YouTube channel was known for their Warcraft Music videos. (Ex. Hard Like Heroic, M.A.G.E., Ni Hao, Assassinate)",
    "answer": "Nyhm"
  },
  {
    "id": "trivia15",
    "question": "How do you log out of World of Warcraft via chat?",
    "answer": "/camp"
  },
  {
    "id": "trivia16",
    "question": "What was the name of the guild led by the almighty warrior 'Catscratch'?",
    "answer": "Eminent Gods"
  },
  {
    "id": "trivia17",
    "question": "What was the name of the offensive racial ability received by Night Elf Priests?",
    "answer": "Starshards"
  },
  {
    "id": "trivia19",
    "question": "What was Deathwing's name before he became corrupted by the old gods?",
    "answer": "Neltharion"
  },
  {
    "id": "trivia20",
    "question": "Which race did the Shadow Priest racial ability 'Devouring Plague' belong to?",
    "answer": "Undead"
  },
  {
    "id": "trivia21",
    "question": "What part of Thousand Needles, that is now underwater, was once expansively barren and flat?",
    "answer": "Shimmering Flats"
  },
  {
    "id": "trivia22",
    "question": "Which weapon would initiate an event if worn while within The Scarlet Monastary?",
    "answer": "Corrupted Ashbringer"
  },
  {
    "id": "trivia23",
    "question": "What was the name of the item that if used would kill all enemies within a 30 yard radius of you? * * Hint * * : It was used as an exploit in Ulduar.",
    "answer": "Martin Fury"
  },
  {
    "id": "trivia24",
    "question": "The use of what engineering item led to the banning of a guild upon their World First Heroic Lich King kill?",
    "answer": "Saronite Bombs"
  },
  {
    "id": "trivia25",
    "question": "What boss emerges from a hidden door, that is opened with the Staff of Prehistoria?",
    "answer": "Ironaya"
  },
  {
    "id": "trivia26",
    "question": "Which encounter was was said to be statistically impossible during the Burning Crusade, until fixed in a later patch?",
    "answer": "M'uru"
  },
  {
    "id": "trivia27",
    "question": "During the Warlords of Draenor expansion, what was the name of the zone was set to be released but never was?",
    "answer": "Zangermarsh"
  },
  {
    "id": "trivia28",
    "question": "Which melee DPS trinket that dropped in Icecrown Citadel would morph your appearance?",
    "answer": "Deathbringer's Will"
  },
  {
    "id": "trivia31",
    "question": "What is the name of the shadow priest artifact weapon?",
    "answer": "Xal,atath, Blade of the Black Empire"
  },
  {
    "id": "trivia32",
    "question": "What was Varian Wrynn's gladiator name?",
    "answer": "Lo'Gosh"
  },
  {
    "id": "trivia33",
    "question": "Who is the Loa of Kings?",
    "answer": "Rezan"
  },
  {
    "id": "trivia34",
    "question": "In Classic, what level could a priest learn Shadowform?",
    "answer": "40"
  },
  {
    "id": "trivia36",
    "question": "How many Dragon Aspects are there?",
    "answer": "5"
  },
  {
    "id": "trivia37",
    "question": "Where is Sentinel Hill?",
    "answer": "Westfall"
  },
  {
    "id": "trivia38",
    "question": "What patch added Black Temple?",
    "answer": "2.1"
  },
  {
    "id": "trivia39",
    "question": "What is the name of the Alliance specific Pandaren Faction?",
    "answer": "Tushui"
  },
  {
    "id": "trivia40",
    "question": "What secondary stat did blizzard remove in patch 7.0.3 that used to increased your mana regeneration?",
    "answer": "Spirit"
  },
  {
    "id": "trivia42",
    "question": "What was the name of the summonable boss in Burning Crusade's Karazhan",
    "answer": "Nightbane"
  },
  {
    "id": "trivia43",
    "question": "Where did Millhouse Manastorm first appear?",
    "answer": "Arcatraz"
  },
  {
    "id": "trivia44",
    "question": "Who created the Emerald Dream?",
    "answer": "Freya"
  },
  {
    "id": "trivia45",
    "question": "What was Varian Wrynn's wifes name?",
    "answer": "Tiffin"
  },
  {
    "id": "trivia46",
    "question": "What is the name of the island that is home to the Night Elves World Tree?",
    "answer": "Teldrassil"
  },
  {
    "id": "trivia47",
    "question": "Who is the female Maghar Orc mate of Thrall?",
    "answer": "Aggra"
  },
  {
    "id": "trivia48",
    "question": "The two-headed wolf, Omen, can be fought during which world event?",
    "answer": "Lunar Festival"
  },
  {
    "id": "trivia49",
    "question": "What was the first type of bandage learned with the First Aid proffession?",
    "answer": "Linen Bandage"
  },
  {
    "id": "trivia50",
    "question": "What scepter could only be acquired by one player per server and was needed to open the gates of Ahn\'Qiraj?",
    "answer": "The Scepter of the Shifting Sands"
  },
  {
    "id": "trivia51",
    "question": "Who was Jaina Proudmoore\'s mentor in the Kirin Tor?",
    "answer": "Antonidas"
  },
  {
    "id": "trivia52",
    "question": "In which zone can the abomination known as Stitches be found?",
    "answer": "Duskwood"
  },
  {
    "id": "trivia53",
    "question": "Which Dragon Aspect leads the bronze dragonflight?",
    "answer": "Nozdormu"
  },
  {
    "id": "trivia54",
    "question": "Who was the original elemental lord of air?",
    "answer": "Al'Akir"
  },
  {
    "id": "trivia55",
    "question": "Garona Halforcen killed which Human king?",
    "answer": "Llane Wrynn"
  },
  {
    "id": "trivia56",
    "question": "Don Carlos Famous Hat allows owners to summon what type of incorporeal spirit?",
    "answer": "Coyote"
  },
  {
    "id": "trivia57",
    "question": "Which ogre was once an apprentice of Gul\'dan and would later lead the Twilight Hammer?",
    "answer": "Cho'Gall"
  },
  {
    "id": "trivia58",
    "question": "Dalaran was originally located in which Eastern Kingdoms zone?",
    "answer": "Hillsbrad Foothills"
  },
  {
    "id": "trivia59",
    "question": "What Dark Iron Dwarf boss can be fought in Blackrock Depths during Brewfest?",
    "answer": "Coren Direbrew"
  },
  {
    "id": "trivia60",
    "question": "Which Tauren leader was killed by Garrosh Hellscream?",
    "answer": "Cairne Bloodhoof"
  },
  {
    "id": "trivia61",
    "question": "In which zone can the Gallywix Pleasure Palace be found?",
    "answer": "Azshara"
  },
  {
    "id": "trivia62",
    "question": "Who was the last Pandaren emperor of Pandaria?",
    "answer": "Shaohao"
  },
  {
    "id": "trivia63",
    "question": "Nightsong Battlegear is a raid tier set for which class?",
    "answer": "Druid"
  },
  {
    "id": "trivia64",
    "question": "What zone did Goblins reshape to more resemble the symbol of the horde?",
    "answer": "Azshara"
  },
  {
    "id": "trivia65",
    "question": "What was the name of the former leader of the Kirin Tor and husband Vereesa Windrunner?",
    "answer": "Rhonin"
  },
  ]
};