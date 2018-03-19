
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("lance")) {
               message.channel.send("I HEARD MY NAME")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("I punched Sendak!")) {
               message.channel.send("Yeah, apparently after I emerged from a coma and shot his arm off.")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("We had a bonding moment. I cradled you in my arms!")) {
               message.channel.send("Nope. Don't remember, didn't happen.")
  	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
