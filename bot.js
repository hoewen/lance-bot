
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
     if(message.content.toLowerCase().includes("lance is gay")) {
               message.channel.send("...")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("lance is gay")) {
               message.channel.send("Wait no-")
  	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
